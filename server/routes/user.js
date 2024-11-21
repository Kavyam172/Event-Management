const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const { userLogin, userSignup, userLogout } = require('../controllers/userControllers');
const { protect } = require('../middlewares/auth');

router.post('/login',userLogin)

router.post('/signup',userSignup)

router.post('/logout', userLogout)

router.get('/profile',protect, (req, res) => {
    res.send('Profile Page')
})

module.exports = router;