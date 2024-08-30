import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";
import img1 from "../assets/images//2.jpg";
import img2 from "../assets/images//2.jpg";

const SignUp = () => {
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
        title="Create an account"
    
        
        url="#"
       
      />
      <SignUpForm />
      <Footer />
    </>
  );
};

export default SignUp;
