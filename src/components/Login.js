
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [userDetails, setUserDetails] = useState(null);
//   const [bookingDetails, setBookingDetails] = useState(null);

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error);
//       }

//       const data = await response.json();
//       const { access_token, refresh_token, user, bookings } = data;
//       localStorage.setItem('access_token', access_token);
//       localStorage.setItem('refresh_token', refresh_token);

//       setUserDetails(user);
//       setBookingDetails(bookings);

//       // Redirect to the user profile page
//       navigate('/profile'); 

//       console.log('Login successful:', data);

//     } catch (error) {
//       alert(error.message); 
//     }
//   };

//   return (
//     <div className="contact">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {userDetails && (
//         <div className="user-details">
//           <h3>User Details</h3>
//           <p>Username: {userDetails.username}</p>
//           <p>Email: {userDetails.email}</p>
//           <p>Contact: {userDetails.contact}</p>
//           <p>Admin: {userDetails.is_admin ? "Yes" : "No"}</p>
//           <p>Account Created: {new Date(userDetails.created_at).toLocaleString()}</p>
//         </div>
//       )}
//       {bookingDetails && (
//         <div className="booking-details">
//           <h3>Booking Details</h3>
//           <ul>
//             {bookingDetails.map((booking) => (
//               <li key={booking.booking_id}>
//                 <p>Booking ID: {booking.booking_id}</p>
//                 <p>Package ID: {booking.package_id}</p>
//                 <p>Status: {booking.status}</p>
//                 <p>Created At: {new Date(booking.created_at).toLocaleString()}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      const { access_token } = data;
      localStorage.setItem('access_token', access_token);

      // Redirect to the user profile page
      navigate('/profile'); 

      console.log('Login successful:', data);

    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <div className="conatct">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} >
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <button type="submit" className=''>Login</button>
      </form>
    </div>
  );
};

export default Login;
