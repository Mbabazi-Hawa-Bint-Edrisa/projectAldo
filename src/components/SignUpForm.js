import React, { useState } from "react";
import "../components/SignUpFormStyles.css";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, contact, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage('User registered successfully. Check your email for confirmation.');

      // Clear the form fields
      setUsername('');
      setEmail('');
      setContact('');
      setPassword('');
    } catch (error) {
      console.error(error);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="conatct">
      <h4>Create an account</h4>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Contact No" 
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Sign Up</button>

        <a href="/LoginIn">
          Already have an account? 
          <button type="button">Login</button>
        </a>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUpForm;

// import React, { useState } from "react";
// import "../components/SignUpFormStyles.css";

// const SignUpForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, email, contact, password }),
//       });
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Something went wrong');
//       }

//       setMessage('User registered successfully. Check your email for confirmation.');
//     } catch (error) {
//       console.error(error);
//       setMessage(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="conatct">
//       <h4>Create an account</h4>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input 
//           type="text" 
//           placeholder="Contact No" 
//           value={contact}
//           onChange={(e) => setContact(e.target.value)}
//           required
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
        
//         <button type="submit">Sign Up</button>

//         <a href="/LoginIn">
//           Already have an account? 
//           <button type="button">Login</button>
//         </a>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default SignUpForm;
