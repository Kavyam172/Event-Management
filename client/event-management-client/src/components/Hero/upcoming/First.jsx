import React, { useEffect, useState } from 'react';
import './First.css'; // Assuming this CSS file styles the component
import EventCard from '../../Card/EventCard';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {

  const [events,setEvents] = useState([])

  //function to fetch all events from the database
    const fetchEvents = async () => {
        const response = await fetch('http://localhost:3000/events');
        const data = await response.json();
        console.log(data)
        //save only first six events
        data.length = 6;
        setEvents(data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

  return (
    <div className="upcoming-events">
      <h1>Upcoming <span>Events</span> </h1>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event._id} title={event.title} startdate={event.startDate} image={event.banner} isFree={event.price>0?false:true}/>
        ))}
      </div>

      <div className="loadbutton">
        <Link to={"./events"} className="load-more">Load more...</Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;