"use client";
export default function Connect() {
  return (
    <section className="flex flex-col md:flex-row  md:order-1 order-2 w-full gap-10 text-center md:text-left section-block-padding container-padding">
      <div className="flex flex-col w-full md:w-1/2 justify-between gap-10 order-2 md:order-1">
        <h1 className="fl1">Ready to take your business to the next level?</h1>
        <p className="fl8">
          Contact us today to learn how we can help you achieve your technology
          goals. 
        </p>
        <button className="red-btn mt-0 md:mt-10 mx-auto md:mx-0">Let’s Connect</button>
      </div>

      <div className="order-1 md:order-2 ">
      <img
        src="/landing/Connect-landing.webp"
        alt="Connect-image"
        className="h-50 md:h-80 w-auto border-[1px] border-[#1A2B6D4D] mx-auto"
        />
        </div>
    </section>
  );
}
