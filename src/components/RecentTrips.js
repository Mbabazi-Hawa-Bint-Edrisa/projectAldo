import "../components/RecentTripsStyles.css";
import img1 from "../asserts/2.jpg";
// import img2 from "../asserts/6.jpg";
// import img3 from "../asserts/8.jpg";

import React from "react";
import RecentTripsData from "./RecentTripsData";

const RecentTrips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      

      <div className="trip-card">
        <RecentTripsData
          tImg={img1}
          heading="Jinja Falls"
          text="A trip to the beautiful city. Very many fun activities such as  Water Rafting, Tubing the nile "
        />
      
      </div>
      {/* <div className="trip-card">
        <RecentTripsData
          tImg={img1}
          heading="Jinja Falls"
          text="A trip to the beautiful city. Very many fun activities such as  Water Rafting, Tubing the nile "
        />
      
      </div> */}
      

     
    </div>
  );
};

export default RecentTrips;
