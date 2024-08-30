import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import LoginForm from "../components/Login";
import img1 from "../assets/images//2.jpg";
import img2 from "../assets/images//2.jpg";

const Login= () => {
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
        title="Login"
    
        
        url="#"
       
      />
      <LoginForm/>
      <Footer />
    </>
  );
};

export default Login;
