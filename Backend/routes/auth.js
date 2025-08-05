const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  googleCallback,
} = require("../controllers/authController");
const { protect, authorize } = require("../middleware/authMiddleware");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


router.post("/register", register);

router.post("/login", login);

// --- Google OAuth Routes ---
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  googleCallback // The logic is now cleanly handled by the controller
);

// --- Example Protected Routes ---
router.get("/me", protect, getMe);

router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome, Admin! You have accessed a protected admin route.",
  });
});

router.post("/set-password", protect, async (req, res) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    req.user.password = hashed; // Set new password for the logged-in user
    await req.user.save(); // Save updated user in DB

    res.status(200).json({ message: "Password set successfully" });
  } catch (err) {
    console.error("Set password error:", err);
    res.status(500).json({ message: "Failed to set password" });
  }
});

module.exports = router;
