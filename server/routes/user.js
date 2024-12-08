const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const { userLogin, userSignup, userLogout, getProfile, updateUser } = require('../controllers/userControllers');
const { protect } = require('../middlewares/auth');

router.get('/',async (req, res) => {
    //get all users
    try {
        const users = await Users.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/login',userLogin)

router.post('/signup',userSignup)

router.post('/logout',protect , userLogout)

router.get('/profile',protect, getProfile)

router.put('/profile',protect, updateUser)

module.exports = router;