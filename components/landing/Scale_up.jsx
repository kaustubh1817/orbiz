"use client";

export default function Scale_up() {


  return (
    <section className="min-h-screen sm:min-h-auto flex flex-col justify-center items-center -mt-6 md:mt-15 bg-[url('/landing/launching-bg-mobilev3.webp')] md:bg-contain bg-no-repeat bg-center sm:bg-cover md:bg-[url('/landing/launching-bg2.png')]">
      
        <h1 className="fl1 text-center title-content-gap">
          Scale-up or Lean-up?
        </h1>

        <div className="py-5">
            <img
              src="/scale_up/scale-pop.webp"
              alt="scale up"
              className="size-30 md:size-40"
            />
        </div>
         <p className="fl5 text-center w-[60vw] md:w-[47vw]">
          One protects your assets; the other attracts millions in funding. Do you know which is which?
        </p>

        <a href="/company_registration" className="red-btn mt-20 md:mt-13 mx-auto md:mx-0">
            Learn More
          </a>
      
    </section>
  );
}
