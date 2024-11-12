const express = require('express')
const connectDB = require('./config/dbconfig')
const cors = require('cors')
const app = express()
const port = 3000

const eventsRoute = require('./routes/events')
const venuesRoute = require('./routes/venues')
const usersRoute = require('./routes/user')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/uploads',express.static('uploads'))

// Connect to MongoDB
connectDB()

app.use('/events',eventsRoute)
app.use('/venues',venuesRoute)
app.use('/users',usersRoute)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen((port),(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is running on port ${port}`)
})