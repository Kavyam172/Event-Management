import React, { useEffect, useState } from 'react'
import "./Venue.css"
import EventCard from '../Card/EventCard'

const Venue = () => {
  const [venue,setVenue] = useState([])
  const fetchVenue = async (id) => {
    const response = await fetch(`http://localhost:3000/venues/${id}`);
    const data = await response.json();
    console.log(data)
    setVenue(data);
  };

  useEffect(() => {
    const id = window.location.href.split('/')[4];
    fetchVenue(id);
  }, []);
  return (
    <>
      <div className="image">
        <img src="/src/assets/Roorkee.png" alt="roorkee" />
      </div>
      <div className="content">
        <h2>{venue.name}</h2>
        <h4>Location:</h4><p>{venue.address}</p>
        <h4>Total Capacity:</h4><p>{venue.capacity}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fugiat.</p>
      </div>
      <div className="events">
        <h2>Past <span>Events</span></h2>
        <div className="cards">
          <div className="card">
            <EventCard/>
          </div>
          <div className="card">
            <EventCard/>
          </div>
          <div className="card">
            <EventCard/>
          </div>
          <div className="card">
            <EventCard/>
          </div>
          <div className="card">
            <EventCard/>
          </div>
          <div className="card">
            <EventCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Venue