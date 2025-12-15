"use client"

import Hero from "./Hero";
import Launching from "./Launching";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Herov2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000, 
        pauseOnHover: false,


        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    centerMode: true,
                    
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    centerMode: false,
                    
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: false,
                    
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="overflow-hidden testimonial-slick ">
                <Slider {...settings}>
                    <Hero />
                    <Launching />
                </Slider>
        </section>
    );
};

export default Herov2;
