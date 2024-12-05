import React, { useEffect, useState } from 'react'
import './Success.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const Success = () => {

    //get event id from urls query params
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    const bookingId = urlParams.get('bookingId');
    console.log(eventId);
    console.log(bookingId);

    const token = Cookies.get('token');


    
    const today = new Date().toISOString().slice(0, 10);

    const [event, setEvent] = useState(null);

    const getEvent = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/events/${eventId}`);
            console.log(res.data.event);
            setEvent(res.data.event);
        } catch (error) {
            console.log(error);
        }
    }

    const confirmBooking = async () => {
        try {
            const res = await axios.post('http://localhost:3000/bookings/confirm', {
                bookingId: bookingId
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 200) {
                console.log('Booking confirmed');
            } else {
                console.log('Failed to confirm booking');
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getEvent();

        confirmBooking();

    }, [])



  return (
    <div className="confirmcontainer">
      <div className="cross">
        <img src="../src/assets/Booknow/cross.svg" alt="" />
      </div>
      <div className="congrats">
        <h2>CONGRATULATIONS!!!</h2>
        <p>You're Event is Booked</p>
      </div>
      <div className="congratsdetailbox">
        <div className="congratimg"></div>
        <div className="congratboxdetail">
          <h3>{event?event.title:'waiting...'}</h3>
          <p>{event?event.startTime:'waiting...'}-{event?event.endTime:'waiting...'}</p>
          <p>{event?event.startDate.slice(0,10):'waiting...'}</p>
          <p>{event?event.venueid.name:'waiting...'},{event?event.venueid?.address:'waiting...'}</p>
        </div>

      </div>
      <div className="bookeddetail">
        <div className="DMID">
          <p>Booking Date</p>
          <h5>{today}</h5>

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
        <Link to={"./profile"}>
          <button>View in My Bookings</button>
        </Link>
      </div>

    </div>
  )
}

export default Success