import React from 'react'
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
        <div className="congratboxdetail">
          <h2>Jeffery Live in Concert</h2>
          <p>5 PM</p>
          <p>Saturday, March 24</p>
          <p>Park Avenue, NYC</p>
          <p>1690$</p>
        </div>

      </div>
      <div className="bookeddetail">
        <div className="DMID">
          <p>Booking Date</p>
          <h5>Monday, March 12</h5>

        </div>
        <div className="DMID">
          <p>Payment Method</p>
          <h5>UPI</h5>

        </div>
        <div className="DMID">
          <p>Booking ID</p>
          <h5>WB8696KT</h5>

        </div>
      </div>




      <div className="confirmproceed">
        <button>View in My Bookings</button>
      </div>

    </div>
  )
}

export default Confirmation