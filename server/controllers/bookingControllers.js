const Booking = require('../models/Bookings');
const Events = require('../models/Events');
const User = require('../models/Users');
const Stripe = require('stripe')
require('dotenv').config();

const getCheckoutSession = async (req, res) => {
    const { eventId, seats,bookingId } = req.body;
    const userId = req.user.id;
    const event = await Events.findById(eventId);
    if(!event) return res.status(404).json({ message: 'Event not found' });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success?bookingId=${bookingId}&eventId=${eventId}`,
        cancel_url: `${process.env.CLIENT_URL}/fail,bookingId=${bookingId}&eventId=${eventId}`,
        customer_email: req.user.email,
        client_reference_id: userId,
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: event.title,
                        description: event.description,
                        images: [event.image],
                    },
                    unit_amount: event.price * 100,
                },
                quantity: seats,
            },
        ]
    });

    res.status(200).json(session)
}


const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' });
    }
}

const getBookingById = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const booking = await Booking.findById(bookingId).populate('eventId');
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' });
    }
}

const checkAvailability = async (req, res) => {
    try {
        const { eventId, seats } = req.body;
        const event = await Events.findById(eventId);
        if(!event) return res.status(404).json({ message: 'Event not found' });
        if(event.availableSeats < seats){

         return res.status(400).json({ message: 'Not enough seats available' });
        }
        res.status(200).json({ message: 'Seats available' });

        
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' });
    }
}

const getBookingByUserId = async (req, res) => {
    try {
        const userId = req.user.id;
        const bookings = await Booking.find({ userId: userId }).populate('eventId');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' });
    }
}

const createBooking = async (req, res) => {
    try {
        const userId = req.user.id;
        const { eventId, seats, totalPrice,paymentMethod ,paymentStatus } = req.body;
        const event = await Events.findById(eventId);
        if(!event) return res.status(404).json({ message: 'Event not found' });
        const booking = new Booking({
            userid: userId,
            eventid: eventId,
            seats,
            totalPrice,
            paymentMethod,
            paymentStatus: 'pending',
        });
        await booking.save();

        event.availableSeats -= seats;
        await event.save();
        res.status(201).json({booking:booking,status:'pending'});
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Something went wrong' });
    }
}

const confirmBooking = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const userId = req.user.id;

        const booking = await Booking.findById(bookingId)
        const user = await User.findById(userId)
        console.log(user.bookings)

        if(!booking) return res.status(404).json({ message: 'Booking not found' });
        if(booking.paymentStatus === 'confirmed') return res.status(400).json({ message: 'Booking already confirmed' });

        booking.paymentStatus = 'confirmed';
        await booking.save();

        user.bookings.push(bookingId);
        await user.save();

        res.status(200).json(booking);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Something went wrong' });
    }
}

//cancel booking
const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.body.id);

        booking.status = 'cancelled';
        await booking.save();

        //update available seats
        const event = await Events.findById(booking.eventId);
        event.availableSeats += booking.seats;
        await event.save();
        
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    getCheckoutSession,
    getBookings,
    getBookingById,
    checkAvailability,
    getBookingByUserId,
    createBooking,
    confirmBooking,
    cancelBooking
}
