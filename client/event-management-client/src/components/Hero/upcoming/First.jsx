import React, { useState } from 'react';
import './First.css'; // Assuming this CSS file styles the component
import EventCard from '../../Card/EventCard';

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
          <EventCard key={event.title} {...event} />
        ))}
      </div>

      <div className="loadbutton">
        <button className="load-more">Load more...</button>
      </div>
    </div>
  );
};

export default UpcomingEvents;