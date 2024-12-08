const express = require('express')
const connectDB = require('./config/dbconfig')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = 3000

const eventsRoute = require('./routes/events')
const venuesRoute = require('./routes/venues')
const usersRoute = require('./routes/user')
const bookingsRoute = require('./routes/bookings')
const statsRoute = require('./routes/stats')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())

app.use('/uploads',express.static('uploads'))

// Connect to MongoDB
connectDB()

app.use('/events',eventsRoute)
app.use('/venues',venuesRoute)
app.use('/users',usersRoute)
app.use('/bookings',bookingsRoute)
app.use('/stats',statsRoute)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen((port),(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is running on port ${port}`)
})