const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const { userLogin, userSignup } = require('../controllers/userControllers');



router.post('/login',userLogin)

router.post('/signup',userSignup)

module.exports = router;