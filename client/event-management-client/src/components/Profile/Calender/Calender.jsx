import React from "react";
import "./Calender.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Calender = ({ events }) => {
    const localizer = momentLocalizer(moment);

    events = events.map((event) => {
        return {
            title: event.eventid.title,
            start: new Date(event.eventid.startDate),
            end: new Date(event.eventid.endDate),
        };
    });
    
    return (
        <div className="calender">
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, width: 1000,margin:'auto' }}
        />
        </div>
    );
};

export default Calender;