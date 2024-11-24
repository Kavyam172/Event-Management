import React, { useState } from "react";
import "./Profile.css";
import About from "./About/About";
import Bookings from "./Bookings/Bookings";
import Events from "./Events/Events";

const Profile = () => {
    const [activeTab, setActiveTab] = useState('about');
      

    return (
      <div className="pcontainer">
        <div className="main">
          <div className="poster-image">
            <img src="" alt="" />
          </div>
          <div className="profile-content">
            <h2>Emily Thompson</h2>
            <div className="bottom">
              <p>Date of Birth: 01-11-2004</p>
              <p>Email ID: example@gmail.com</p>
              <p>Contact Number: XXXXXXXXXXX</p>
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
              <About />
            </div>
          )}
          {activeTab === 'settings' && (
            <div>
              <h2>Settings</h2>
              <p>Update your profile settings here.</p>
            </div>
          )}
          {activeTab === 'bookings' && (
            <div>
              <Bookings/>
            </div>
          )}
          {activeTab === 'events' && (
            <div>
              <Events/>
            </div>
          )}
          {activeTab === 'calendar' && (
            <div>
              <h2>My Calendar</h2>
              <p>View and manage your calendar here.</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default Profile;