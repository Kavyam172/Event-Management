const express = require('express');
const router = express.Router();
const Events = require('../models/Events');
const Venues = require('../models/Venues');
const Users = require('../models/Users');
const upload = require('../config/multerconfig');
const { default: mongoose } = require('mongoose');
const { protect, authorize } = require('../middlewares/auth');
const { uploadImage } = require('../config/cloudinaryconfig');
const fs = require('fs');

// get all events sorted according to the start date such that the event with the earliest start date comes first
router.get('/', async (req, res) => {
    try {
        const events = await Events.find().sort({ startDate: 1 });
        res.json(events);
    } catch (err) {
        res.json({ message: err });
    }
});

//endpoint to check if user is authorized to create event
router.get('/check-role',protect ,async (req, res) => {
    try{
        const userid = req.user.id;
        const user = await Users.findById(userid);
        res.json({role: user.role});
    }
    catch(err){
        console.log(err);
        res.json({message: err});
    }
});

// get all events created by a particular user
router.get('/user', protect,async (req, res) => {
    try {
        const userid = req.user.id;
        const events = await Events.find({ createdBy: userid }).populate("venueid").sort({ startDate: 1 });
        res.json(events);
    } catch (err) {
        res.json({ message: err });
    }
});

// get details of a particular event by id 
router.get('/:eventId', async (req, res) => {
    try {
        const event = await Events.findById(req.params.eventId).populate("venueid");
        res.json({event}); 
    } catch (err) {
        res.json({ message: err });
    }
});



// endpoint to create new event
router.post('/' ,upload.single('image'),protect, async (req, res) => {
    console.log(req.body);
    const userid = req.user.id;
    const imageUrl = await uploadImage(`./uploads/${req.file.filename}`)
    console.log(imageUrl);
    
    fs.unlink(`../uploads/${req.file.filename}`, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })


    const event = new Events({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        banner: imageUrl,
        venueid: req.body.venue,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        price: req.body.price,
        availableSeats: req.body.availableSeats,
        createdBy: userid
    });

    try {
        const savedEvent = await event.save();
        res.status(200).json(savedEvent);
    } catch (err) {
        console.log(err)    
        res.status(500).json({ message: err });
    }
});

module.exports = router;