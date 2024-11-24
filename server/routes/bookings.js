const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const { getCheckoutSession,getBookings, getBookingById, checkAvailability, getBookingByUserId, createBooking, confirmBooking,cancelBooking } = require('../controllers/bookingControllers');

router.get('/', getBookings);
router.get('/:id',protect, getBookingById);
router.post('/check', checkAvailability);
router.get('/user/:id',protect, getBookingByUserId);
router.post('/create', protect, createBooking);
router.post('/confirm',protect, confirmBooking);
router.post('/payment',protect, getCheckoutSession);
router.put('/cancel', cancelBooking);


module.exports = router;