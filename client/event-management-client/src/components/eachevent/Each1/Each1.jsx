import React from 'react'
import "./Each1.css"
import { Link, useNavigate } from 'react-router-dom'
const Each1 = ({event,eventid,banner,title,venue,date}) => {
    const navigate = useNavigate();
    const redirectToBooking = ()=>{
        navigate(`/booking/${eventid}`,{state:{event:event}})
    }
  return (
    <div className="eachcontainer">


    <div className="bgimage" style={{background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${banner})`}}>
        <div className="btn">

            <button className="back" onClick={()=>{window.location.href = '/'}}><span>‹</span> Home</button>
        </div>
        <div className="dream">
            <div className="eventdesc">

                <h1>{title}</h1>
                <h2>{venue}</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam consequatur rerum nostrum inventore illo facere quo. Magnam minima veniam blanditiis, nihil ex beatae quasi sint maiores excepturi neque, dolore adipisci possimus suscipit doloremque iusto quibusdam dolores distinctio, inventore cupiditate deserunt. Eligendi quae eos porro.</p> */}

            </div>
            <div className="booknow">
                <h3>Date & time</h3>
                <p>{date}</p>
                <div className="bookbtn">
                    <button className="book" onClick={redirectToBooking}>Book now</button>
                    <button className="promoter">{event.availableSeats} Slots Left</button>
                    <div className="para">
                        <p >No Refunds</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>
  )
}

export default Each1