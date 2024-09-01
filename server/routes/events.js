const express = require('express');
const router = express.Router();
const Events = require('../models/Events');
const upload = require('../config/multerconfig');

// get all events sorted according to the start date such that the event with the earliest start date comes first
router.get('/', async (req, res) => {
    try {
        const events = await Events.find().sort({ startDate: 1 });
        res.json(events);
    } catch (err) {
        res.json({ message: err });
    }
});

// get details of a particular event by id
router.get('/:eventId', async (req, res) => {
    try {
        const event = await Events.findById(req.params.eventId);
        res.json(event);
    } catch (err) {
        res.json({ message: err });
    }
});

// endpoint to create new event
router.post('/',upload.single('image'), async (req, res) => {
    // send the uploaded image as url in the response
    const imageUrl = `/uploads/${req.file.filename}`

    const event = new Events({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        banner: 'http://localhost:3000'+imageUrl,
        venueid: req.body.venueid,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        price: req.body.price,
        availableSeats: req.body.availableSeats
    });

    try {
        const savedEvent = await event.save();
        res.json(savedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;