import React from 'react'
import "./Bookings.css"
import Bookingcard from './Bookingcard/Bookingcard'


const Bookings = ({bookings}) => {
    return (
        <div className="ticketscontainer">
            {/* <div className="filter">
                <div className="filter-dropdown">
                    <label htmlFor="drop">Filter by : </label>
                    <select name="drop" id="drop"></select>
                    <option value="">status organizer</option>

                </div>
                <div className="sortbydate">
                    <label htmlFor="sort">Sort by : </label>
                    <select name="sort" id="sort"></select>
                    <option value="">date</option>

                </div>

            </div> */}
            <div className="bigticketbox">
                {
                    bookings.map((booking) => (
                        <Bookingcard booking={booking} />
                    ))
                }


            </div>

        </div>
    )
}

export default Bookings