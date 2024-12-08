const express = require('express');
const router = express.Router();
const Bookings = require('../models/Bookings');
const Events = require('../models/Events');
const Venues = require('../models/Venues');
const Users = require('../models/Users');

//_SALES STATS
// get total sales 
router.get('/total-sales', async (req, res) => {
    const totalSales = await Bookings.aggregate([
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: null, total: { $sum: '$totalPrice' } } }
    ])
    res.json(totalSales)
})

// get total sales by venue
router.get('/sales-by-venue', async (req, res) => {
    const salesByVenue = await Bookings.aggregate([
        { $addFields: { eventid: { $toObjectId: "$eventid" } } },
        {
            $lookup: {
                from: 'events',
                localField: 'eventid',
                foreignField: '_id',
                as: 'eventDetails'
            }
        },
        {
            $unwind: '$eventDetails'
        },
        {
            $addFields: { venueid: { $toObjectId: "$eventDetails.venueid" } }
        },
        {
            $lookup: {
                from: 'venues',
                localField: 'venueid',
                foreignField: '_id',
                as: 'venueDetails'
            }
        },
        {
            $unwind: '$venueDetails'
        },
        {
            $match: { paymentStatus: 'confirmed' }
        },
        {
            $group: { _id: '$venueDetails.name', total: { $sum: '$totalPrice' } }
        }
    ])
    res.json(salesByVenue)
})

// get total sales by event
router.get('/sales-by-event', async (req, res) => {
    const salesByEvent = await Bookings.aggregate([
        {
            $addFields: { eventid: { $toObjectId: "$eventid" } }
        },
        {
            $lookup: {
                from: 'events',
                localField: 'eventid',
                foreignField: '_id',
                as: 'eventDetails'
            }
        },
        {
            $unwind: '$eventDetails'
        },
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: {title:"$eventDetails.title", id:"$eventDetails._id"}, total: { $sum: '$totalPrice' } } },
        //sort by total sales
        { $sort: { total: -1 } }
    ])
    res.json(salesByEvent)
})

// get total sales by user
router.get('/sales-by-user', async (req, res) => {
    const salesByUser = await Bookings.aggregate([
        {
            $addFields: { user: { $toObjectId: "$userid" } }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'userDetails'
            }
        },
        {
            $unwind: '$userDetails'
        },
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: '$userDetails.email', total: { $sum: '$totalPrice' } } }
    ])
    res.json(salesByUser)
})

// get total sales by date
router.get('/sales-by-date', async (req, res) => {
    const salesByDate = await Bookings.aggregate([
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: {$dateToString: { format: "%Y-%m-%d", date: "$createdAt" }}, total: { $sum: '$totalPrice' } } }
    ])
    res.json(salesByDate)
})

// get total sales by month
router.get('/sales-by-month', async (req, res) => {
    const salesByMonth = await Bookings.aggregate([
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } }, total: { $sum: '$totalPrice' } } }
    ])
    res.json(salesByMonth)
})

// get total sales by category
router.get('/sales-by-category', async (req, res) => {
    const salesByCategory = await Bookings.aggregate([
        {
            $addFields: { eventid: { $toObjectId: "$eventid" } }
        },
        {
            $lookup: {
                from: 'events',
                localField: 'eventid',
                foreignField: '_id',
                as: 'eventDetails'
            }
        },
        {
            $unwind: '$eventDetails'
        },
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: '$eventDetails.category', total: { $sum: '$totalPrice' } } }
    ])
    res.json(salesByCategory)
})

// total sales by days of the week
router.get('/sales-by-day', async (req, res) => {
    const salesByDay = await Bookings.aggregate([
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: { $dayOfWeek: '$createdAt' }, total: { $sum: '$totalPrice' } } }
    ])
    res.json(salesByDay)
})


//_BOOKINGS STATS
// get total bookings
router.get('/total-bookings',async (req, res) => {
    const totalBookings =await Bookings.aggregate([
        { $match: { paymentStatus:'confirmed' } },
        { $group: { _id: null, total: { $sum: 1 } } }
    ])
    res.json(totalBookings)
})

// get total bookings by venue
router.get('/bookings-by-venue',async (req, res) => {
    const bookingsByVenue =await Bookings.aggregate([
        { $addFields: { eventid: { $toObjectId: "$eventid" } } },
        {
            $lookup:{
                from:'events',
                localField:'eventid',
                foreignField:'_id',
                as:'eventDetails'
            }
        },
        {
            $unwind:'$eventDetails'
        },
        {
            $addFields: { venueid: { $toObjectId: "$eventDetails.venueid" } }
        },
        {
            $lookup: {
                from: 'venues',
                localField: 'venueid',
                foreignField: '_id',
                as: 'venueDetails'
            }
        },
        {
            $unwind: '$venueDetails'
        },
        {
            $match:{ paymentStatus:'confirmed' }
        },
        {
            $group: { _id: '$venueDetails.name', total: { $sum: 1 } }
        }
    ])
    res.json(bookingsByVenue)
})

// get total bookings by event
router.get('/bookings-by-event',async (req, res) => {
    const bookingsByEvent =await Bookings.aggregate([
        {
            $addFields: { eventid: { $toObjectId: "$eventid" } }
        },
        {
            $lookup: {
                from: 'events',
                localField: 'eventid',
                foreignField: '_id',
                as: 'eventDetails'
            }
        },
        {
            $unwind: '$eventDetails'
        },
        { $match: { paymentStatus:"confirmed" } },
        { $group: { _id: '$eventDetails.title', total: { $sum: 1 } } }
    ])
    res.json(bookingsByEvent)
})

// get total bookings by user
router.get('/bookings-by-user',async (req, res) => {
    const bookingsByUser =await Bookings.aggregate([
        {
            $addFields: { user: { $toObjectId: "$userid" } }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'user',
                foreignField: '_id',
                as: 'userDetails'
            }
        },
        {
            $unwind: '$userDetails'
        },
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: '$userDetails.email', total: { $sum: 1 } } }
    ])
    res.json(bookingsByUser)
})

// get total bookings by date
router.get('/bookings-by-date',async (req, res) => {
    const bookingsByDate =await Bookings.aggregate([
        { $match: { paymentStatus:"confirmed" } },
        { $group: { _id: {$dateToString: { format: "%Y-%m-%d", date: "$createdAt" }}, total: { $sum: 1 } } }
    ])
    res.json(bookingsByDate)
})

// get total bookings by month
router.get('/bookings-by-month',async (req, res) => {
    const bookingsByMonth =await Bookings.aggregate([
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: { year:{$year:'$createdAt'},month:{$month:'$createdAt'} }, total: { $sum: 1 } } }
    ])
    res.json(bookingsByMonth)
})

// get total bookings by category
router.get('/bookings-by-category',async (req, res) => {
    const bookingsByCategory =await Bookings.aggregate([
        {
            $addFields: { eventid: { $toObjectId: "$eventid" } }
        },
        {
            $lookup: {
                from: 'events',
                localField: 'eventid',
                foreignField: '_id',
                as: 'eventDetails'
            }
        },
        {
            $unwind: '$eventDetails'
        },
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: '$eventDetails.category', total: { $sum: 1 } } }
    ])
    res.json(bookingsByCategory)
})

// get total bookings by days of the week
router.get('/bookings-by-day',async (req, res) => {
    const bookingsByDay =await Bookings.aggregate([
        { $match: { paymentStatus: 'confirmed' } },
        { $group: { _id: { $dayOfWeek: '$createdAt' }, total: { $sum: 1 } } }
    ])
    res.json(bookingsByDay)
})

// get total bookings by payment status
router.get('/bookings-by-payment-status',async (req, res) => {
    const bookingsByPaymentStatus =await Bookings.aggregate([
        { $group: { _id: '$paymentStatus', total: { $sum: 1 } } }
    ])
    res.json(bookingsByPaymentStatus)
})

//_EVENTS STATS
// get total events
router.get('/total-events',async (req, res) => {
    const totalEvents =await Events.aggregate([
        { $group: { _id: null, total: { $sum: 1 } } }
    ])
    res.json(totalEvents)
})

//_VENUES STATS
// get total venues
router.get('/total-venues',async (req, res) => {
    const totalVenues =await Venues.aggregate([
        { $group: { _id: null, total: { $sum: 1 } } }
    ])
    res.json(totalVenues)
})

//_USERS STATS
// get total users
router.get('/total-users',async (req, res) => {
    const totalUsers =await Users.aggregate([
        { $group: { _id: null, total: { $sum: 1 } } }
    ])
    res.json(totalUsers)
})

// get total new users today
router.get('/new-users-today',async (req, res) => {
    const newUsersToday =await Users.aggregate([
        { $match: { createdAt: { $gte: new Date(new Date().setHours(0o0, 0o0, 0o0)), $lt: new Date(new Date().setHours(23, 59, 59)) } } },
        { $group: { _id: null, total: { $sum: 1 } } }
    ])
    res.json(newUsersToday)
})

//get total new users this month
router.get('/new-users-this-month',async (req, res) => {
    const newUsersThisMonth =await Users.aggregate([
        { $match: { createdAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1), $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) } } },
        { $group: { _id: null, total: { $sum: 1 } } }
    ])
    res.json(newUsersThisMonth)
})

// get total new users this year
router.get('/new-users-this-year',async (req, res) => {
    const newUsersThisYear =await Users.aggregate([
        { $match: { createdAt: { $gte: new Date(new Date().getFullYear(), 0, 1), $lt: new Date(new Date().getFullYear(), 12, 0) } } },
        { $group: { _id: null, total: { $sum: 1 } } }
    ])
    res.json(newUsersThisYear)
})

// get total users by date
router.get('/users-by-date',async (req, res) => {
    const usersByDate =await Users.aggregate([
        { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, total: { $sum: 1 } } }
    ])
    res.json(usersByDate)
})

// get total users by month
router.get('/users-by-month',async (req, res) => {
    const usersByMonth =await Users.aggregate([
        { $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } }, total: { $sum: 1 } } }
    ])
    res.json(usersByMonth)
})

// get total users by year
router.get('/users-by-year',async (req, res) => {
    const usersByYear =await Users.aggregate([
        { $group: { _id: { $year: '$createdAt' }, total: { $sum: 1 } } }
    ])
    res.json(usersByYear)
})

// get total users by their ages. if age is null, it will be considered as 0
router.get('/users-by-age',async (req, res) => {
    const usersByAge =await Users.aggregate([
        {
            $addFields: {
                age:{
                    $cond:{
                        if: { $not: ["$DOB"] }, // Check if DOB is null or not present
                        then: 0, // Default age
                        else: {
                            $floor: {
                                $divide: [
                                    { $subtract: [new Date(), "$DOB"] }, // Calculate age in milliseconds
                                    1000 * 60 * 60 * 24 * 365 // Convert milliseconds to years
                                ]
                            }
                        }
                    }
                }
            }
        },
        {
            $group: {
                _id: {
                    $switch: {
                        branches: [
                            { case: { $and: [{ $gt: ["$age", 0] }, { $lt: ["$age", 18] }] }, then: "0-17" },
                            { case: { $and: [{ $gte: ["$age", 18] }, { $lt: ["$age", 25] }] }, then: "18-24" },
                            { case: { $and: [{ $gte: ["$age", 25] }, { $lt: ["$age", 35] }] }, then: "25-34" },
                            { case: { $and: [{ $gte: ["$age", 35] }, { $lt: ["$age", 45] }] }, then: "35-44" },
                            { case: { $and: [{ $gte: ["$age", 45] }, { $lt: ["$age", 55] }] }, then: "45-54" },
                            { case: { $gte: ["$age", 55] }, then: "55+" }
                        ],
                        default: "Unknown"
                    }
                },
                total: { $sum: 1 }
            }
        }
    ])
    res.json(usersByAge)
})










module.exports = router;