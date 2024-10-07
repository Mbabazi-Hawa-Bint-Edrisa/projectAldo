import React, { useState, useEffect } from "react";
import UserProfile from "../components/profile";
import './UserProfilePage.css'; // Import the CSS file

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data with static data
    const userData = {
      user_id: 1,
      username: "John Doe",
      email: "johndoe@example.com",
      contact: "1234567890",
      bookings: [
        {
          booking_id: 1,
          package_name: "Safari Adventure",
          booking_date: "2024-09-20",
          status: "Confirmed"
        },
        {
          booking_id: 2,
          package_name: "Mountain Hike",
          booking_date: "2024-09-25",
          status: "Pending"
        }
      ]
    };

    // Set the static data
    setUser(userData);
  }, []);

  return (
    <div className="user-profile-page">
      {user ? (
        <div className="user-profile">
          <h1>{user.username}</h1>
          <p>Email: {user.email}</p>
          <p>Contact: {user.contact}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {user && (
        <div className="bookings">
          <h2>My Bookings</h2>
          {user.bookings.map((booking) => (
            <div key={booking.booking_id} className="booking-item">
              <p className="booking-date">Date: {booking.booking_date}</p>
              <p>Package: {booking.package_name}</p>
              <p className="status">Status: {booking.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
