const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../config/jwtconfig');
const bcrypt = require('bcryptjs');

const userLogin = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email: email })

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        console.log(user)

        const token = generateToken(user);
        res.cookie('token', token, { 
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === 'production' 
        });
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

const userSignup = async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    try {
        const user = await Users.findOne({ email: email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await Users.create({ name, email, password: hashedPassword });
            newUser.save();
            res.status(201).json({ newUser });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

//logout
const userLogout = (req, res) => {
    res.clearCookie('token',{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
    });
    res.status(200).json({ message: 'Logged out' });
} 

const getProfile = async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    try {
        const user = await Users.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ user });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = { userLogin, userSignup, userLogout, getProfile };