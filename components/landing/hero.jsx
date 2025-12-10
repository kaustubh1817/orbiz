"use client";

import { useState, useEffect } from "react";

const imageSets = [
  [
    { src: "/landing/hero1.png", alt: "mid-box-left-image", className: "absolute 3xl:top-20 md:top-25 3xl:right-10 md:right-13 3xl:h-[250px] md:h-[235px] h-[175px]" },
    { src: "/landing/hero2.png", alt: "mid-box-right-image", className: "absolute top-86 right-45 3xl:h-[250px] md:h-[225px] h-[175px]" },
    { src: "/landing/hero3.png", alt: "mid-box-image", className: "absolute right-0 3xl:h-[500px] md:h-[450px] h-[350px]" },
  ],
  [
    { src: "/landing/hero1.png", alt: "carousel-image-1", className: "absolute 3xl:top-20 md:top-25 3xl:right-10 md:right-13 3xl:h-[250px] md:h-[235px] h-[175px]" },
    { src: "/landing/hero2.png", alt: "carousel-image-2", className: "absolute top-86 right-45 3xl:h-[250px] md:h-[225px] h-[175px]" },
    { src: "/landing/hero3.png", alt: "carousel-image-3", className: "absolute right-0 3xl:h-[500px] md:h-[450px] h-[350px]" },
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
    <section className="section-block-padding pl-10 md:pl-18 2xl:pl-18 3xl:pl-22 relative">
      <div className="flex flex-col md:flex-row w-full text-center md:text-left gap-10">
        <div className="flex flex-col w-full md:w-1/2 justify-center gap-10">
          <h1 className="fl1">
            Innovation to Execution: Accelerate your Technology Development
          </h1>
          <p className="fl4">
            At Orbiz, we are passionate about helping businesses like yours
            leverage technology to drive growth and improve efficiency. Our team
            of experienced consultants and engineers provide customized IT
            solutions tailored to your specific needs. Let us help you take your
            business to the next level.
          </p>
          <a href="/services" className="red-btn mt-0 md:mt-10 mx-auto md:mx-0">
            Learn More
          </a>
        </div>

        <div className="flex flex-col w-full md:w-1/2 md:h-[475px] 3xl:h-[500px] h-[350px]">
          <img
            src="/landing/top-box.png"
            alt="top-box-image"
            className="absolute top-28 right-75"
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
            className="absolute bottom-0 right-2 mb-2"
          />
        </div>
      </div>
    </section>
  );
}