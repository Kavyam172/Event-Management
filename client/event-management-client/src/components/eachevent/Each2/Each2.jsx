import React from 'react'
import "./Each2.css"

const Each2 = ({description,location,starttime,endtime,title}) => {
    return (
        <div className="middle1box">
            <div className="descriptionevent">
                <div className="descriptioneventin">
                    <h3>Description</h3>
                    <p className="descp1">{description}</p>
                </div>
                <div className="descriptionhour">
                    <h3>Hours</h3>
                    <p className="hrsp1">Start: <span> {starttime}</span></p>
                    <p className="hrsp2">End:  <span> {endtime}</span></p>
                </div>
            </div>
            <div className="maploc">
                <h3 className='h3'>Event location</h3>
                <img src="\src\assets\eachevent\map 1.svg" alt="" />
                <div className="mapin">
                    <h3>{title}</h3>
                    <p className="locp0">{location}</p>
                </div>
            </div>

        </div>

    )
}

export default Each2