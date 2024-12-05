import React, { useEffect } from "react";
import "./Failed.css";

const Failed = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    const bookingId = urlParams.get('bookingId');

    const cancelBooking = async () => {
        try {
            const res = await axios.post('http://localhost:3000/bookings/cancel', {
                bookingId: bookingId
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 200) {
                console.log('Booking cancelled');
            } else {
                console.log('Failed to cancel booking');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("useEffect")
        cancelBooking();
    }, [])
    return (
        <div className="confirmcontainer">
        <div className="cross">
            <img src="../src/assets/Booknow/cross.svg" alt="" />
        </div>
        <div className="congrats">
            <h2>FAILED!!!</h2>
            <p>Your Booking Could not be Completed</p>
        </div>
        </div>
    );
}

export default Failed;