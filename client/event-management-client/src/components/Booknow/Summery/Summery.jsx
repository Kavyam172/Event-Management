import React from 'react'
import './Summery.css'

const Summery = ({next}) => {
  return (
    <div className="EDcontainer">
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
            <p>Saturday, 24 March 2024</p>

          </div>
          <div className="dtldetail">
            <h3>Time</h3>
            <p>5 PM to 7 PM</p>

          </div>
          <div className="dtldetail">
            <h3>Location</h3>
            <p>465, Park Avenue Lane, New York City, NYC, 10029</p>

          </div>

        </div>
        <div className="rightdetail">
          <div className="detailimg">

          </div>
          <div className="titledetail">
            <h3>Jeffery live in concert</h3>
            <p>Jason Entertainment</p>

          </div>

        </div>

      </div>

      <div className="confirmprice">

        <div className="cregular">
          <div className="cleftregu">
            <h3>Regular Price</h3>
            <div className="cdollar">
              <p>Sub Total - 440$ x 2</p>
              <p>Convenience fee + Taxes</p>
            </div>
          </div>
          <div className="crightregu">
            910$
          </div>


        </div>
        <div className="cvip">
          <div className="cleftvip">
            <h3>VIP Price</h3>
            <div className="cdollar">
              <p>Sub Total - 780$ x 1</p>

              <p>Convenience fee + Taxes</p>
            </div>
          </div>
          <div className="crightvip">

            780$

          </div>


        </div>
      </div>

      <div className="sproceed">
        <div className="total">
          <h2>Total Payable Amount </h2>
          <h2>1690$</h2>
        </div>
        <div className="btndetail">
          <button onClick={next}>Proceed to pay</button>
        </div>

      </div>

    </div>
  )
}

export default Summery