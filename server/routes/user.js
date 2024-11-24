const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const { userLogin, userSignup, userLogout, getProfile } = require('../controllers/userControllers');
const { protect } = require('../middlewares/auth');

router.post('/login',userLogin)

router.post('/signup',userSignup)

router.post('/logout',protect , userLogout)

router.get('/profile',protect, getProfile)

module.exports = router;