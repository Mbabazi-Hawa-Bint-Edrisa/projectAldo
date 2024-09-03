// import React from "react";
// import Destination from "../components/Destination";
// import Footer from "../components/Footer";
// import Hero from "../components/Hero";
// import Navbar from "../components/Navbar";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import RecentTrips from "../components/RecentTrips";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero
//         cName="hero"
//         heroImg="https://img.freepik.com/free-photo/fantasy-colorfull-nature-mountains-landscape_1204-305.jpg?ga=GA1.2.69430814.1701403212&semt=ais_user"
//         title="Satiate Your Wanderlust"
//         text="To your desired destination"
        
//         url="#"
        
//       />
//       <Destination />
      
//       <Footer />
//     </>
//   );
// };

// export default Home;
import React from "react";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Card from "../components/card";
// import RecentTrips from "../components/RecentTrips";

const Home = () => {
  const slides = [
    {
      image: "https://img.freepik.com/free-photo/fantasy-colorfull-nature-mountains-landscape_1204-305.jpg?ga=GA1.2.69430814.1701403212&semt=ais_user",
    },
    {
      image: "https://img.freepik.com/free-photo/iceland-landscape-beautiful-waterfall_23-2149099952.jpg?t=st=1722423163~exp=1722426763~hmac=33291723f2b935a198b58265ba4c35761882a7d2511e640b7eae4644aec99b8a&w=740",
    },
    {
      image: "https://img.freepik.com/premium-photo/man-is-riding-rope-with-words-go-paraglider-back_997657-36352.jpg?uid=R156740113&ga=GA1.1.69430814.1701403212&semt=ais_hybrid",
    },
    {
      image: "https://img.freepik.com/premium-photo/group-people-are-rafting-river-with-guide_6216-309.jpg?uid=R156740113&ga=GA1.1.69430814.1701403212&semt=ais_hybrid",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        slides={slides}
        title="Satiate Your Wanderlust"
        text="To your desired destination"
        
        url="#"
       
      />
      <Card/>
      <Destination />
      {/* <RecentTrips /> */}
      <Footer />
    </>
  );
};

export default Home;
