import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/images//12.jpg";
import img2 from "../assets/images//2.jpg";
import ContactForm from "../components/ContactForm";



      const Contact = () => {
  // Define slides for the Hero component
  const slides = [
    {
      image: img1,
    },
    {
      image: img2, // Add more images as needed
    },
   
  ];

  return (
    <>
      <Navbar />
     
      <Hero
        cName="hero"
        slides={slides}
        title="Contact Us"
        text="Reach out to us."
        
        url="#"
       
      />
      <div className="contact-details">
                    
                    <h2>Contact Info</h2>
                    <p>Address: Kitebi, Bunamwaya, Uganda</p>
                    <p>Email: aldosafarislimited@gmail.com</p>
                    <p>Call Us: +256 705 425 626 or +256 779 299 426</p>
                </div>
      <ContactForm />
      <Footer />
    </>
  );
};
    

export default Contact;
