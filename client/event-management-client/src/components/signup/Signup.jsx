import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div className="signupcontainer">
        <div className="leftbox">
            <h1>Welcome back</h1>
            <p>To keep connected with us provide us with your information</p>
            <button className="signupbtn">Sign in</button>
        </div>
        <div className="rightbox">
            <h3>Event <span>Hive</span></h3>
            <h1>Sign Up to Event Hive</h1>
            <div className="signupinfo">
                <form>
                    <div className="upname">
                    <label htmlFor="upname">YOUR NAME</label>
                    <input type="text" placeholder='Enter your name' id='upname'/>
                    </div>
                    <div className="uppassword">
                    <label htmlFor="uppassword">PASSWORD</label>
                    <input type="text" placeholder='Enter your password' id='uppassword'/>
                    </div>
                    <div className="upconfirm">
                    <label htmlFor="upconfirm">CONFIRM PASSWORD</label>
                    <input type="text" placeholder='Enter your password' id='upconfirm'/>
                    </div>
                </form>
            </div>
            <div className="googleupbtn">
                <button className="simpsignup">Sign Up</button>
                <p>or</p>
                <button className="googlebtn"><img src="\src\assets\signup\Logo (3).svg" alt="" /> Sign up with  Google</button>
            </div>
        </div>
    </div>
  )
}

export default Signup