"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);


      useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== "undefined" && window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="
            fixed bottom-6 right-6 z-[9999]
            bg-[#1A2B6D] text-white
            w-12 h-12 rounded-full
            flex items-center justify-center
            transition-all duration-300
          "
                >
                    <ArrowUp size={22} />
                </button>
            )}
        </>
    );
}
