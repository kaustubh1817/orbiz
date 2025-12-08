"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
  "/landing/hero1.png",
  "/landing/hero2.png",
  "/landing/hero3.png",
];

export default function Careers() {
    return (
        <main className="min-h-screen">
            <div className="container-padding section-block-padding">
                <p className="fl1 !text-[18px] md:!text-[32px] flex justify-center pb-8">Orbiz: Where Passion Meets Progress</p>
                <div className="w-full ">
                    <p className="fl8 ">
                        We highly appreciate individuals who excel in the face of challenges and demonstrate a capacity to identify opportunities amid transformations. If you possess a fervent enthusiasm for technology and exhibit an unwavering commitment to continuous learning, adaptability, and personal development, we are interested in your candidacy. At Orbiz, we acknowledge the pivotal role individuals like yourself play in instigating transformative shifts in established practices, underscoring their indispensability to our success. If you are motivated to contribute to the development of pioneering products and are committed to delivering significant value in response to users' requirements, Orbiz offers an ideal professional milieu for your aspirations.
                    </p>
                </div>
                <div className="container-padding section-block-padding">
                    <button className="red-btn  mx-auto block ">
                        Start now
                    </button>
                </div>
            </div>

            <div className="container-padding ">
                <div className="w-full ">
                    <div className="w-full flex flex-col md:flex-row gap-10">
                        <div className="flex flex-col w-full md:w-1/2 relative my-30">
                            {/* <img
                                src="/landing/top-box.png"
                                alt="top-box-image"
                                className="absolute top-0 left-26"
                            />
                            <div className=" relative  flex flex-row -right-60 z-10 !bg-[#DFE4F8]">
                                <div className="flex flex-col">
                                    <img
                                        src="\images\careees1.png"
                                        alt="mid-box-image"
                                        className="absolute "
                                    />
                                    <div>


                                    </div>
                                </div>
                            </div>
                            <img
                                src="/landing/top-box.png"
                                alt="bottom-box-image"
                                className="absolute bottom-0 right-0"
                            /> */}
                        </div>
                        <div className="w-full  bg-[#F5F5F5] md:w-1/2 py-4 md:p-10">
                            <div className="w-full px-4">
                                <p className="fl1 text-center ">
                                    Join us</p>
                                <p className="fl1 text-center mb-6">
                                    on this exciting journey
                                </p>

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

            <section className="w-full py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-[#1a2362] mb-12">
        Fun @ ORBiZ
      </h2>

      <div className="relative flex items-center justify-center w-full">
        {/* Left Navigation */}
        <button
          className="swiper-button-prev bg-[#1a2362] w-12 h-12 flex items-center justify-center text-white rounded-md absolute left-10 z-10"
        >
          ‹
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={40}
          loop={true}
          className="w-[85%]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="slide-card w-full h-[480px] overflow-hidden rounded-md">
                <Image
                  src={src}
                  alt="Fun Image"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation */}
        <button
          className="swiper-button-next bg-[#1a2362] w-12 h-12 flex items-center justify-center text-white rounded-md absolute right-10 z-10"
        >
          ›
        </button>
      </div>
    </section>
        </main>

    );
}