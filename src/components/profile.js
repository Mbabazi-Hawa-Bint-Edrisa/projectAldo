import React from react;
// src/components/UserProfile.js

import React, { useState } from "react";
import "./profile.css";

const UserProfile = ({ user }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSignOut = () => {
    // Logic for sign out (e.g., clearing session, redirecting to login page)
    console.log("Signed out");
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="profile-info">
        <div className="profile-image">
          {profileImage ? (
            <img src={profileImage} alt="Profile" />
          ) : (
            <div className="placeholder">Upload Image</div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="upload-btn"
          />
        </div>
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Contact: {user.contact}</p>
        </div>
      </div>
      <div className="booking-details">
        <h2>Booking Details</h2>
        <p>Package ID: {user.booking.packageId}</p>
        <p>Package Name: {user.booking.packageName}</p>
      </div>
      <button onClick={handleSignOut} className="sign-out-btn">
        Sign Out
      </button>
    </div>
  );
};

export default UserProfile;
