"use client";

import { useEffect, useState } from "react";

export default function HomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 w-[60%] flex flex-col justify-center items-center bg-[url('/scale_up/scale_pop_bg.webp')] bg-no-repeat bg-center sm:bg-cover p-10">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 size-5 flex items-center justify-center bg-[url('/scale_up/x.webp')] bg-no-repeat bg-center sm:bg-cover hover:cursor-pointer"
        ></button>

        <h1 className="fl1 text-center mb-4 md:mb-5">Scale-up or Lean-up?</h1>

        <div className="py-3 md:py-4">
          <img
            src="/scale_up/scale-pop.webp"
            alt="scale up"
            className="size-25"
          />
        </div>
        <p className="fl5 text-center w-[40vw] md:w-[47vw]">
          One protects your assets; the other attracts millions in funding. Do
          you know which is which?
        </p>

        <a
          href="/company_registration"
          className="red-btn mt-8 md:mt-10 mx-auto md:mx-0"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
