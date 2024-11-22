const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const { protect } = require('../middleware/authMiddleware');
const { getBookings, getBookingById, checkAvailability, getBookingByUserId, createBooking, confirmBooking,cancelBooking } = require('../controllers/bookingControllers');

router.get('/', getBookings);
router.get('/:id',protect, getBookingById);
router.post('/check', checkAvailability);
router.get('/user/:id',protect, getBookingByUserId);
router.post('/create', protect, createBooking);
router.put('/confirm',protect, confirmBooking);
router.put('/cancel', cancelBooking);


module.exports = router;