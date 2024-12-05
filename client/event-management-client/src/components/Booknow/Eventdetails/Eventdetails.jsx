import React, { useContext, useState } from 'react'
import './Eventdetails.css'
import { EventContext } from '../../../config/context'
import axios from 'axios'

const Eventdetails = ({ next, regularTickets, increaseRegularTickets, decreaseRegularTickets }) => {
    const { event } = useContext(EventContext)
    const [isLoading, setIsLoading] = useState(false)

    const handleProceed = async () => {
        setIsLoading(true)

        try {
            const res = await axios.post('http://localhost:3000/bookings/check', {
                eventId: event._id,
                seats: regularTickets
            })

            if (res.status === 200) {
                setIsLoading(false)
                next()
            } else {
                setIsLoading(false)
                alert('Not enough seats available')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="EDcontainer">
            {/* Loader */}
            {isLoading && 
            <div className="loader-overlay">
                <div className="loader"></div>
            </div>}

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

            <div className="ticketprice">

                <div className="regular">
                    <div className="leftregu">
                        <p>Regular Price</p>
                        <div className="dollar">
                            <h2>Rs.{event.price}</h2>
                            <h6>Convenience fee + Taxes</h6>
                        </div>
                    </div>
                    <div className="rightregu">
                        <div className="minus" onClick={decreaseRegularTickets}>-</div>
                        {regularTickets}
                        <div className="plus" onClick={increaseRegularTickets}>+</div>
                    </div>


                </div>
            </div>
            <div className="proceed">
                <button onClick={handleProceed}>Proceed</button>
            </div>

        </div>
    )
}

export default Eventdetails