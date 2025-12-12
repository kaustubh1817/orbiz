"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import BackToTop from "@/components/BackToTop";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
  "/landing/dummy3.png",
  "/landing/dummy2.jpg",
  "/landing/dummy3.png",
  "/landing/dummy2.jpg",
  "/landing/dummy3.png",
  "/landing/dummy2.jpg",
  "/landing/dummy3.png",
  "/landing/dummy2.jpg",
  "/landing/dummy3.png",
];

export default function Careers() {
  return (
    <main className="min-h-screen  section-block-padding">
      <p className="fl1 text-center mx-auto title-content-gap md:w-1/2 w-full">
        Orbiz: Where Passion Meets Progress
      </p>
      <p className="fl4 text-justify mx-auto md:w-[90%] w-full container-padding title-content-gap">
        We highly appreciate individuals who excel in the face of challenges and
        demonstrate a capacity to identify opportunities amid transformations.
        If you possess a fervent enthusiasm for technology and exhibit an
        unwavering commitment to continuous learning, adaptability, and personal
        development, we are interested in your candidacy. At Orbiz, we
        acknowledge the pivotal role individuals like yourself play in
        instigating transformative shifts in established practices, underscoring
        their indispensability to our success. If you are motivated to
        contribute to the development of pioneering products and are committed
        to delivering significant value in response to users' requirements,
        Orbiz offers an ideal professional milieu for your aspirations.
      </p>
      <div className="w-full">
        <a href="/careers" className="red-btn mt-10 md:mt-20 mx-auto block">
          Start now
        </a>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 md:px-18 2xl:px-18 3xl:px-22 section-block-padding">
        <div className="flex flex-col w-full md:w-1/2 relative justify-center container-padding">
          <img
            src="/landing/careers4.png"
            alt="Background Shape"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-white md:w-1/2 w-full">
          <div className="bg-[#F5F5F5] py-4 md:p-10">
            <div className="mx-4 md:mx-0">
              <p className="fl2 text-center title-content-gap">
                Join us on this exciting journey
              </p>
              <div className="p-4 bg-white ">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="w-full fl4 bg-[#f5f5f5] p-3"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="w-full fl4 bg-[#f5f5f5] p-3"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Id *"
                  className="w-full fl4 bg-[#f5f5f5] p-3 mb-4 "
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full fl4 mb-4 bg-[#f5f5f5] p-3"
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full fl4 mb-6 bg-[#f5f5f5] p-3"
                ></textarea>
                <button className="w-full fl3 bg-[#1A2B6D] text-white py-2">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="hidden md:block w-full section-block-padding bg-[#F5F5F5]">
        <h2 className="text-center fl1 title-content-gap">Fun @ ORBiZ</h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".fun-next",
            prevEl: ".fun-prev",
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={5}
          className="fun-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="fun-card">
                <Image src={src} alt="slider" fill className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center mt-10 mx-auto px-10">
          <button className="fun-prev arrow-btn text-3xl">‹</button>
          <button className="fun-next arrow-btn text-3xl">›</button>
        </div>
      </section>

      <section className="md:hidden w-full section-block-padding bg-white">
        <h2 className="text-center fl1 title-content-gap">Fun @ ORBiZ</h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".fun-next",
            prevEl: ".fun-prev",
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={5}
          className="fun-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="fun-card">
                <Image src={src} alt="slider" fill className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center mt-10 mx-4">
          <button className="fun-prev arrow-btn text-3xl">‹</button>
          <button className="fun-next arrow-btn text-3xl">›</button>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
