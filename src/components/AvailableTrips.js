import React, { useState, useEffect } from 'react';

import './availableTrips.css';

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/travel_package/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const packagesData = await response.json();
        setPackages(packagesData);
        setLoading(false);
      } catch (error) {
        console.error('Fetch Error:', error);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <p>Loading travel packages...</p>;
  }

  return (
    <div className="package-list">
      <h2 >Available Trips</h2>
      <ul>
        {packages.map(pkg => (
          <li key={pkg.package_id}>
            <h3>{pkg.package_name}</h3>
            <p>Package ID: {pkg.package_id}</p>
            <p>Description: {pkg.description}</p>
            <p>Destinations: {pkg.destinations.join(', ')}</p>
            <p>Activities: {pkg.activities.join(', ')}</p>
            <p>Inclusions: {pkg.inclusions.join(', ')}</p>
            <p>Price: ${pkg.price}</p>
            <p>Start Date: {pkg.start_date}</p>
            <p>End Date: {pkg.end_date}</p>
            <p>Availability: {pkg.availability? 'Available' : 'Not available'}</p>
            
            <a href="/bookingForm">
          
          <button type="button">Book</button>
        </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageList;