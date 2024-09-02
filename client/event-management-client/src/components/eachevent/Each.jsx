import React, { useEffect, useState } from 'react'
import './Each.css'
import Each1 from './Each1/Each1'
import Each2 from './Each2/Each2'
import Each3 from './Each3/Each3'
import Each4 from './Each4/Each4'

const Each = () => {

    const [event, setEvent] = useState({})
    const [venue, setVenue] = useState({})

    //fetch event by event id from server
    const fetchEvent = async () => {
        //get event id from url
        const eventId = window.location.href.split('/')[4]
        const res = await fetch('http://localhost:3000/events/'+eventId)
        const data = await res.json()
        console.log(data)
        setEvent(data.event)
        setVenue(data.venue)
    }

    //useEffect to call fetchEvent function
    useEffect(() => {
        fetchEvent()
    }, [])



    return (
        <>
        <Each1 title={event.title} venue={venue.name} date={event.startDate}/>
        <Each2 description={event.description} location={venue.address} starttime={event.startTime} endtime = {event.endTime} title={event.title}/>
        <Each3 category={event.category}/>
        </>
    )
}

export default Each