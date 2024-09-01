const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
    res.send('Login Route');
});

router.post('/signup', (req, res) => {
    res.send('Signup Route');
});

module.exports = router;