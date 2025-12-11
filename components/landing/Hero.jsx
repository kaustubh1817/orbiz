"use client";

import { useState, useEffect } from "react";

const imageSets = [
  [
    {
      src: "/landing/hero1.webp",
      alt: "mid-box-left-image", 
      className:
        "absolute 3xl:-top-22 md:-top-19 top-84.5 right-8 3xl:right-35 md:right-31 3xl:h-[630px] md:h-[540px] h-[350px]",
    },
    {
      src: "/landing/hero2.webp",
      alt: "mid-box-right-image",
      className:
        "absolute 3xl:top-72 md:top-61 top-137 right-36 3xl:right-85 md:right-74 3xl:h-[600px] md:h-[525px] h-[340px]",
    },
    {
      src: "/landing/hero3.webp",
      alt: "mid-box-image",
      className:
        "absolute right-0 top-103 md:-top-24 3xl:h-[850px] md:h-[750px] h-[400px]",
    },
  ],
  [
    {
      src: "/landing/hero1.webp",
      alt: "mid-box-left-image", 
      className:
        "absolute 3xl:-top-22 md:-top-19 top-84.5 right-8 3xl:right-35 md:right-31 3xl:h-[630px] md:h-[540px] h-[350px]",
    },
    {
      src: "/landing/hero2.webp",
      alt: "mid-box-right-image",
      className:
        "absolute 3xl:top-72 md:top-61 top-137 right-36 3xl:right-85 md:right-74 3xl:h-[600px] md:h-[525px] h-[340px]",
    },
    {
      src: "/landing/hero3.webp",
      alt: "mid-box-image",
      className:
        "absolute right-0 top-103 md:-top-24 3xl:h-[850px] md:h-[750px] h-[400px]",
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
    <section className="section-block-top md:pb-58 3xl:pb-72 pl-10 md:pl-18 2xl:pl-18 3xl:pl-22 relative">
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

        <div className="flex flex-col w-full md:w-1/2 md:h-[475px] 3xl:h-[500px] h-[500px]">
          <img
            src="/landing/top-box.png"
            alt="top-box-image"
            className="absolute 3xl:top-12 md:top-10 top-103 right-56 3xl:right-120 md:right-103.5 md:mb-9 md:h-17 md:w-42 h-9 w-21"
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
            className="absolute bottom-17.5 md:-bottom-0 right-0 md:right-2 md:mb-9 md:h-17 md:w-42 h-9 w-21"
          />
        </div>
      </div>
    </section>
  );
}
