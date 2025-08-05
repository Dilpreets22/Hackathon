const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phoneNumber: {
      type: String,
      match: [/^\d{10}$/, "Please provide a valid 10-digit phone number"],
    },
    password: {
      type: String,
      minlength: [6, "Minimum password length is 6 characters"],
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Defines the possible roles
      default: "user", // Default role is 'user'
    },
    googleId: {
      type: String,
    },
    linkedinId: {
      type: String,
    },
  },
  { timestamps: true }
); 

module.exports = mongoose.model("User", userSchema);
