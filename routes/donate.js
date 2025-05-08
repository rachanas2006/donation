const express = require('express');
const router = express.Router();
const { submitDonation } = require('../controllers/donateController');

router.post('/', submitDonation);

module.exports = router;
