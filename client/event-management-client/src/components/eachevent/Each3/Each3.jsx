import React from 'react'
import "./Each3.css"

const Each3 = ({category}) => {
    return (
        <div className="middle2box">
            <div className="organizer">
                <h3>Organizer Contact</h3>
                <p>Please go to <span>www.sneakypeeks.com</span> and refer the FAQ section for more details </p>
            </div>
            <div className="tagshare">
                <div className="tags">
                    <h3>Tags</h3>
                    <div className="minitagbox">
                    <div className="indonesia">{category}</div>
                    </div>
                </div>
                <div className="share">
                    <h3>Share with friends</h3>
                    <div className="shareimg">
                        <img src="\src\assets\eachevent\Facebook.svg" alt="" />
                        <img src="\src\assets\eachevent\whatsapp.svg" alt="" />
                        <img src="\src\assets\eachevent\linkedin.svg" alt="" />
                        <img src="\src\assets\eachevent\twitter.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Each3