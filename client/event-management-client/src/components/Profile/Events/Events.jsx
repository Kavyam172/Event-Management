import React from 'react'
import './Events.css'
import Eventingcard from './Eventingcard/Eventingcard'

const Events = () => {
  return (
    <div className="Eventscontainer">
            <div className="Efilter">
                <div className="Efilter-dropdown">
                    <label htmlFor="drop">Filter by : </label>
                    <select name="drop" id="drop"></select>
                    <option value="">status organizer</option>

                </div>
                <div className="Esortbydate">
                    <label htmlFor="sort">Sort by : </label>
                    <select name="sort" id="sort"></select>
                    <option value="">date</option>

                </div>

            </div>
            <div className="bigEventsbox">
                <Eventingcard/>
                <Eventingcard/>
                


            </div>

        </div>
  )
}

export default Events