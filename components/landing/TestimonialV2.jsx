"use client"

import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialV2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        pauseOnHover: false,


        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    centerMode: true,
                    centerPadding: "200px",
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-[#F5F5F5] section-block-padding overflow-hidden">
            <div className="container-padding">
                <div className=" text-center title-content-gap">
                    <p className="fl1">Testimonial</p>
                </div>
            </div>

            <div className="testimonial-slick section-block-bottom">
                <Slider {...settings}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialV2;
