import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className="registerbox">
        <h2>Registration</h2>
        <form>
            <div className="getname">
            <label htmlFor="yourname">Your name</label>
            <input type="text" name='yourname' placeholder='Enter your mail' id='yourname' />
            </div>
            <div className="getEmail">
                <label htmlFor="yourEmail">Your Email</label>
                <input type="text" name='yourEmail' placeholder='Enter your mail' id='yourEmail'/>
            </div>
            <button className="register-button">Submit</button>
        </form> 
    </div>
  )
}

export default Register