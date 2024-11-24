import React from 'react'
import './Bookingcard.css'

const Bookingcard = () => {
    return (
        <div className="singleticket">
            <div className="ticketkibox">

                <div className="ticketimg">
                </div>
                <div className="ticketdetail">
                    <h3>Caring is the new marketing</h3>
                    <div className="ticketdetailpara">
                        <p>Nov 4,2023 at 12:13 AM</p>
                        <p>Seat number : M02,N03</p>
                        <p>Quantity : 2</p>
                        <p>Stockton, New Hampsire</p>
                    </div>
                    <div className="ticketcost">
                        <div className="flexit">
                            <p>Ticket Price</p>
                            <p>$500</p>
                        </div>
                        <div className="flexit">
                            <p>Convenience fee + Taxes</p>
                            <p>$50</p>
                        </div>
                        <div className="dotline">.......................................................</div>
                        <div className="flexit">
                            <h4>Total Price</h4>
                            <h4>$550</h4>
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
                            <h3>WQ0036HQ</h3>
                        </div>
                    </div>
                    <div className="ticload">
                        <img src="../src/assets/profile/Pdownload.svg" alt="" />
                        <h3>Download PDF</h3>
                    </div>


                </div>


            </div>
            <div className="ticketsidecancel">
                <p>Follow Organizer</p>
                <p>Repot Event</p>
            </div>
        </div>

    )
}

export default Bookingcard