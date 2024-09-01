import React from 'react'
import './Third.css';
import EventCard from '../../Card/EventCard';




const TrendingColleges=()=>{
    const events=[
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        }
       
        
    ];
    return(
        <div className="upcoming-events  Trending">
            <h1> Trending <span>Colleges</span> </h1>
            
            <div className="events-grid">
                {events.map((event)=>(
                    <EventCard key ={event.title} {...event}/>
                ))}
            </div >
            <div className="loadbutton">
            <button className="load-more">Load more...</button>
            </div>
            
        </div>
    );
};

export default TrendingColleges;