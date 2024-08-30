import React from 'react'
import "./Each1.css"

const Each1 = () => {
  return (
    <div className="eachcontainer">


    <div className="bgimage">
        <div className="btn">

            <button className="back"><span>‹</span> Back</button>
        </div>
        <div className="dream">
            <div className="eventdesc">

                <h1>Dream world wide in jakatra</h1>
                <h2>IIIT Sonepat</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam consequatur rerum nostrum inventore illo facere quo. Magnam minima veniam blanditiis, nihil ex beatae quasi sint maiores excepturi neque, dolore adipisci possimus suscipit doloremque iusto quibusdam dolores distinctio, inventore cupiditate deserunt. Eligendi quae eos porro.</p>


            </div>
            <div className="booknow">
                <h3>Date & time</h3>
                <p>Saturday,March 18 2023,9:30PM</p>
                <div className="bookbtn">
                    <button className="book">Book now</button>
                    <button className="promoter">Program promoter</button>
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