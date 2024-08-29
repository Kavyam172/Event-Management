import React from 'react'
import './EventCard.css';

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

export default EventCard;