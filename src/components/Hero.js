
import "../components/HeroStyles.css";
import React from "react";
import Slider from "react-slick";

const Hero = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="relative hidden md:block">
        <Slider {...settings}>
          {props.slides.map((slide, index) => (
            <div key={index}>
              <div className="relative">
                
                <div className="h-80 relative">
                  <img alt={`slide-${index}`} src={slide.image} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
          ))}
        </Slider>
        <div className="absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center bg-red-400 bg-opacity-60">
                  <h1 className="text-white font-bold text-4xl md:text-6xl text-center">{props.title}</h1>
                  <p className="text-white font-light md:text-xl text-center">{props.text}</p>
        </div>
    </div>
      <div className="relative md:hidden">
        <Slider {...settingsMobile}>
          {props.slides.map((slide, index) => (
            <div key={index}>
              <div className="relative">
                
                <div className="h-80 relative">
                  <img alt={`slide-${index}`} src={slide.image} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
          ))}
        </Slider>
        <div className="absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center bg-red-400 bg-opacity-60">
                  <h1 className="text-white font-bold text-4xl md:text-6xl text-center">{props.title}</h1>
                  <p className="text-white font-light md:text-xl text-center">{props.text}</p>
        </div>
    </div>
    </>
  );
};

export default Hero;