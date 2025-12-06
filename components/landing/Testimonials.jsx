"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import TestimonialsData from "../../data/testimonialsData.jsx";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <main className="section-block-padding bg-[#F5F5F5] container-padding">
      <h1 className="fl1 text-center title-content-gap">Testimonials</h1>

      <div className="relative w-full">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, EffectCoverflow]}
          effect={isMobile ? "slide" : "coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : "auto"}
          spaceBetween={isMobile ? 0 : 25}
          coverflowEffect={
            !isMobile
              ? {
                  rotate: 0,
                  stretch: 50,
                  depth: 180,
                  modifier: 1,
                  slideShadows: false,
                }
              : undefined
          }
          pagination={{
            el: paginationRef.current,
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          loop={true}
          touchEventsTarget="container"
          simulateTouch={true}
          allowTouchMove={true}
          onSwiper={(swiper) => {
            if (paginationRef.current) {
              swiper.params.pagination.el = paginationRef.current;
              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            }
          }}
          onInit={(swiper) => {
            if (paginationRef.current && isMounted) {
              swiper.params.pagination.el = paginationRef.current;
              swiper.pagination.destroy();
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            }
          }}
          className="testimonials-swiper overflow-hidden"
        >
          {TestimonialsData.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="testimonial-slide bg-white shadow-[0_0_15px_10px_rgba(26,43,109,0.12)] hover:shadow transition-shadow duration-400 p-10 w-100 !md:w-250 h-auto"
            >
              <p className="fl8">{testimonial.quote}</p>
              <div className="flex justify-between ">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                  <h3 className="fl2">{testimonial.name}</h3>
                  <p className="fl8">{testimonial.title}</p>
                  </div>
                </div>
                <img
                   src="/landing/quotation.png"
                   alt="quotation-logo"
                   className="w-45 h-auto"
                   />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-10 md:mt-14">
          <div
            ref={paginationRef}
            className="testimonial-pagination flex justify-center gap-2"
          ></div>
        </div>
      </div>
    </main>
  );
}
