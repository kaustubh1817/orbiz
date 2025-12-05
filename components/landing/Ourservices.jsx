"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import servicesData from "../../data/ourservices-lan";

export default function Ourservices() {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="section-block-padding ">
      <h1 className="fl1 text-center title-content-gap">Our services</h1>
      <p className="fl8 text-center md:max-w-1/2 mx-auto">
        We offer a range of IT consulting and services to help your business
        succeed. Whether you need cloud solutions, managed IT services, disaster
        recovery, cloud desktop, network solutions, or support consulting, we've
        got you covered.
      </p>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mx-13 section-block-padding">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col h-full bg-white shadow-[0_0_15px_10px_rgba(26,43,109,0.12)] hover:shadow transition-shadow duration-400 p-6 gap-6 "
          >
            <div className="w-12 md:w-16">
              <img
                src={service.icon}
                alt={service.title}
                className="w-auto h-12 md:h-15 object-cover"
              />
            </div>
            <h2 className="fl2">{service.title}</h2>
            <div className="w-full h-[1px] bg-[#1A2B6D4D]"></div>
            <p className="fl8 flex-grow">{service.description}</p>
            <a href={service.href} className="fl3 flex justify-between">
              Learn More
              <span>
                <img
                  src="/landing/ourservices/red-arrow.webp"
                  alt="arrow-right-red"
                />
              </span>
            </a>
          </div>
        ))}
      </div>

      <div className="md:hidden ">
        <div className="w-90 mx-auto relative section-block-padding">
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            spaceBetween={18}
            slidesPerView="auto"
            pagination={{
              el: paginationRef.current,
              clickable: true,
              bulletClass: "swiper-pagination-bullet service-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active service-bullet-active",
            }}
            touchEventsTarget="container"
            simulateTouch={true}
            allowTouchMove={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
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
            className="overflow-hidden service-swiper"
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id} className="w-auto">
                <div className="flex flex-col h-full bg-white shadow-[0_0_15px_10px_rgba(26,43,109,0.12)] hover:shadow-lg transition-shadow duration-400 p-7 gap-6 ">
                  <div className="w-full md:w-16 flex justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-auto h-12 md:h-15 object-cover"
                    />
                  </div>
                  <h2 className="fl2 flex justify-center">{service.title}</h2>
                  <div className="w-full h-[1px] bg-[#1A2B6D4D]"></div>
                  <p className="fl8 flex-grow">{service.description}</p>
                  <a href={service.href} className="fl3 flex justify-between">
                    Learn More
                    <span>
                      <img
                        src="/landing/ourservices/red-arrow.webp"
                        alt="arrow-right-red"
                      />
                    </span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationRef}
            className="swiper-pagination flex justify-center mt-6 gap-3"
          ></div>
        </div>
      </div>
    </main>
  );
}
