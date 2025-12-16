"use client";

import { useState } from "react";
import Image from "next/image";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Carousel3D from "./Carousel3D";
import BackToTop from "@/components/BackToTop";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const positionOptions = [
  { value: "developer", label: "Developer" },
  { value: "qa", label: "QA Engineer" },
  { value: "intern", label: "Intern" },
  { value: "architect", label: "Architect" },
  { value: "db-architect", label: "DB Architect" },
  { value: "db-developer", label: "DB Developer" },
  { value: "hr", label: "HR" },
];

export default function Careers() {
  const [dob, setDob] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [position, setPosition] = useState(null);

  return (
    <main className="min-h-screen section-block-top">
      <p className="fl1 text-center mx-auto title-content-gap md:w-1/2 w-full">
        Orbiz: Where Passion Meets Progress
      </p>

      <p className="fl4 text-justify mx-auto md:w-[90%] w-full container-padding title-content-gap">
        We highly appreciate individuals who excel in the face of challenges and
        demonstrate a capacity to identify opportunities amid transformations.
        If you possess a fervent enthusiasm for technology and exhibit an
        unwavering commitment to continuous learning, adaptability, and personal
        development, we are interested in your candidacy.
      </p>

      
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
              <p className="fl1 text-center title-content-gap">
                Join us on this exciting journey
              </p>

              <div className="p-6 md:p-8 bg-white rounded-[2px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                 
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex. Amy"
                      className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style"
                    />
                  </div>

                 
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex. West"
                      className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style"
                    />
                  </div>

                 
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Date of Birth
                    </label>
                    <DatePicker
                      selected={dob}
                      onChange={(date) => setDob(date)}
                      placeholderText="DD/MM/YYYY"
                      dateFormat="dd/MM/yyyy"
                      className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style"
                      wrapperClassName="w-full datepicker-wrapper"
                    />
                  </div>

                  
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style"
                    />
                  </div>

                  
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="**********"
                      className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style"
                    />
                  </div>

                  
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Position Applying for *
                    </label>
                    <Select
                      options={positionOptions}
                      placeholder="Select"
                      classNamePrefix="react-select"
                    />
                  </div>

                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Available Start Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholderText="DD/MM/YYYY"
                      dateFormat="dd/MM/yyyy"
                      className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style"
                      wrapperClassName="w-full datepicker-wrapper"
                    />
                  </div>

                  
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Resume Link *
                    </label>
                    <input
                      type="text"
                      placeholder="********"
                      className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style"
                    />
                  </div>
                </div>

                <button className="w-full mt-8 bg-[#1A2B6D] !text-white py-3 fl3">
                  Submit
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>

      <Carousel3D />
      <BackToTop />
    </main>
  );
}
