import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/bookingForm";
import img1 from "../assets/images//2.jpg";
import img2 from "../assets/images//2.jpg";

const Booking= () => {
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
        title="Booking"
    
        
        url="#"
       
      />


      <BookingForm />
      <Footer />
    </>
  );
};

export default Booking;
