"use client";

import Hero from "./Hero";
import Launching from "./Launching";
import Scale_up from "./Scale_up";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Herov2 = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,        
    autoplaySpeed: 6000,   

    pauseOnHover: false,   
    pauseOnFocus: false,  
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
  };



  return (
    <section>
      <Slider {...settings} className="hero-slick">
        <Hero />
        <Launching />
        <Scale_up />
      </Slider>
    </section>
  );
};

export default Herov2;
