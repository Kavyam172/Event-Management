import React from 'react'
import "./Second.css"

const second = () => {
    return (
        <div className="create">
            <div className="createimg">
                <img src="/src/assets/image 3.svg" alt="" />
            </div>
            <div className="createbox">
                <div className="createEvent">
                    <h1><img src="/src/assets/event.svg" alt="" /></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem, ipsum dolor.</p>
                    <button>Create Events</button>
                </div>
            </div>
        </div>
    )
}

export default second