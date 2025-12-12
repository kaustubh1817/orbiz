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
    <main className="section-block-padding bg-[#F5F5F5] container-padding">
      <h1 className="fl1 text-center title-content-gap">Our Services</h1>
      <p className="fl4 text-center md:max-w-1/2 mx-auto text-justify">
        We offer a range of IT consulting and services to help your business
        succeed. Whether you need cloud solutions, managed IT services, disaster
        recovery, cloud desktop, network solutions, or support consulting, we've
        got you covered.
      </p>

      <div className="relative">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 section-block-top relative bg-[#F5F5F5] z-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col h-full md:h-103 shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundImage:
                  "url(/landing/ourservices/OurServices-bg.webp)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute -top-2 -left-1.5 md:w-35 md:h-19 2xl:w-46.5 2xl:h-25.5 z-10 flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url(/landing/ourservices/OurServices-top-bg.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-auto h-13 object-contain pr-4"
                />
              </div>

              <div className="pt-28 md:pt-32 px-6 pb-6">
                <h2 className="fl2 mb-3 text-[#1A2B6D]">{service.title}</h2>

                <div className="w-full h-[1px] bg-[#1A2B6D]/20 mb-3"></div>

                <p className="fl4 text-gray-600 h-35 text-justify">{service.description}</p>
                <a
                  href={service.href}
                  className="fl3 w-full flex justify-between items-center text-[#E31E24] gap-2 hover:gap-3 transition-all duration-200 "
                >
                  <span>Learn More</span>

                  <img
                    src="/landing/ourservices/red-arrow.webp"
                    alt="arrow"
                    className="w-6 h-auto"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden ">
        <div className="w-90% mx-auto relative section-block-padding">
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
                <div
                  className="relative flex flex-col h-75 md:h-full shadow-[0_0_15px_10px_rgba(26,43,109,0.12)] hover:shadow transition-shadow duration-400 p-6 gap-6 "
                  style={{
                    backgroundImage:
                      "url(/landing/ourservices/OurServices-bg.webp)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="w-33 h-17.5 absolute -top-2 -left-2 flex items-center justify-center"
                  style={{
                  backgroundImage:
                    "url(/landing/ourservices/OurServices-top-bg.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-auto h-12 md:h-15 object-cover pr-4 pt-2"
                    />
                  </div>
                  <h2 className="fl2 flex justify-center pt-15">{service.title}</h2>
                  <div className="w-full h-[1px] bg-[#1A2B6D4D]"></div>
                  <p className="fl4 flex-grow">{service.description}</p>
                  <a href={service.href} className="fl3 text-[#E31E24] flex justify-between">
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
