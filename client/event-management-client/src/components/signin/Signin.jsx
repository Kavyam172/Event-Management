import React from 'react'
import "./Signin.css"

const Signin = () => {
  return (
    <div className='signupcontainer'>
         <div className="rightbox koka">
            <h3>Event <span>Hive</span></h3>
            <h1>Sign Up to Event Hive</h1>
            <div className="signupinfo">
                <form>
                    <div className="upname">
                    <label htmlFor="upname">YOUR EMAIL</label>
                    <input type="text" placeholder='Enter your mail' id='upname'/>
                    </div>
                    <div className="uppassword">
                    <label htmlFor="uppassword">PASSWORD</label>
                    <input type="text" placeholder='Enter your password' id='uppassword'/>
                    </div>
                    
                </form>
            </div>
            <div className="googleupbtn">
                <button className="simpsignup">Sign Up</button>
                <p>or</p>
                <button className="googlebtn"><img src="\src\assets\signup\Logo (3).svg" alt="" /> Sign up with  Google</button>
            </div>
        </div>
        <div className="leftbox1">
            <h1>Hello Friend</h1>
            <p>To keep connected with us provide us with your information</p>
            <button className="signupbtn">Signup</button>
        </div>
    </div>
  )
}

export default Signin