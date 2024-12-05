import React from 'react'
import './Eventingcard.css'

const Eventingcard = ({event}) => {
  return (
    <div className="singleEvent">
        <div className="eventkibox">
            <div className="eventimg"></div>
            <div className="eventdetail">
                <h2>{event?.title}</h2>
                <div className="paradetail">
                    <p>{event?.startTime}</p>
                    <p>{event?.startDate.slice(0,10)}-{event?.endDate.slice(0,10)}</p>
                    <p>{event?.venueid.name},{event?.venueid.address}</p>
                    <p>{event?.price>0?event.price:"Free"}</p>
                </div>
            </div>
            <img src="../src/assets/profile/threedot.svg" alt="" id='threedot'/>
        </div>
    </div>
  )
}

export default Eventingcard