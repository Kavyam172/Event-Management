const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
require('dotenv').config();


const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
}


module.exports = { generateToken };