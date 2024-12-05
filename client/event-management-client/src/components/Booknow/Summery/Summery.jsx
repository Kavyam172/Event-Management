import React, { useContext, useState } from 'react'
import './Summery.css'
import { EventContext } from '../../../config/context'
import axios from 'axios'
import Cookies from 'js-cookie'

const Summery = ({next,regular,setBookingId}) => {
  const {event} = useContext(EventContext)
  const [isLoading, setIsLoading] = useState(false)
  const token = Cookies.get('token')


  const handleProceed = async () => {
    setIsLoading(true)

    try {
        const res = await axios.post('http://localhost:3000/bookings/create', {
          eventId: event._id,
          seats: regular,
          totalPrice: event.price*regular,
          paymentMethod: 'Credit Card',
          paymentStatus: 'Pending',
        },{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(res)
        setBookingId(res.data.booking._id)

        if (res.status === 201) {
            setIsLoading(false)
            next()
        } else {
            setIsLoading(false)
            console.log(res)
        }
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="EDcontainer">
      {isLoading && 
            <div className="loader-overlay">
                <div className="loader"></div>
            </div>}
      <div className="cross">
        <img src="../src/assets/Booknow/cross.svg" alt="" />
      </div>
      <div className="ESPCdetails">
        <h5>Event Details

        </h5>
        <h5>Summery
          <div className="line"></div>
        </h5>
        <h5>Payment</h5>
        <h5>Confirmation</h5>



      </div>

      <div className="detailbox">

        <div className="leftdetail">
          <div className="dtldetail">

            <h3>Date</h3>
            <p>{event.startDate.slice(0,10)}</p>

          </div>
          <div className="dtldetail">
            <h3>Time</h3>
            <p>{event.startTime}-{event.endTime}</p>

          </div>
          <div className="dtldetail">
            <h3>Location</h3>
            <p>{event.venueid.name},{event.venueid.address}</p>

          </div>

        </div>
        <div className="rightdetail">
          <div className="detailimg">

          </div>
          <div className="titledetail">
            <h3>{event.title}</h3>

          </div>

        </div>

      </div>

      <div className="confirmprice">

        <div className="cregular">
          <div className="cleftregu">
            <h3>Regular Price</h3>
            <div className="cdollar">
              <p>Sub Total - Rs.{event.price} x {regular}</p>
              <p>Convenience fee + Taxes</p>
            </div>
          </div>
          <div className="crightregu">
            {event.price*regular}
          </div>


        </div>
        
      </div>

      <div className="sproceed">
        <div className="total">
          <h2>Total Payable Amount </h2>
          <h2>{event.price*regular}</h2>
        </div>
        <div className="btndetail">
          <button onClick={handleProceed}>Proceed to pay</button>
        </div>

      </div>

    </div>
  )
}

export default Summery