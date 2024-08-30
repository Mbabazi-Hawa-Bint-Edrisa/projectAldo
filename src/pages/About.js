// import React from "react";
// import Hero from "../components/Hero";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import img1 from "../assets/images//12.jpg";
// import Aboutus from "../components/Aboutus";

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero cName="hero-mid" heroImg={img1} title="About Us" />
//       <Aboutus />
//       <Footer />
//     </>
//   );
// };

// export default About;
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/images//12.jpg";
import img2 from "../assets/images//9.jpg";
import Aboutus from "../components/Aboutus";

const About = () => {
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
        title="About Us"
        text="Learn more about our company and mission."
        
        url="#"
       
      />
      <Aboutus />
      <Footer />
    </>
  );
};

export default About;
