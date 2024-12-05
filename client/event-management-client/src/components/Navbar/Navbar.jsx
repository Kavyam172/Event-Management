import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    const [loggedIn, setLoggedIn] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleLogout = () => {
        Cookies.remove('token');
        setLoggedIn(false);
        window.location.href = '/';
    };

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
          setLoggedIn(true);
        }
      }, []);
    return (
        <>
           <nav className="navbar">
            <div className="logo">
                <Link>
                    <h1>Event <span>Hive</span></h1>
                </Link>
            </div>
            <div className="buttons">
                {loggedIn ? (
                    <>
                        <div
                            style={{ position: 'relative', display: 'inline-block',cursor: 'pointer' }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >
                            <FontAwesomeIcon icon={faUser} size="2x" />

                            {isHovered && (
                                <div className="dropdown">
                                <Link>
                                    <div className="dropdown-items"><FontAwesomeIcon icon={faBell} /> Notifications</div>
                                </Link>
                                <Link to={"./profile"}>
                                    <div className="dropdown-items"><FontAwesomeIcon icon={faUser} /> Profile</div>
                                </Link>
                                <div className="dropdown-items" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <Link to={"./signin"}>
                            <button className="login">Login</button>
                        </Link>
                        <Link to={"./signup"}>
                            <button className="sign-up">Signup</button>
                        </Link>
                    </>
                )}
            </div>
           </nav>
        </>
    )
}