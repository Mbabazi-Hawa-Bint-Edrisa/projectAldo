import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecentTrips from "../components/RecentTrips";
import PackageList from "../components/AvailableTrips";
import img1 from "../assets/images//11.jpg";
import img2 from "../assets/images//15.jpg";
import Card from "../components/card";

const Service = () => {

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
        title="Trips"
        text="Travel with us ."
        
        url="#"
       
      />
      <Card/>
      <RecentTrips />
      <PackageList/>

      <Footer />
    </>
  );
};

export default Service;
