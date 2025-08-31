const express = require('express');
const router = express.Router();
const { categorizeTransaction, generateFinancialPulse, chatWithAI } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/ai/categorize
// @desc    Categorize a single transaction description
// @access  Private
router.post('/categorize', protect, categorizeTransaction);

// @route   POST /api/ai/financial-pulse
// @desc    Generate a financial wellness score for the user
// @access  Private
router.post('/financial-pulse', protect, generateFinancialPulse);

// @route   POST /api/ai/chat
// @desc    Have a conversational chat with the AI about finances
// @access  Private
router.post('/chat', protect, chatWithAI);

module.exports = router;