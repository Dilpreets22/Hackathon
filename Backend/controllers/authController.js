const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// --- Registration Controller ---
exports.register = async (req, res) => {
  console.log("➡️ Register controller hit:", req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log("❌ Missing fields");
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "fallbacksecret",
      { expiresIn: "30d" }
    );

    console.log("✅ User registered:", user.email);

    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error("🔥 Register error:", err.message);
    res.status(500).json({ message: "Server error" });
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

    if (!user.password) {
      return res.status(400).json({
        success: false,
        message:
          "This account was created with Google. Please sign in with Google.",
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Create and return a JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      token,
      user: userWithoutPassword,
    });
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
  const payload = { id: user._id };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
    (err, token) => {
      if (err) throw err;
      // Check for password existence correctly now!
      if (!user.password) {
        return res.redirect(
          `${process.env.ORIGIN_URL}/set-password?token=${token}`
        );
      }
      // If password set, login directly
      res.redirect(`${process.env.ORIGIN_URL}/dashboard?token=${token}`);
    }
  );
};

exports.setPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res
        .status(400)
        .json({ message: "Token and password are required" });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const userId = decoded.user?.id || decoded.id; // support both payload shapes

    if (!userId) {
      return res.status(400).json({ message: "Invalid token payload" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update user with the new password
    const user = await User.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: true, message: "Password set successfully" });
  } catch (err) {
    console.error("🔥 Set password error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
