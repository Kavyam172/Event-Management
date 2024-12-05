import React, { useState } from "react";
import "./Settings.css"; // Import the CSS for styling
import Edit from "./Edit/Edit"; // Import the Edit component

const Settings = ({user,updateUserProfile}) => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  // Handle toggle for notifications
  const handleNotificationsToggle = () => {
    setIsNotificationsEnabled((prevState) => !prevState);
  };

  // Handle toggle for dark mode
  const handleDarkModeToggle = () => {
    setIsDarkModeEnabled((prevState) => !prevState);
    document.body.style.backgroundColor = isDarkModeEnabled ? "#fff" : "#121212"; // Adjust body background for dark mode
  };

  const handleEditProfile = () => {
    alert("Edit Profile clicked!");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>Get Notifications</label>
        <div className="toggle-switch" onClick={handleNotificationsToggle}>
          <input
            type="checkbox"
            checked={isNotificationsEnabled}
            readOnly
          />
          <span className="slider"></span>
        </div>
      </div>
      <div className="setting-item">
        <label>Dark Mode</label>
        <div className="toggle-switch" onClick={handleDarkModeToggle}>
          <input type="checkbox" checked={isDarkModeEnabled} readOnly />
          <span className="slider"></span>
        </div>
      </div>
      <div className="setting-item">
        <Edit user={user} updateUserProfile={updateUserProfile}/>
      </div>
    </div>
  );
};

export default Settings;