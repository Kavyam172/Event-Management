import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar(){
    return (
        <>
           <nav className="navbar">
            <div className="logo">
                <h1>Event <span>Hive</span></h1>
            </div>
            <div className="buttons">
                <Link to={"./signin"}>
                <button className="login">Login</button>
                </Link>
                <Link to={"./signup"}>
                <button className="sign-up">Signup</button>
                </Link>
            </div>
           </nav>
        </>
    )
}