// import React, { useState } from 'react';
// import './bookingForm.css';

// const BookingForm = () => {
//   const [packageId, setPackageId] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [bookingSource] = useState('Website');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/v1/booking/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           package_id: packageId, 
//           payment_method: paymentMethod, 
//           booking_source: bookingSource,
//         }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || 'Something went wrong');
//       }

//       setMessage(`Booking created successfully. Your booking ID is: ${data.booking_id}`);
//     } catch (error) {
//       setMessage(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="conatct">
//       <h2>Book Trip</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Package ID:</label>
//           <input
//             type="text"
//             value={packageId}
//             onChange={(event) => setPackageId(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Payment Method:</label>
//           <select
//             value={paymentMethod}
//             onChange={(event) => setPaymentMethod(event.target.value)}
//             required
//           >
            
//             <option value="Credit Card">Credit Card</option>
//             <option value="Mobile Money">Mobile Money</option>
//           </select>
//         </div>
//         <div>
//           <label>Booking Source:</label>
//           <input type="text" value={bookingSource} disabled />
//         </div>
//         <button type="submit">Book Now</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default BookingForm;
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

        <input>
        <select
         
          value={paymentMethod}
          placeholder="Select Payment Method"
          onChange={(event) => setPaymentMethod(event.target.value)}
          required
        >
          
          <option value="Credit Card">Credit Card</option>
          <option value="Mobile Money">Mobile Money</option>
        </select>
        </input>
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
