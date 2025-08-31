const express = require('express');
const router = express.Router();
const { createLinkToken, exchangePublicToken, getTransactions } = require('../controllers/plaidController');
const {protect} = require('../middleware/authMiddleware'); 

// @route   POST api/plaid/create_link_token
// @desc    Create a link_token
// @access  Private
router.post('/create_link_token', protect, createLinkToken);

// @route   POST api/plaid/exchange_public_token
// @desc    Exchange public_token for access_token
// @access  Private
router.post('/exchange_public_token', protect, exchangePublicToken);

// @route   GET api/plaid/transactions
// @desc    Get user's transactions for the last 30 days
// @access  Private
router.get('/transactions', protect, getTransactions);

module.exports = router;