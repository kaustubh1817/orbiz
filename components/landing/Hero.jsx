"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageSets = [
  [
    {
      src: "/landing/hero1.webp",
      alt: "mid-box-left-image",
      className:
        "absolute 3xl:-top-15.5 md:-top-13 -top-19.5 right-0 3xl:right-29 md:right-25.5 3xl:h-[520px] md:h-[420px] h-[368px]",
      fromX: -80,
    },
    {
      src: "/landing/hero2.webp",
      alt: "mid-box-right-image",
      className:
        "absolute 3xl:top-62 md:top-50 top-36 right-28.5 3xl:right-70 md:right-59 3xl:h-[500px] md:h-[400px] h-[360px]",
      fromX: 80,
    },
    {
      src: "/landing/hero3.webp",
      alt: "mid-box-image",
      className:
        "hidden md:block absolute right-0 top-103 md:-top-17.5 3xl:h-[705px] md:h-[582px] h-[400px]",
      fromY: 80,
    },
  ],
  [
    {
      src: "/landing/hero4.webp",
      alt: "mid-box-left-image",
      className:
        "absolute 3xl:-top-15.5 md:-top-13 -top-19.5 right-0 3xl:right-29 md:right-25.5 3xl:h-[520px] md:h-[420px] h-[368px]",
      fromX: -80,
    },
    {
      src: "/landing/hero5.webp",
      alt: "mid-box-right-image",
      className:
        "absolute 3xl:top-62 md:top-50 top-36 right-28.5 3xl:right-70 md:right-59 3xl:h-[500px] md:h-[400px] h-[360px]",
      fromX: 80,
    },
    {
      src: "/landing/hero6.webp",
      alt: "mid-box-image",
      className:
        "hidden md:block absolute right-0 top-103 md:-top-17.5 3xl:h-[705px] md:h-[582px] h-[400px]",
      fromY: 80,
    },
  ],
  [
    {
      src: "/landing/hero7.webp",
      alt: "mid-box-left-image",
      className:
        "absolute 3xl:-top-15.5 md:-top-13 -top-19.5 right-0 3xl:right-29 md:right-25.5 3xl:h-[520px] md:h-[420px] h-[368px]",
      fromX: -80,
    },
    {
      src: "/landing/hero8.webp",
      alt: "mid-box-right-image",
      className:
        "absolute 3xl:top-62 md:top-50 top-36 right-28.5 3xl:right-70 md:right-59 3xl:h-[500px] md:h-[400px] h-[360px]",
      fromX: 80,
    },
    {
      src: "/landing/hero9.webp",
      alt: "mid-box-image",
      className:
        "hidden md:block absolute right-0 top-103 md:-top-17.5 3xl:h-[705px] md:h-[582px] h-[400px]",
      fromY: 80,
    },
  ],
];

export default function Hero() {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pl-10 md:pl-18 2xl:pl-18 3xl:pl-22 relative py-10 md:py-0 3xl:py-0 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full text-center md:text-left gap-10">
        
        <div className="flex flex-col w-full md:w-1/2 justify-center gap-10 pr-10 md:pr-0">
          <h1 className="fl1">
            Innovation to Execution: Accelerate your Technology Development
          </h1>
          <p className="fl4 text-justify">
            At Orbiz, we are passionate about helping businesses like yours
            leverage technology to drive growth and improve efficiency. Our team
            of experienced consultants and engineers provide customized IT
            solutions tailored to your specific needs.
          </p>
          <a href="/services" className="red-btn mt-5 md:mt-10 mx-auto md:mx-0">
            Learn More
          </a>
        </div>

        
        <div className="relative flex flex-col w-full md:w-1/2 md:h-[625px] 3xl:h-[750px] h-[445px] overflow-hidden">

          <img
            src="/landing/top-box.png"
            alt="top-box"
            className="absolute 3xl:top-12 md:top-10 top-0 right-52 3xl:right-98.5 md:right-82.5 md:h-17 md:w-42 h-18 w-42"
          />

          <AnimatePresence mode="wait">
            {imageSets[currentSet].map((img, idx) => (
              <motion.img
                key={`${currentSet}-${idx}`}
                src={img.src}
                alt={img.alt}
                className={img.className}
                initial={{
                  opacity: 0,
                  x: img.fromX ?? 0,
                  y: img.fromY ?? 0,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  x: img.fromX ? -img.fromX : 0,
                  y: img.fromY ? -img.fromY : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
            ))}
          </AnimatePresence>

          <img
            src="/landing/bottom-box.svg"
            alt="bottom-box"
            className="absolute bottom-5 md:-bottom-0 3xl:bottom-0 right-2 md:right-0 md:mb-9 md:h-17 md:w-42 h-18 w-58" />
        </div>
      </div>
    </section>
  );
}
