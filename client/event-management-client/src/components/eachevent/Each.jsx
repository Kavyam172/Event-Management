import React, { useEffect, useState } from 'react'
import './Each.css'
import Each1 from './Each1/Each1'
import Each2 from './Each2/Each2'
import Each3 from './Each3/Each3'
import Each4 from './Each4/Each4'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Each = () => {

    const [event, setEvent] = useState({})
    const [venue, setVenue] = useState({})

    
    //fetch event by event id from server
    const fetchEvent = async (token) => {
        //get event id from url
        const eventId = window.location.href.split('/')[4]
        const res = await axios.get('http://localhost:3000/events/'+eventId,{
            headers: { Authorization: `Bearer ${token}` }
        })
        const data = res.data
        console.log(data)
        setEvent(data.event)
        setVenue(data.event.venueid)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const token = Cookies.get('token'); // Get the token from cookies
        if (!token) {
            window.location.href = '/signin';
            return;
        }
        fetchEvent(token)
    }, []);


    return (
        <>
         <Each1 event={event} eventid={event._id} banner={event.banner} title={event.title} venue={venue.name} date={event.startDate}/>
        <Each2 description={event.description} location={venue.address} starttime={event.startTime} endtime = {event.endTime} title={event.title}/>
        <Each3 category={event.category}/>
        </>
    )
}

export default Each