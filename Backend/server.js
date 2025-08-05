const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const passport = require("passport");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.ORIGIN_URL || "http://localhost:5173",
  credentials: true,
}));

// Connect to database
connectDB();

// Body Parser Middleware (to accept JSON data in request body)
app.use(express.json());

// Passport Config
require("./config/passport")(passport); 
// Passport middleware
app.use(passport.initialize()); 

// Define Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));