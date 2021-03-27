const express = require("express");

const { signUpController } = require('../controllers/auth');

const router = express.Router();

router.post('/sign-up', signUpController);

module.exports = router;