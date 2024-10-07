
// import './availableTrips.css';
// import React, { useState } from 'react';

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
//             <p>Package ID: {pkg.package_id}</p>
//             <p>Description: {pkg.description}</p>
//             <p>Destinations: {pkg.destinations.join(', ')}</p>
//             <p>Activities: {pkg.activities.join(', ')}</p>
//             <p>Inclusions: {pkg.inclusions.join(', ')}</p>
//             <p>Price: ${pkg.price}</p>
//             <p>Start Date: {pkg.start_date}</p>
//             <p>End Date: {pkg.end_date}</p>
//             <p>Availability: {pkg.availability ? 'Available' : 'Not available'}</p>
//             <a href="/bookingForm">
//               <button type="button">Book</button>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PackageList;
