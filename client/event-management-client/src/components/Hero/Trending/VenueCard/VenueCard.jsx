import React from "react";
import "./VenueCard.css";

const VenueCard = ({ name, image, location }) => {
    return (
        <div className='firstbox'>
            <div className="event-card">
                
                <img src={image?image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qdvtT10hehHKT30f62OgC4o-EgLI39bSuNZVx5WTjy_UFI_xVUQZ_4yX05ZfBMPx5gE&usqp=CAU'} alt={name} />

                <div className="event-info">
                    <h3>{name}</h3>
                    <p>{location}</p>
                </div>

            </div>
        </div>
    );
};

export default VenueCard;