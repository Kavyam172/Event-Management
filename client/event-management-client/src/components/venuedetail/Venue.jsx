import React, { useEffect, useState } from 'react'
import "./Venue.css"
import EventCard from '../Card/EventCard'
import { Link } from 'react-router-dom'

const Venue = () => {
  const [venue,setVenue] = useState([])
  const [events,setEvents] = useState([])
  const fetchEvents = async(id)=>{
    const response = await fetch('http://localhost:3000/events');
    const data = await response.json();
    const event = data.filter((event)=>event.venueid === id)
    console.log(event)
    setEvents(event)
  }
  const fetchVenue = async (id) => {
    const response = await fetch(`http://localhost:3000/venues/${id}`);
    const data = await response.json();
    console.log(data)
    setVenue(data);
  };

  useEffect(() => {
    const id = window.location.href.split('/')[4];
    fetchVenue(id);
    fetchEvents(id);
  }, []);
  return (
    <>
      <div className="image">
        <img src={venue.image===null?"/src/assets/Roorkee.png":venue.image} alt="roorkee" />
      </div>
      <div className="content">
        <h1>{venue.name}</h1>
        <h4>Location:</h4><p>{venue.address}</p>
        <h4>Total Capacity:</h4><p>{venue.capacity}</p>
      </div>
      <div className="events">
        <h1>Events</h1>
        <div className="cards">
          {(events.length === 0) ? <h2>No Events</h2> : events.map((event)=>(
            <div className="card">
              <Link key={event._id}>
                <EventCard key={event._id} startdate={event.startDate} venue={event.venue} image={event.banner} isFree={event.price==0?true:false}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Venue