import React from 'react'
import './First.css';


const EventCard = ({ title, date, location, image, isFree }) => {
    return (
        <div className='firstbox'>
            <div className="event-card">
                {isFree && <div className="free-tag">Free</div>}
                
                    <img src={image} alt={title} />
                

                <div className="event-info">
                    <h3>{title}</h3>
                    <p>
                        {date} - {location}
                    </p>
                    <h6>ONLINE EVENT - Attend anywhere </h6>
                </div>

            </div>
        </div>


    )
};





const UpcomingEvents = () => {
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



    ];
    return (
        <div className="upcoming-events">
            <h1>Upcoming <span>Events</span> </h1>

            <div className="events-grid">
                {events.map((event) => (
                    <EventCard key={event.title} {...event} />
                ))}
            </div >
            <div className="loadbutton">
                <button className="load-more">Load more...</button>
            </div>

        </div>
    );
};

export default UpcomingEvents;