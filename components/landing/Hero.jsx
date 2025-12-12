"use client";
import { useState, useEffect } from "react";

const imageSets = [
  [
    {
      src: "/landing/hero1.webp",
      alt: "mid-box-left-image", 
      className:
        "absolute 3xl:-top-15.5 md:-top-13 top-84.5 right-8 3xl:right-29 md:right-25.5 3xl:h-[520px] md:h-[420px] h-[350px]",
    },
    {
      src: "/landing/hero2.webp",
      alt: "mid-box-right-image",
      className:
        "absolute 3xl:top-62 md:top-50 top-137 right-36 3xl:right-70 md:right-59 3xl:h-[500px] md:h-[400px] h-[340px]",
    },
    {
      src: "/landing/hero3.webp",
      alt: "mid-box-image",
      className:
        "absolute right-0 top-103 md:-top-17.5 3xl:h-[705px] md:h-[582px] h-[400px]",
    },
  ],
   [
    {
      src: "/landing/hero1.webp",
      alt: "mid-box-left-image", 
      className:
        "absolute 3xl:-top-15.5 md:-top-13 top-84.5 right-8 3xl:right-29 md:right-25.5 3xl:h-[520px] md:h-[420px] h-[350px]",
    },
    {
      src: "/landing/hero2.webp",
      alt: "mid-box-right-image",
      className:
        "absolute 3xl:top-62 md:top-50 top-137 right-36 3xl:right-70 md:right-59 3xl:h-[500px] md:h-[400px] h-[340px]",
    },
    {
      src: "/landing/hero3.webp",
      alt: "mid-box-image",
      className:
        "absolute right-0 top-103 md:-top-17.5 3xl:h-[705px] md:h-[582px] h-[400px]",
    },
  ],
];

export default function Hero() {
  const [currentSet, setCurrentSet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % imageSets.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pl-10 md:pl-18 2xl:pl-18 3xl:pl-22 relative">
      <div className="flex flex-col md:flex-row w-full text-center md:text-left gap-10">
        <div className="flex flex-col w-full  md:w-1/2 justify-center gap-10 pr-10 md:pr-0">
          <h1 className="fl1">
            Innovation to Execution: Accelerate your Technology Development
          </h1>
          <p className="fl4 text-justify">
            At Orbiz, we are passionate about helping businesses like yours
            leverage technology to drive growth and improve efficiency. Our team
            of experienced consultants and engineers provide customized IT
            solutions tailored to your specific needs. Let us help you take your
            business to the next level.
          </p>
          <a href="/services" className="red-btn mt-5 md:mt-10 mx-auto md:mx-0">
            Learn More
          </a>
        </div>

        <div className="relative flex flex-col w-full md:w-1/2 md:h-[625px] 3xl:h-[750px] h-[500px]">
          <img
            src="/landing/top-box.png"
            alt="top-box-image"
            className="absolute 3xl:top-12 md:top-10 top-103 right-56 3xl:right-98.5 md:right-82.5 md:mb-9 md:h-17 md:w-42 h-9 w-21"
          />
          {imageSets[currentSet].map((img, idx) => (
            <img
              key={`${currentSet}-${idx}`}
              src={img.src}
              alt={img.alt}
              className={`${img.className} transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          ))}
          <img
            src="/landing/bottom-box.svg"
            alt="bottom-box-image"
            className="absolute bottom-17.5 md:-bottom-0 3xl:bottom-0 right-0 md:right-0 md:mb-9 md:h-17 md:w-42 h-9 w-21"
          />
        </div>
         {/* <a href="/services" className="md:hidden block red-btn mt-5 md:mt-10 mx-auto md:mx-0">
            Learn More
          </a> */}
      </div>
      
    </section>
  );
}
