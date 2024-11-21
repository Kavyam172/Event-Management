const express = require('express');
const router = express.Router();
const Venues = require('../models/Venues');
const upload = require('../config/multerconfig');
const { uploadImage } = require('../config/cloudinaryconfig');
const fs = require('fs');

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
router.post('/', upload.single('image'),async (req, res) => {
    console.log(req.file)
    const imageUrl = await uploadImage(`./uploads/${req.file.filename}`)
    fs.unlink(`./uploads/${req.file.filename}`, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
    const venue = new Venues({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        capacity: req.body.capacity,
        image: imageUrl
    });

    try {
        const savedVenue = await venue.save();
        res.json(savedVenue);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;