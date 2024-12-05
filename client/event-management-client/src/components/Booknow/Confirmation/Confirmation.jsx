import React, { useEffect, useState } from 'react'
import './Confirmation.css'

const Confirmation = () => {


  return (
    <div className="confirmcontainer">
      <div className="cross">
        <img src="../src/assets/Booknow/cross.svg" alt="" />
      </div>
      <div className="ESPCdetails">
        <h5>Event Details</h5>
        <h5>Summery</h5>
        <h5>Payment

        </h5>
        <h5>Confirmation
          <div className="line"></div>
        </h5>



      </div>
      <div className="congrats">
        <h2>CONGRATULATIONS!!!</h2>
        <p>You're Event is Booked</p>
      </div>
      <div className="congratsdetailbox">
        <div className="congratimg"></div>
        {/* <div className="congratboxdetail">
          <h2>{event?.title}</h2>
          <p>{event?.startTime}-{event.endTime}</p>
          <p>{event?.startDate.slice(0,10)}</p>
          <p>{event?.venueid.name},{event.venueid.address}</p>
          <p>{event?.price*seats}</p>
        </div> */}

      </div>
      <div className="bookeddetail">
        <div className="DMID">
          <p>Booking Date</p>
          <h5>{new Date.now()}</h5>

        </div>
        <div className="DMID">
          <p>Payment Method</p>
          <h5>Card</h5>

        </div>
        <div className="DMID">
          <p>Booking ID</p>
          <h5>{bookingId}</h5>

        </div>
      </div>




      <div className="confirmproceed">
        <button>View in My Bookings</button>
      </div>

    </div>
  )
}

export default Confirmation