import React from 'react'
import './EventCard.css';

const EventCard = ({ title, startdate, location, image, isFree }) => {
    return (
        <div className='firstbox'>
            <div className="event-card">
                {isFree && <div className="free-tag">Free</div>}
                
                <img src={image?image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qdvtT10hehHKT30f62OgC4o-EgLI39bSuNZVx5WTjy_UFI_xVUQZ_4yX05ZfBMPx5gE&usqp=CAU'} alt={title} />

                <div className="event-info">
                    <h3>{title}</h3>
                    <p>
                        {startdate} - {location}
                    </p>
                    <h6>ONLINE EVENT - Attend anywhere </h6>
                </div>

            </div>
        </div>


    )
};

export default EventCard;