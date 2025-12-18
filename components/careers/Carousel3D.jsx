"use client";

import { useState, useEffect, useRef } from "react";
export default function Carousel3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const autoSlideIntervalRef = useRef(null);

  const images = [
    "/careers/career-image1.webp",
    "/careers/career-image2.webp",
    "/careers/career-image1.webp",
    "/careers/career-image2.webp",
    "/careers/career-image1.webp",
  ];

  const getItemClass = (index) => {
    const distance = (index - currentIndex + images.length) % images.length;

    if (distance === 0) return "center";
    if (distance === 1) return "right-1";
    if (distance === 2) return "right-2";
    if (distance === images.length - 1) return "left-1";
    if (distance === images.length - 2) return "left-2";

    return "hidden";
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    if (autoSlideEnabled && !isAnimating) {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [autoSlideEnabled, isAnimating, images.length]);

  useEffect(() => {
    setAutoSlideEnabled(false);
    const resumeTimer = setTimeout(() => setAutoSlideEnabled(true), 1000);
    return () => clearTimeout(resumeTimer);
  }, [isAnimating]);

  return (
    <div className="section-block-padding flex flex-col items-center justify-center h-full bg-[#F5F5F5] overflow-x-hidden">
      <h2 className="text-center fl1 mb-8 md:mb-25 2xl:mb-45">Fun @ ORBiZ</h2>

      <div
        className="perspective"
        onMouseEnter={() => setAutoSlideEnabled(false)}
        onMouseLeave={() => setAutoSlideEnabled(true)}
      >
        <div className="relative w-full h-96 flex items-center justify-center carousel-3d">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${getItemClass(index)}`}>
              <img
                src={image}
                alt={`Carousel item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-between container-padding mt-20">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="size-12 bg-blue-900 text-white text-2xl font-bold transition-all duration-300 hover:scale-101 active:scale-95 cursor-pointer disabled:opacity-50"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="size-12 bg-blue-900 text-white text-2xl font-bold transition-all duration-300 hover:scale-101 active:scale-95 cursor-pointer disabled:opacity-50"
        >
          ›
        </button>
      </div>
    </div>
  );
}
