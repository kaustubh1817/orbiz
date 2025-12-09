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
  "/landing/dummy.svg",
  "/landing/dummy.svg",
  "/landing/dummy.svg",
  "/landing/dummy.svg",
  "/landing/dummy.svg",
];

export default function Careers() {
  return (
    <main className="min-h-screen container-padding my-20 ">
      <div className="section-block-padding">
        <p className="fl1 text-center mx-auto title-content-gap md:w-1/2 w-full">
          Orbiz: Where Passion Meets Progress
        </p>
        <div className="w-full ">
          <p className="fl8 ">
            We highly appreciate individuals who excel in the face of challenges
            and demonstrate a capacity to identify opportunities amid
            transformations. If you possess a fervent enthusiasm for technology
            and exhibit an unwavering commitment to continuous learning,
            adaptability, and personal development, we are interested in your
            candidacy. At Orbiz, we acknowledge the pivotal role individuals
            like yourself play in instigating transformative shifts in
            established practices, underscoring their indispensability to our
            success. If you are motivated to contribute to the development of
            pioneering products and are committed to delivering significant
            value in response to users' requirements, Orbiz offers an ideal
            professional milieu for your aspirations.
          </p>
        </div>
        <div className=" section-block-top">
          <button className="red-btn  mx-auto block ">Start now</button>
        </div>
      </div>

      <div className="">
        <div className="w-full ">
          <div className="w-full flex flex-col md:flex-row gap-10">
            <div className="flex flex-col w-full md:w-1/2 relative my-30">
              <div className="relative w-full  px-3 flex justify-center">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="relative w-full">
                    <img
                      src="/images/bg1.png"
                      alt="Background Shape"
                      className="w-full h-auto object-contain"
                    />

                    <div className="absolute inset-0 flex flex-col left-30 mt-4 ">
                      <div className="relative w-90  mb-6">
                        <img
                          src="/images/img2.png"
                          className="w-full h-full  "
                          alt="Team"
                        />
                      </div>

                      <div className="text-center w-70">
                        <h2 className="fl2 mb-2">
                          Not just a Workplace;
                        </h2>
                        <p className="fl8">
                          it’s a dynamic community where your enthusiasm for technology,
                          commitment to continuous learning, and dedication to creating
                          meaningful solutions align seamlessly with our ethos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/images/top1.png"
                    className="absolute -top-10 -left-6 w-16 md:w-50 -z-10"
                    alt=""
                  />
                  <img
                    src="/images/bottom1.png"
                    className="absolute -bottom-8 -right-4 w-16 md:w-50 -z-10"
                    alt=""
                  />
                </div>
              </div>



            </div>
            <div className="w-full  bg-[#F5F5F5] md:w-1/2 py-4 md:p-10">
              <div className="w-full px-4">
                <p className="fl1 text-center ">Join us</p>
                <p className="fl1 text-center mb-6">on this exciting journey</p>

                <div className=" p-8 bg-white ">
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name *"
                      className="w-full bg-[#f5f5f5] p-3"
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      className="w-full bg-[#f5f5f5] p-3"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Id *"
                    className="w-full bg-[#f5f5f5] p-3 mb-4 "
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full  mb-4 bg-[#f5f5f5] p-3"
                  />
                  <textarea
                    rows={5}
                    placeholder="Message"
                    className="w-full  mb-6 bg-[#f5f5f5] p-3"
                  ></textarea>
                  <button className="w-full fl3 bg-[#1A2B6D] !text-white py-3 ">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full section-block-padding  bg-white">
        <h2 className="text-center fl1 title-content-gap">Fun @ ORBiZ</h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".fun-swiper-next",
            prevEl: ".fun-swiper-prev",
          }}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="fun-swiper h-[480px] mx-auto"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="fun-slide">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={src}
                  alt="Fun Image"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center mt-10 mx-auto">
          <button className="fun-swiper-prev arrow-btn">‹</button>
          <button className="fun-swiper-next arrow-btn">›</button>
        </div>
      </section>
      <BackToTop />
    </main>
  );
}
