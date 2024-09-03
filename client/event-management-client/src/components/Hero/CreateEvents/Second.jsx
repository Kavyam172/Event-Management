import React from 'react'
import "./Second.css"
import { Link } from 'react-router-dom'

const second = () => {
    return (
        <div className="create">
            <div className="createbox">
                <div className="createimg">
                    <img src="/src/assets/image 3.svg" alt="" />
                </div>
                <div className="createEvent">
                    <h1>Make your own Event</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem, ipsum dolor.</p>
                    <Link to={"./create"}><button>Create Events</button></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default second