import React from 'react'
import "./Each2.css"

const Each2 = () => {
    return (
        <div className="middle1box">
            <div className="descriptionevent">
                <div className="descriptioneventin">
                    <h3>Description</h3>
                    <p className="descp1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste expedita illum quod, illo eligendi aliquam consequuntur odio repellat eaque cupiditate cum! Dolorem placeat officia voluptate quidem quod, corrupti aliquam facere. Nemo asperiores, laboriosam beatae nam dolor iste odit laudantium praesentium tenetur ducimus eos sunt qui quisquam voluptatum quasi non provident error dolores veniam culpa, ex, voluptatem perspiciatis distinctio similique. Totam.</p>
                    <p className="descp2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi inventore quae ullam unde corporis magnam repellat voluptatibus modi, saepe voluptate sit consequatur, rerum odio nobis error veniam tempore reiciendis architecto mollitia, cumque ex labore in soluta sed! Eius impedit at exercitationem. Facilis explicabo placeat voluptatibus rerum omnis consequuntur? Tenetur, reiciendis recusandae? In dolor, est voluptatibus perferendis perspiciatis molestias alias ullam.</p>
                </div>
                <div className="descriptionhour">
                    <h3>Hours</h3>
                    <p className="hrsp1">Weekdays hour: <span> 7PM - 10PM</span></p>
                    <p className="hrsp2">Sunday hour:  <span> 7PM - 10PM</span></p>
                </div>
            </div>
            <div className="maploc">
                <h3 className='h3'>Event location</h3>
                <img src="\src\assets\eachevent\map 1.svg" alt="" />
                <div className="mapin">
                    <h3>Dream world wide in jakatra</h3>
                    <p className="locp0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis officia cum architecto!</p>
                </div>
            </div>

        </div>

    )
}

export default Each2