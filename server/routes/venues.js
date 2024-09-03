const express = require('express');
const router = express.Router();
const Venues = require('../models/Venues');

// get all venues
router.get('/', async (req, res) => {
    try {
        const venues = await Venues.find();
        res.json(venues);
    } catch (err) {
        res.json({ message: err });
    }
});

// get details of a particular venue by id
router.get('/:venueId', async (req, res) => {
    try {
        const venue = await Venues.findById(req.params.venueId);
        res.json(venue);
    } catch (err) {
        res.json({ message: err });
    }
});

// endpoint to create new venue
router.post('/', async (req, res) => {
    const venue = new Venues({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        capacity: req.body.capacity
    });

    try {
        const savedVenue = await venue.save();
        res.json(savedVenue);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;