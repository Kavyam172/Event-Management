import React, { useEffect, useState } from 'react';
import './First.css';
import EventCard from '../../Card/EventCard';

const UpcomingEvents = () => {

  const [events,setEvents] = useState([])

  //function to fetch all events from the database
    const fetchEvents = async () => {
        const response = await fetch('http://localhost:3000/events');
        const data = await response.json();
        console.log(data)
        setEvents(data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

  return (
    <>
        <div className="upcoming-events">
        <h1>Upcoming <span>Events</span> </h1>

        <div className="events-grid">
            {events.map((event) => (
            <EventCard key={event._id} title={event.title} id = {event._id} startdate = {event.startDate} location = {"location"} image = {event.banner} isFree={event.price>0?false:true}/>
            ))}
        </div>
        <div className="loadbutton">
            <button className="load-more">Load more...</button>
        </div>
        </div>
    </>
  );
};

export default UpcomingEvents;
