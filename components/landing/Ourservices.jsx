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
      <p className="fl8 text-center md:max-w-1/2 mx-auto">
        We offer a range of IT consulting and services to help your business
        succeed. Whether you need cloud solutions, managed IT services, disaster
        recovery, cloud desktop, network solutions, or support consulting, we've
        got you covered.
      </p>

      <div className="relative">

        
        <img
          src="/images/servicebg.png"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          alt="bg-white-shape"
        />

       
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 section-block-top relative bg-[#F5F5F5] z-10">

          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
             
              <img
                src="/images/servicetop1.png"
                alt="card-top-shape"
                className="absolute top-0 left-0 w-[120px] md:w-[140px] pointer-events-none select-none"
              />

             
              <div className="absolute top-3 left-5 md:top-3 md:left-7 w-12 md:w-14 z-10">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

             
              <div className="pt-28 md:pt-32 px-6 pb-6">
                
                <h2 className="fl2 mb-3 text-[#1A2B6D]">{service.title}</h2>

               
                <div className="w-full h-[1px] bg-[#1A2B6D]/20 mb-3"></div>

               
                <p className="fl8 mb-4 text-gray-600 leading-relaxed">{service.description}</p>

               
                <a
                  href={service.href}
                  className="fl3 inline-flex items-center gap-2 text-[#E31E24] hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <img
                    src="/landing/ourservices/red-arrow.webp"
                    alt="arrow"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
          ))}

        </div>
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
                <div className="flex flex-col h-full bg-white shadow-[0_0_15px_10px_rgba(26,43,109,0.12)] hover:shadow transition-shadow duration-400 p-6 gap-6 ">
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
