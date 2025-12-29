"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function Ourservices() {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const procons = [
    {
      id: 1,
      title: "Pros :",
      points: [
        "Relatively lesser compliances.",
        "Relatively easier to dissolve",
        "Easier way of transfer of shares",
      ],
    },
    {
      id: 2,
      title: "Cons :",
      points: [
        "Transferability of shares is cumbersome",
        "~20% more compliances (as indicated by Chartered accountant)",
      ],
    },
  ];

  const process = [
    {
      id: 1,
      icon: "/scale_up/process1.webp",
      title: "Company name approval",
    },
    {
      id: 2,
      icon: "/scale_up/process2.webp",
      title: "Directors digital certificate & Identifcation number",
    },
    {
      id: 3,
      icon: "/scale_up/process3.webp",
      title: "Drafting MoA, AoA and Filing with registrar of companies",
    },
    {
      id: 4,
      icon: "/scale_up/process4.webp",
      title: "Receive registration certificate",
    },
    {
      id: 5,
      icon: "/scale_up/process5.webp",
      title: "GST registration",
    },
    {
      id: 6,
      icon: "/scale_up/process6.webp",
      title: "Bank account opening",
    },
  ];

  return (
    <main className="bg-white">
      <section className="flex flex-col md:flex-row w-full container-padding section-block-padding">
        <div className="">
          <h2 className="fl1 title-content-gap">Company & LLP Registration</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {procons.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F5F5] w-full md:w-[25vw] p-5"
              >
                <h3 className="fl2 mb-5">{item.title}</h3>
                <ul className="list-disc  pl-5 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="fl4 !text-black">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img src="/scale_up/scale_hero.webp" alt="" className="" />
        </div>
      </section>

      <div className="relative bg-[#F5F5F5]">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-15 section-block-padding relative z-10 container-padding">
          {process.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col h-full md:h-103 transition-shadow duration-300 hover:shadow-[6px_6px_14px_-6px_#1A2B6D1F]"
              style={{
                backgroundImage:
                  "url(/landing/ourservices/OurServices-bg-full.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute -top-2 -left-1.5 3xl:-top-1 md:-top-0.5 md:w-35 md:h-18.5 3xl:w-43 3xl:h-23 z-10 flex items-center justify-center">
                <h2 className="text-[16px] md:text-[24px] font-poppins-semibold text-[#000000]">
                  {item.id}
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center p-12 pt-18">
                <img src={item.icon} alt={item.title} className="size-50" />
                <p className="fl5 py-5 text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden bg-[#F5F5F5]">
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
            {process.map((item) => (
              <SwiperSlide key={item.id} className="w-auto">
                <div
                  className="relative flex flex-col w-[80vw] mx-auto h-75 md:h-full shadow-[0_0_15px_10px_rgba(26,43,109,0.12)] hover:shadow transition-shadow duration-400 p-6 gap-6 "
                  style={{
                    backgroundImage:
                      "url(/landing/ourservices/OurServices-bg-full.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                   <div className="absolute top-6 left-10 z-10 flex items-center justify-center">
                <h2 className="text-[16px] md:text-[24px] font-poppins-semibold text-[#000000]">
                  {item.id}
                </h2>
              </div>
                  <div className="flex flex-col items-center justify-center p-6 pt-10">
                    <img src={item.icon} alt={item.title} className="size-35" />
                    <p className="fl5 py-5 text-center">{item.title}</p>
                  </div>
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
