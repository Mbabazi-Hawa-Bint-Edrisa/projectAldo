

// import "../components/RecentTripsStyles.css";
// import img1 from "../assets/images//2.jpg";
// // import img2 from "../assets/images//6.jpg";
// // import img3 from "../assets/images//8.jpg";

// import React from "react";
// import RecentTripsData from "./RecentTripsData";

// const RecentTrips = () => {
//   return (
//     <div className="trip">
//       <h1>Recent Trips</h1>
      

//       <div className="trip-card">
//         <RecentTripsData
//           tImg={img1}
//           heading="Jinja Falls"
//           text="A trip to the beautiful city. Very many fun activities such as  Water Rafting, Tubing the nile "
          
//         />
//         const Trips = [
//     {
//       id: 1,
//       days: "4 Days",
//       title: "Rwenzori Adventure",
//       location: "Uganda",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 500,
//       imageUrl: "/images/1.jpg",
//     },
//     {
//       id: 2,
//       days: "7 Days",
//       title: "Safari Expedition",
//       location: "Kenya",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 750,
//       imageUrl: "/images/2.jpg",
//     },
//     {
//       id: 3,
//       days: "3 Days",
//       title: "Beach Getaway",
//       location: "Zanzibar",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 300,
//       imageUrl: "/images/3.jpg",
//     },
//     {
//       id: 4,
//       days: "5 Days",
//       title: "Desert Safari",
//       location: "Morocco",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 600,
//       imageUrl: "/images/4.jpg",
//     },
//     {
//       id: 5,
//       days: "10 Days",
//       title: "Amazon Rainforest",
//       location: "Brazil",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 1200,
//       imageUrl: "/images/5.jpg",
//     },
//     {
//       id: 6,
//       days: "6 Days",
//       title: "Alaskan Adventure",
//       location: "USA",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 850,
//       imageUrl: "/images/6.jpg",
//     },
//     {
//       id: 7,
//       days: "8 Days",
//       title: "Great Barrier Reef",
//       location: "Australia",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 950,
//       imageUrl: "/images/7.jpg",
//     },
//     {
//       id: 8,
//       days: "2 Days",
//       title: "City Break",
//       location: "Paris",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 250,
//       imageUrl: "/images/8.jpg",
//     },
//     {
//       id: 9,
//       days: "4 Days",
//       title: "Mountain Trek",
//       location: "Nepal",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 550,
//       imageUrl: "/images/9.jpg",
//     },
//     {
//       id: 10,
//       days: "3 Days",
//       title: "Cultural Tour",
//       location: "Japan",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 700,
//       imageUrl: "/images/10.jpg",
//     },
//     {
//       id: 11,
//       days: "5 Days",
//       title: "Safari Adventure",
//       location: "South Africa",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 650,
//       imageUrl: "/images/11.jpg",
//     },
//     {
//       id: 12,
//       days: "7 Days",
//       title: "Island Hopping",
//       location: "Thailand",
//       review: "\u2606 \u2606 \u2606 \u2606 \u2606",
//       price: 800,
//       imageUrl: "/images/12.jpg",
//     }
//   ];
  

// export default Trips;
      
//       </div>
//       {/* <div className="trip-card">
//         <RecentTripsData
//           tImg={img1}
//           heading="Jinja Falls"
//           text="A trip to the beautiful city. Very many fun activities such as  Water Rafting, Tubing the nile "
//         />
      
//       </div> */}
      

     
//     </div>
//   );
// };

// export default RecentTrips;
import "../components/RecentTripsStyles.css";
import img1 from "../assets/images/2.jpg"; // Use actual image paths
import img2 from "../assets/images/6.jpg"; // Example
import img3 from "../assets/images/8.jpg"; // Example

import React from "react";
import RecentTripsData from "./RecentTripsData";

// Define the trips array
const Trips = [
  {
    id: 1,
    title: "Jinja Falls",
    description: "A trip to the beautiful city. Very many fun activities such as Water Rafting, Tubing the Nile.",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Rwenzori Mountains",
    description: "Explore the majestic Rwenzori Mountains. Enjoy hiking, nature walks, and beautiful scenery.",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Lake Victoria",
    description: "Relax by the largest lake in Africa. Experience boat cruises, fishing, and local cuisine.",
    imageUrl: img3,
  },
  // Add more trips here...
];

const RecentTrips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>

      {/* Map through the Trips array to create multiple trip cards */}
      <div className="trip-card-container" style={{display:'flex'}}>
        {Trips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <RecentTripsData
              tImg={trip.imageUrl}  // Image for each trip
              heading={trip.title}   // Heading for each trip
              text={trip.description} // Description for each trip
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrips;
