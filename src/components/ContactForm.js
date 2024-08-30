// import "../components/ContactFormStyles.css";
// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="conatct">
//       <h1>Send us a message!</h1>
//       <form>
//         <input placeholder="Name" />
//         <input placeholder="Email" />
//         {/* <input placeholder="Subject" /> */}
//         <textarea placeholder="Message" rows={4} />
//         <button>Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



import "../components/ContactFormStyles.css";
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State to manage feedback messages
  const [feedback, setFeedback] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase()]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend
      await axios.post('/api/v1/message/messages', formData);
      
      // Display success message
      setFeedback('Message sent successfully!');
      
      // Clear form inputs
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      // Display error message
      setFeedback('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="conatct">
      <h1>Send us a message!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="px-16 py-8 bg-slate-800">Send Message</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default ContactForm;

