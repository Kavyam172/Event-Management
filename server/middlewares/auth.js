const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
require('dotenv').config();

const protect = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log(token);
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); 
      console.log(decoded);
      req.user = decoded;
      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: 'Token is not valid' });
    }
};

const authorize = (role) => {
    return (req, res, next) => {
        if (!role.includes(req.user.role)) {
            return res.status(403).json({ message: 'Not authorized to access this route' });
        }
        next();
    }
}

module.exports = { protect, authorize };