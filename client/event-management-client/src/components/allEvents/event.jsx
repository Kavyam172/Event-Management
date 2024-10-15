import React, { useEffect, useRef, useState } from 'react';
import "./event.css";
import EventCard from '../Card/EventCard';
import { Link } from 'react-router-dom';

const Event = () => {
  const [startDateFilter, setStartDateFilter] = useState('All');
  const [endDateFilter, setEndDateFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [events,setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])

  
  const selectCategory = useRef(null)

  const categories = ['Music', 'Dance', 'Art', 'Theatre', 'Comedy', 'Food', 'Sports', 'Fitness', 'Health', 'Fashion', 'Technology', 'Business', 'Science', 'Travel', 'Religion', 'Charity', 'Education', 'Family', 'Community', 'Film', 'Media', 'Government', 'Home', 'Auto', 'Hobbies', 'Other']

  const addCategory = (categories) => {
    categories.forEach((category) => {
        const option = document.createElement('option')
        option.value = category
        option.text = category
        selectCategory.current.appendChild(option)
    })
}

  //function to fetch all events from the database
    const fetchEvents = async () => {
        const response = await fetch('http://localhost:3000/events');
        const data = await response.json();
        console.log(data)
        setEvents(data);
        setFilteredEvents(data);
    };

    const filterEvents = (data) => {
      //filtering based on start date
      for(let e of data){
        if (startDateFilter !== 'All') {
          data = data.filter((e) => e.startDate.slice(0,10) == startDateFilter);
        }
  
        //filtering based on end date
        if (endDateFilter !== 'All') {
          data = data.filter((e) => e.endDate.slice(0,10) == endDateFilter);
        }
  
        //filtering based on price
        if (priceFilter !== 'All') {
          if(priceFilter === '0'){
            data = data.filter((e) => e.price === 0);
          }
          else{
            data = data.filter((e) => e.price > 0);
          }
        }
  
        //filtering based on category
        if (categoryFilter !== 'All') {
          data = data.filter((e) => e.category === categoryFilter);
        }
        setFilteredEvents(data);
        console.log("filtered:"+filteredEvents);
      }

    }


    useEffect(() => {
      window.scrollTo(0,0);
      addCategory(categories);
      fetchEvents()
    }, []);

    useEffect(() => {
      filterEvents(events);
    }, [startDateFilter, endDateFilter, priceFilter, categoryFilter]);

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
          <label htmlFor="starts">From:</label>
          <input type='date' onChange={(e)=>{setStartDateFilter(e.target.value)}} id='starts'/>

          <label htmlFor="ends">To:</label>
          <input type='date' onChange={(e)=>{setEndDateFilter(e.target.value)}} id='ends'/>

          
          <select onChange={(e)=>{setPriceFilter(e.target.value)}}>
            <option value="All">All Prices</option>
            <option value="0">Free</option>
            <option value="1">Paid</option>
          </select>

          <select ref={selectCategory} onChange={(e)=>{setCategoryFilter(e.target.value)}}>
            <option value="All">All Categories</option>
          </select>
        </div>
      </div>
      
      <div className="events-grid-all">
        {filteredEvents.map((event) => (
          <Link key={event._id} to={"http://localhost:5173/event/"+event._id}>
            <EventCard key={event._id} title={event.title} startdate={event.startDate} image={event.banner} isFree={event.price>0?false:true} venue={event.venue}/>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Event;
