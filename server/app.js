const express = require('express')
const connectDB = require('./config/dbconfig')
const app = express()
const port = 3000

const eventsRoute = require('./routes/events')

// Connect to MongoDB
connectDB()

app.use('/events',eventsRoute)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen((port),(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is running on port ${port}`)
})