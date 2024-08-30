import React, { useState } from 'react';

const BookingForm = () => {
  const [packageId, setPackageId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bookingSource] = useState('Website');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/booking/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          package_id: packageId, 
          payment_method: paymentMethod, 
          booking_source: bookingSource,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage(`Booking created successfully. Your booking ID is: ${data.booking_id}`);
      // Optionally, clear the form after successful submission
      setPackageId('');
      setPaymentMethod('');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="conatct">
      <h2>Book Trip</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Package ID"
          value={packageId}
          onChange={(event) => setPackageId(event.target.value)}
          required
        />
        
        <select
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event.target.value)}
          required
        >
          <option value="" disabled>Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Mobile Money">Mobile Money</option>
        </select>

        <input
          type="text"
          placeholder="Booking Source"
          value={bookingSource}
          disabled
        />
        
        <button type="submit">Book Now</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
