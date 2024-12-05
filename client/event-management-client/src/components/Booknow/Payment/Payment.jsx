import React, { useContext, useState } from 'react'
import './Payment.css'
import { EventContext } from '../../../config/context'
import axios from 'axios'
import Cookies from 'js-cookie'

const Payment = ({next,regular,bookingId}) => {
  const [loading, setLoading] = useState(false)
  const {event} = useContext(EventContext)
  const token = Cookies.get('token')

  const handlePayment =async () => {
    setLoading(true)

    try{
      const res = await axios.post('http://localhost:3000/bookings/payment', {
        bookingId:bookingId,
        eventId: event._id,
        seats: regular,
        totalPrice: event.price*regular,
        paymentMethod: 'Credit Card',
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res)

      if(res.statusText!='OK'){
        alert("payment failed")
      }
      if(res.data.url){
        window.location.href = res.data.url
      }
    }
    catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <div className="PEDcontainer">
      {loading && 
        <div className="loader-overlay">
            <div className="loader"></div>
        </div>
      }
      <div className="cross">
        <img src="../src/assets/Booknow/cross.svg" alt="" />
      </div>
      <div className="ESPCdetails">
        <h5>Event Details</h5>
        <h5>Summery</h5>
        <h5>Payment
          <div className="line"></div>
        </h5>
        <h5>Confirmation</h5>



      </div>

      {/* <div className="UPIdetails">
        <label htmlFor="upi">Details</label>
        <input type="text" id='upi' placeholder='Enter UPI id here...' />

      </div> */}
      <div className="paymentmethod">
        <h3>Please select Payment Method</h3>
        <div className="options">
          <div className="cdcard">
            <div className="cdleft">
              <input type="radio" id='creditdebit' name='payment' value="creditdebit" />
              <label htmlFor="creditdebit">Credit / Debit Cards</label>
            </div>
            <div className="cdright">
              <img className='visa' src="../src/assets/Booknow/payments/Master.svg" alt="" height="20px"/>
              <img className='visa' src="../src/assets/Booknow/payments/Vector.svg" alt="" height="20px" />

            </div>
          </div>
          {/* <div className="cdcard">
            <div className="cdleft">
              <input type="radio" id='paypal' name='payment' value="paypal" />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div className="cdright">
              <img className='visa' src="../src/assets/Booknow/payments/Paypal.svg" alt="" height="20px" />
            </div>
          </div>
          <div className="cdcard">
            <div className="cdleft">
              <input type="radio" id='online' name='payment' value="online" />
              <label htmlFor="online">Online Banking</label>
            </div>
            <div className="cdright">
              <img className='visa' src="../src/assets/Booknow/payments/Bank.svg" alt="" height="25px"/>
            </div>
          </div>
          <div className="cdcard">
            <div className="cdleft">
              <input type="radio" id='upi' name='payment' value="upi" />
              <label htmlFor="upi">UPI</label>
            </div>
            <div className="cdright">
              <img className='visa' src="../src/assets/Booknow/payments/upi.svg" alt="" height="25px" />
            </div>
          </div>
          <div className="cdcard">
            <div className="cdleft">
              <input type="radio" id='gift' name='payment' value="gift" />
              <label htmlFor="gift">Gift Cards</label>
            </div>
            <div className="cdright">
              <img className='visa' src="../src/assets/Booknow/payments/Gift card.svg" alt="" height="25px" />
            </div>
          </div> */}
        </div>


      </div>


      <div className="pproceed">
        <button onClick={handlePayment}>Proceed to Pay</button>
      </div>

    </div>
  )
}

export default Payment