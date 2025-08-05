const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback", // Must match the one in Google Cloud Console
      },
      async (accessToken, refreshToken, profile, done) => {
        // This function is called when Google successfully authenticates the user.
        // 'profile' contains the user's Google profile information.
        const newUser = {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        };

        try {
          let user = await User.findOne({ googleId: profile.id });
          if (user) {
            done(null, user);
          } else {
            // If no user with this Google ID, check if one exists with the same email
            user = await User.findOne({ email: profile.emails[0].value });

            if (user) {
              // If a user with that email exists, it means they likely signed up
              // with email/password before. We'll link their Google account.
              user.googleId = profile.id;
              await user.save();
              done(null, user);
            } else {
              // If no user exists at all, create a new one in our database
              user = await User.create(newUser);
              done(null, user);
            }
          }
        } catch (err) {
          console.error(err);
          done(err, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
