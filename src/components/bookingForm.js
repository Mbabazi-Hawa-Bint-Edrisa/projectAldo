
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ packageId }) => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/v1/booking/register', {
        package_id: packageId,
        payment_method: paymentMethod,
        booking_source: 'Website',
      });

      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Book This Package</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Mobile Money">Mobile Money</option>
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default BookingForm;
 
// // BookingForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const BookingForm = ({ packageId }) => {
//   const [paymentMethod, setPaymentMethod] = useState('Credit Card');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/api/v1/booking/register', {
//         package_id: packageId,
//         payment_method: paymentMethod,
//       });

//       setSuccess(response.data.message);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.error || 'An error occurred');
//       setSuccess('');
//     }
//   };

//   return (
//     <div>
//       <h2>Book This Package</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Payment Method:</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           >
//             <option value="Credit Card">Credit Card</option>
//             <option value="Mobile Money">Mobile Money</option>
//           </select>
//         </div>
//         <button type="submit">Book Now</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//     </div>
//   );
// };

// export default BookingForm;
