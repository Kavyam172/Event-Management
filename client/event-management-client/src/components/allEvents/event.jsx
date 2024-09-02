import React, { useEffect, useState } from 'react';
import "./event.css";
import EventCard from '../Card/EventCard';

const Event = () => {
  const [weekdayFilter, setWeekdayFilter] = useState('All');
  const [eventTypeFilter, setEventTypeFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
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



  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div>
      <div className="event-hive-hero">
        <div className="hero-content">
          <h2>Thriving Above Event Expectations.</h2>
          <h1>Event <span>Hive</span>-ing the Best.Day. Ever.</h1>
          <div className="stats">
            <div>
              <span>2k+</span>
              <p>Total Events Hosted</p>
            </div>
            <div>
              <span>100+</span>
              <p>Total Events Live</p>
            </div>
          </div>
        </div>

        <img src="src/assets/event-Image.svg" alt="Event Hive Hero Image" className="hero-image" />
      </div>

      <div className="event-card-section">
        <h1><span>Events</span> Around You</h1>
        <div className="filter-section">
          <select onChange={handleFilterChange(setWeekdayFilter)}>
            <option value="All">Weekdays</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>

          <select onChange={handleFilterChange(setEventTypeFilter)}>
            <option value="All">All Event Types</option>
            <option value="Workshop">Workshop</option>
            <option value="Webinar">Webinar</option>
            <option value="Conference">Conference</option>
            <option value="Meetup">Meetup</option>
          </select>

          <select onChange={handleFilterChange(setCategoryFilter)}>
            <option value="All">All Categories</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
          </select>
        </div>
      </div>
      
      <div className="events-grid-all">
        {events.map((event) => (
            <EventCard key={event._id} title={event.title} startdate={event.startDate} image={event.banner} isFree={event.price>0?false:true}/>
          ))}
      </div>
    </div>
  );
}

export default Event;
