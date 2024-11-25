import React, { useState } from "react";
import "./Edit.css"; // Import the CSS file
import axios from 'axios';
import Cookies from 'js-cookie';

const UserEditPopup = ({user,updateUserProfile}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const token = Cookies.get('token');
  const [formData, setFormData] = useState({
    userId: user._id,
    name: user.name,
    email: user.email,
    dob:user.DOB,
    contact:user.phoneNumber,
    bio:user.bio
  });

  const [newData, setNewData] = useState({
    userId: user._id,
    name: user.name,
    email: user.email,
    dob:user.DOB,
    contact:user.phoneNumber,
    bio:user.bio
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated User Data:", newData);

    // Update the user data in the database
    try{
      const res = await axios.put('http://localhost:3000/users/profile', newData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(res)
      updateUserProfile(res.data.user);
    }
    catch (error) {
      console.log(error);
    }
    
    setIsPopupOpen(false); // Close the popup after submission
  };

  return (
    <div>
      {/* Button to open the popup */}
      <button onClick={() => setIsPopupOpen(true)}>Edit User</button>

      {/* Popup for editing user details */}
      {isPopupOpen && (
        <div className="edit-overlay">
          <div className="popup">
            <h3>Edit User Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group-edit">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newData.name?newData.name:""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-edit">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newData.email?newData.email:""}
                  onChange={handleChange}
                />
              </div>
                <div className="form-group-edit">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={newData.dob?newData.dob.slice(0,10):""}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group-edit">
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                    type="text"
                    id="contact"
                    name="contact"
                    maxLength={10}
                    value={newData.contact?newData.contact:""}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group-edit">
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                    id="bio"
                    name="bio"
                    value={newData.bio?newData.bio:""}
                    onChange={handleChange}
                    cols="80"
                    rows="5"
                    />
                </div>
              <div className="buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsPopupOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserEditPopup;
