import React from 'react'
import "./Each4.css"
import EventCard from '../../Card/EventCard';



const Each4=()=>{
    const events=[
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
        {
            title:'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
            date:'Saturday,March 18, 12:00PM',
            location: 'Lucknow',
            image: '/src/assets/cardimg.svg', 
            isFree: true,
        },
       
        

        
    ];
    return(
        <div className="upcoming-events  Blogs kiwi">
            <h1> Other events you may like</h1>
            
            <div className="events-grid">
                {events.map((event)=>(
                    <EventCard key ={event.title} {...event}/>
                ))}
            </div >
            {/* <div className="loadbutton">
            <button className="load-more">Load more...</button>
            </div> */}
            
        </div>
    );
};

export default Each4;