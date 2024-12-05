import React, { useEffect, useState } from "react";
import "./Profile.css";
import About from "./About/About";
import Bookings from "./Bookings/Bookings";
import Events from "./Events/Events";
import Cookies from 'js-cookie';
import axios from 'axios';
import Calender from "./Calender/Calender";
import Settings from "./Settings/Settings";

const Profile = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [user, setUser] = useState(null)
    const [myEvents, setMyEvents] = useState(null);
    const token = Cookies.get('token');

    const getUser = async () => {
        try {
            const res = await axios.get('http://localhost:3000/users/profile', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            });
            console.log(res.data.user);
            setUser(res.data.user);
        }
        catch (error) {
            console.log(error);
        }
    }

    const updateUserProfile = async (newData) => {
      setUser(newData);
    }

    const getMyEvents = async () => {
        try {
            const res = await axios.get('http://localhost:3000/events/user', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            });
            console.log(res.data);
            setMyEvents(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getUser();
      getMyEvents();
    }, [])
      

    return (
      <div className="pcontainer">
        <div className="main">
          <div className="poster-image">
            <img src="" alt="" />
          </div>
          <div className="profile-content">
            <h2>{user?.name}</h2>
            <div className="bottom">
              <p>Date of Birth: {user?.DOB?user.DOB.slice(0,10):"Complete Your Profile!"}</p>
              <p>Email ID: {user?.email}</p>
              <p>Contact Number: {user?.phoneNumber?user.phoneNumber:"Complete Your Profile!"}</p>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <button
            className={activeTab === 'about' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={activeTab === 'bookings' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('bookings')}
          >
            My Bookings
          </button>
          <button
            className={activeTab === 'events' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('events')}
          >
            My Events
          </button>
          <button
            className={activeTab === 'calendar' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('calendar')}
          >
            My Calendar
          </button>
          <button
            className={activeTab === 'settings' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'about' && (
            <div>
              <About bio={user?.bio}/>
            </div>
          )}
          {activeTab === 'settings' && (
            <div>
              <Settings user={user} updateUserProfile={updateUserProfile}/>
            </div>
          )}
          {activeTab === 'bookings' && (
            <div>
              <Bookings bookings={user.bookings}/>
            </div>
          )}
          {activeTab === 'events' && (
            <div>
              <Events myEvents={myEvents}/>
            </div>
          )}
          {activeTab === 'calendar' && (
            <div>
              <Calender events={user.bookings}/>
            </div>
          )}
        </div>
      </div>
    );
}

export default Profile;