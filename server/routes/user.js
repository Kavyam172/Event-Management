const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const { userLogin, userSignup, userLogout } = require('../controllers/userControllers');



router.post('/login',userLogin)

router.post('/signup',userSignup)

router.post('/logout', userLogout)

module.exports = router;