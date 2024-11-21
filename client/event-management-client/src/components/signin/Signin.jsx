import React, { useEffect, useState } from 'react'
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect to check if user is already logged in
    useEffect(() => {
        const checkLoggedIn = async () => {
          const token = Cookies.get('token');
          if (token) {
            window.location.href = '/'; 
          }
        };
        checkLoggedIn();
      }, []); 

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
          const res = await axios.post('http://localhost:3000/users/login', { email, password });
          Cookies.set('token', res.data.token,{ expires:7 }); // Set token to cookie
          MySwal.fire({
            icon: 'success',
            title: 'Login Successful',
            confirmButtonText: 'Proceed to Home Page'
          }).then(() => {
            navigate(-1) // Redirect to home page
          });
        } catch (err) {
          console.log(err);
        }
    };
  return (
    <div className='signupcontainer'>
         <div className="rightbox koka">
            <h3>Event <span>Hive</span></h3>
            <h1>Sign In to Event Hive</h1>
            <div className="signupinfo">
                <form>
                    <div className="upname">
                    <label htmlFor="upname">YOUR EMAIL</label>
                    <input type="text" placeholder='Enter your mail' id='upname' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="uppassword">
                    <label htmlFor="uppassword">PASSWORD</label>
                    <input type="text" placeholder='Enter your password' id='uppassword' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    
                </form>
            </div>
            <div className="googleupbtn">
                <button className="simpsignup" onClick={handleLogin}>Sign In</button>
                <p>or</p>
                <button className="googlebtn"><img src="\src\assets\signup\Logo (3).svg" alt="" /> Sign In with  Google</button>
            </div>
        </div>
        <div className="leftbox1">
            <h1>Hello Friend</h1>
            <p>To keep connected with us provide us with your information</p>
            <Link to={"../signup"}>
            <button className="signupbtn">Signup</button>
            </Link>
        </div>
    </div>
  )
}

export default Signin