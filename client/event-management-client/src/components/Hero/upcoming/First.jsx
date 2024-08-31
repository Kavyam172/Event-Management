import React, { useState } from 'react';
import './First.css';
import EventCard from '../../Card/EventCard';

const UpcomingEvents = () => {
  const [weekdayFilter, setWeekdayFilter] = useState('All');
  const [eventTypeFilter, setEventTypeFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const events = [
    {
        title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
        date: 'Saturday,March 18, 12:00PM',
        location: 'Lucknow',
        image: '/src/assets/cardimg.svg',
        isFree: true,
    },
    {
        title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
        date: 'Saturday,March 18, 12:00PM',
        location: 'Lucknow',
        image: '/src/assets/cardimg.svg',
        isFree: true,
    },
    {
        title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
        date: 'Saturday,March 18, 12:00PM',
        location: 'Lucknow',
        image: '/src/assets/cardimg.svg',
        isFree: true,
    },
    {
        title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
        date: 'Saturday,March 18, 12:00PM',
        location: 'Lucknow',
        image: '/src/assets/cardimg.svg',
        isFree: true,
    },
    {
        title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
        date: 'Saturday,March 18, 12:00PM',
        location: 'Lucknow',
        image: '/src/assets/cardimg.svg',
        isFree: true,
    },
    {
        title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
        date: 'Saturday,March 18, 12:00PM',
        location: 'Lucknow',
        image: '/src/assets/cardimg.svg',
        isFree: true,
    },
    // Add more event objects here...
  ];

  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const filteredEvents = events.filter((event) => {
    const matchesWeekday = weekdayFilter === 'All' || event.weekday === weekdayFilter;
    const matchesEventType = eventTypeFilter === 'All' || event.eventType === eventTypeFilter;
    const matchesCategory = categoryFilter === 'All' || event.category === categoryFilter;
    return matchesWeekday && matchesEventType && matchesCategory;
  });

  return (
    <div className="upcoming-events">
      <h1>Upcoming <span>Events</span> </h1>

      <div className="filters">
        <select onChange={handleFilterChange(setWeekdayFilter)}>
          <option value="All">All Weekdays</option>
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

      <div className="events-grid">
        {filteredEvents.map((event) => (
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
