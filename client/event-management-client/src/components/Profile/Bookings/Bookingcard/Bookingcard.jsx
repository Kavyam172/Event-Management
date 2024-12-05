import React from 'react'
import './Bookingcard.css'

const Bookingcard = ({booking}) => {
    return (
        <div className="singleticket">
            <div className="ticketkibox">

                <div className="ticketimg">
                    <img src={booking.eventid.banner} alt="" />
                </div>
                <div className="ticketdetail">
                    <h3>{booking.eventid.title}</h3>
                    <div className="ticketdetailpara">
                        <p>{booking.createdAt.slice(0,10)}</p>
                        <p>Quantity : {booking.seats}</p>
                        <p>{booking.eventid.venueid.name},{booking.eventid.venueid.address}</p>
                    </div>
                    <div className="ticketcost">
                        <div className="flexit">
                            <p>Ticket Price</p>
                            <p>Rs.{booking.eventid.price}</p>
                        </div>
                        <div className="flexit">
                            <p>Seats</p>
                            <p>x{booking.seats}</p>
                        </div>
                        <div className="dotline">.......................................................</div>
                        <div className="flexit">
                            <h4>Total Price</h4>
                            <h4>Rs.{booking.eventid.price*booking.seats}</h4>
                        </div>

                    </div>

                </div>

                <div className="golaspace">
                    <div className="gola gola1"></div>


                    <div className="gola gola2"></div>
                </div>
                <div className="ticketQR">
                    <div className="QRTICODE">
                        <img src="../src/assets/profile/QR code.svg" alt="" />
                        <div className="idbook">
                            <p>Booking ID</p>
                            <h3>{booking._id.slice(0,10)}..</h3>
                        </div>
                    </div>
                    <div className="ticload">
                        <img src="../src/assets/profile/Pdownload.svg" alt="" />
                        <h3>Download PDF</h3>
                    </div>


                </div>


            </div>
        </div>

    )
}

export default Bookingcard