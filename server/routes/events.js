const express = require('express');
const router = express.Router();
const Events = require('../models/Events');
// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Events.find();
        console.log(events)
        res.json(events);
    } catch (err) {
        console.log(err)
        res.json({ message: err });
    }
});

// Get event by id
router.get('/:eventId', async (req, res) => {
    try {
        const event = await Events.findById(req.params.eventId);
        res.json(event);
    } catch (err) {
        res.json({ message: err });
    }
});

// Create new event
router.post('/', async (req, res) => {
    const event = new Events({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        banner: req.body.banner,
        venueid: req.body.venueid,
        shows: req.body.shows
    });
    try {
        const savedEvent = await event.save();
        res.json(savedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update event by id
router.patch('/:eventId', async (req, res) => {
    try {
        const updatedEvent = await Events.updateOne({ _id: req.params.eventId }, { $set: { title: req.body.title } });
        res.json(updatedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete event by id
router.delete('/:eventId', async (req, res) => {
    try {
        const removedEvent = await Events.remove({ _id: req.params.eventId });
        res.json(removedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;