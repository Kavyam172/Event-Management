import React, { useState } from 'react'
import './Eventdetails.css'

const Eventdetails = ({ next,regularTickets,vipTickets,increaseVipTickets,decreaseVipTickets,increaseRegularTickets,decreaseRegularTickets }) => {
    
    return (
        <div className="EDcontainer">
            <div className="cross">
                <img src="../src/assets/Booknow/cross.svg" alt="" />
            </div>
            <div className="ESPCdetails">
                <h5>Event Details
                    <div className="line"></div>
                </h5>
                <h5>Summery</h5>
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

            <div className="ticketprice">

                <div className="regular">
                    <div className="leftregu">
                        <p>Regular Price</p>
                        <div className="dollar">
                            <h2>440$+</h2>
                            <h6>Convenience fee + Taxes</h6>
                        </div>
                    </div>
                    <div className="rightregu">
                        <div className="minus" onClick={decreaseRegularTickets}>-</div>
                        {regularTickets}
                        <div className="plus" onClick={increaseRegularTickets}>+</div>
                    </div>


                </div>
                <div className="vip">
                    <div className="leftvip">
                        <p>VIP Price</p>
                        <div className="dollar">
                            <h2>440$+</h2>
                            <h6>Convenience fee + Taxes</h6>
                        </div>
                    </div>
                    <div className="rightvip">
                        <div className="minus" onClick={decreaseVipTickets}>-</div>
                        {vipTickets}
                        <div className="plus" onClick={increaseVipTickets}>+</div>
                    </div>


                </div>
            </div>
            <div className="proceed">
                <button onClick={next}>Proceed</button>
            </div>

        </div>
    )
}

export default Eventdetails