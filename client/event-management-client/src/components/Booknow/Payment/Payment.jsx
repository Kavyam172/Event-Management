import React from 'react'
import './Payment.css'

const Payment = () => {
  return (
    <div className="PEDcontainer">
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

      <div className="UPIdetails">
        <label htmlFor="upi">Details</label>
        <input type="text" id='upi' placeholder='Enter UPI id here...' />

      </div>
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
          <div className="cdcard">
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
          </div>
        </div>


      </div>


      <div className="pproceed">
        <button>Proceed to Pay</button>
      </div>

    </div>
  )
}

export default Payment