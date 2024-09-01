import React from 'react'
import './Fourth.css';
import EventCard from '../../Card/EventCard';




const OurBlogs=()=>{
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
        <div className="upcoming-events  Blogs">
            <h1> Our <span>Blogs</span></h1>
            
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

export default OurBlogs;