
import "../components/HeroStyles.css";
import React from "react";
import Slider from "react-slick";

const Hero = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className={props.cName}>
        <Slider {...settings}>
          {props.slides.map((slide, index) => (
            <div key={index}>
              <img alt={`slide-${index}`} src={slide.image} />
            </div>
          ))}
        </Slider>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <br />
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
