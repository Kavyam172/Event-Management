import React from 'react'
import './Eventingcard.css'

const Eventingcard = () => {
  return (
    <div className="singleEvent">
        <div className="eventkibox">
            <div className="eventimg"></div>
            <div className="eventdetail">
                <h2>Caring is the New Marketing</h2>
                <div className="paradetail">
                    <p>01:34 PM</p>
                    <p>Friday, June 8</p>
                    <p>Coppel, Virginia</p>
                    <p>Free/Paid</p>
                </div>
            </div>
            <img src="../src/assets/profile/threedot.svg" alt="" id='threedot'/>
            <img src="../src/assets/profile/Invite.svg" alt="" id='invite'/>
        </div>
    </div>
  )
}

export default Eventingcard