// src/routes/UserProfilePage.js
import React, { useEffect, useState } from "react";
import UserProfile from "../components/profile";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/user-profile", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
          }
        });
        const data = await response.json();
        setUser(data.user); // Adjust this based on your API response
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return user ? <UserProfile user={user} /> : <p>Loading...</p>;
};

export default UserProfilePage;
