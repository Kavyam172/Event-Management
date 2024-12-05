import React, { useEffect, useState } from 'react'
import './Third.css';
import EventCard from '../../Card/EventCard';
import VenueCard from './VenueCard/VenueCard';
import { Link } from 'react-router-dom';



const TrendingColleges=()=>{
    const [venues,setVenues] = useState([])

    const fetchVenue = async (id) => {
        const response = await fetch(`http://localhost:3000/venues/`);
        const data = await response.json();
        console.log(data)
        data.length = 6;
        setVenues(data);
    };

    useEffect(() => {
        fetchVenue();
    }, []);

    return(
        <div className="upcoming-events  Trending">
            <h1> Our <span>Venues</span> </h1>
            
            <div className="events-grid">
                {venues.map((venue)=>(
                    <Link to={"./venues/"+venue._id} key={venue._id}>
                        <VenueCard key ={venue._id} image={venue.image} name={venue.name} location={venue.address}/>
                    </Link>
                ))}
            </div >
            <div className="loadbutton">
            <button className="load-more">Load more...</button>
            </div>
            
        </div>
    );
};

export default TrendingColleges;