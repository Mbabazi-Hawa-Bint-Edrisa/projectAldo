import React, { useEffect, useState } from 'react';
import './RecentTripsStyles.css'; // Import your CSS for styling
import axios from 'axios'; // Use Axios to make API requests

const PackageList = () => {
  const [packages, setPackages] = useState([]); // State to store the fetched travel packages
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [error, setError] = useState(null); // State to handle errors

  // Fetch travel packages when the component is mounted
  useEffect(() => {
    axios.get('/api/v1/travel_package/')
      .then(response => {
        setPackages(response.data); // Set the fetched packages to the state
        setLoading(false); // Hide the loading indicator
      })
      .catch(err => {
        setError('Failed to fetch travel packages');
        setLoading(false); // Hide the loading indicator even if there is an error
      });
  }, []);

  // Display a loading indicator while the packages are being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if there was an issue fetching the packages
  if (error) {
    return <div>{error}</div>;
  }

  // Render the list of packages
  return (
    <div className="package-list">
      <h2>Available Trips</h2>
      <ul>
        {packages.map(pkg => (
          <li key={pkg.package_id}>
            <h3>{pkg.package_name}</h3>
            <p>Description: {pkg.description}</p>
            <p>Destinations: {pkg.destinations.join(', ')}</p>
            <p>Activities: {pkg.activities.join(', ')}</p>
            <p>Inclusions: {pkg.inclusions.join(', ')}</p>
            <p className="price">Price: ${pkg.price}</p>
            <p>Start Date: {pkg.start_date}</p>
            <p>End Date: {pkg.end_date}</p>
            <p>Availability: {pkg.availability ? 'Available' : 'Not available'}</p>
            <a href="/bookingForm">
              <button type="button">Book Now</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageList;

// // PackageList.jsx
// import React, { useState } from 'react';
// import BookingForm from './bookingForm';
// import './availableTrips.css';

// const PackageList = () => {
//   const [packages] = useState([
//     {
//       package_id: 1,
//       package_name: 'Rwenzori Adventure',
//       description: 'Explore the majestic Rwenzori Mountains.',
//       destinations: ['Rwenzori Mountains'],
//       activities: ['Hiking', 'Bird Watching'],
//       inclusions: ['Accommodation', 'Meals', 'Guided Tours'],
//       price: 500,
//       start_date: '2024-10-01',
//       end_date: '2024-10-05',
//       availability: true,
//     },
//     {
//       package_id: 2,
//       package_name: 'Beach Getaway Zanzibar',
//       description: 'Relax at the beautiful beaches of Zanzibar.',
//       destinations: ['Zanzibar'],
//       activities: ['Snorkeling', 'Sunbathing', 'Beach Volleyball'],
//       inclusions: ['Accommodation', 'Meals', 'Transport'],
//       price: 300,
//       start_date: '2024-11-15',
//       end_date: '2024-11-18',
//       availability: true,
//     },
//     {
//       package_id: 3,
//       package_name: 'Safari Expedition Kenya',
//       description: 'Experience wildlife at its best in Kenya.',
//       destinations: ['Masai Mara', 'Nairobi'],
//       activities: ['Game Drives', 'Photography'],
//       inclusions: ['Transport', 'Park Fees', 'Meals'],
//       price: 750,
//       start_date: '2024-12-01',
//       end_date: '2024-12-07',
//       availability: false,
//     },
//   ]);

//   return (
//     <div className="package-list">
//       <h2>Available Trips</h2>
//       <ul>
//         {packages.map(pkg => (
//           <li key={pkg.package_id}>
//             <h3>{pkg.package_name}</h3>
//             <p>Description: {pkg.description}</p>
//             <p>Destinations: {pkg.destinations.join(', ')}</p>
//             <p>Activities: {pkg.activities.join(', ')}</p>
//             <p>Inclusions: {pkg.inclusions.join(', ')}</p>
//             <p>Price: ${pkg.price}</p>
//             <p>Start Date: {pkg.start_date}</p>
//             <p>End Date: {pkg.end_date}</p>
//             <p>Availability: {pkg.availability ? 'Available' : 'Not available'}</p>
//             {pkg.availability && <BookingForm packageId={pkg.package_id} />}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PackageList;
