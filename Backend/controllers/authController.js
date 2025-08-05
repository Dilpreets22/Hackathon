const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// --- Registration Controller ---
exports.register = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password",
      });
    }

    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user in the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword, // Store the hashed password
      phoneNumber,
      role, // If role is not provided, it will default to 'user' based on our schema
    });

    // Save the user to the database
    await user.save();

    // Create JWT Token
    // The token payload is the data we want to store in the token.
    // We'll store the user's ID and role.
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) throw err;
        // Send success response with the token
        res.status(201).json({
          success: true,
          message: "User registered successfully",
          token: token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    // Handle potential validation errors from Mongoose
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res
        .status(400)
        .json({ success: false, message: messages.join(". ") });
    }
    res.status(500).send("Server error");
  }
};

// --- Login Controller ---
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and password",
      });
    }

    // We must do this because we set `select: false` in our User model
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Create and return a JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) throw err;

        res.status(200).json({
          success: true,
          message: "Logged in successfully",
          token: token,
          role: user.role,
        });
      }
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};

exports.googleCallback = async (req, res) => {
  const user = await User.findById(req.user.id).select("+password");
  const payload = {
    user: {
      id: user.id,
      role: user.role,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
    (err, token) => {
      if (err) throw err;
      // Check for password existence correctly now!
      if (!user.password) {
        return res.redirect(`${process.env.ORIGIN_URL}/set-password?token=${token}`);
      }
      // If password set, login directly
      res.redirect(`${process.env.ORIGIN_URL}/?token=${token}`);
    }
  );
};
