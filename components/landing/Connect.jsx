"use client";
export default function Connect() {
  return (
    <section className="flex flex-col md:flex-row  md:order-1 order-2 w-full gap-10 text-center md:text-left section-block-padding container-padding">
      <div className="flex flex-col w-full md:w-1/2 justify-between gap-10">
        <h1 className="fl1 md:w-[80%] w-full">Ready to take your business to the next level?</h1>
        <p className="fl8 md:w-[80%] w-full">
          Contact us today to learn how we can help you achieve your technology
          goals. 
        </p>
        <button className="red-btn mt-0 md:mt-10 mx-auto md:mx-0">Let’s Connect</button>
      </div>

      <div className="md:w-1/2 w-full">
      <img
        src="/landing/Connect-landing.webp"
        alt="Connect-image"
        className="max-h-[400px] h-auto w-full border-[1px] border-[#1A2B6D4D] mx-auto"
        />
        </div>
    </section>
  );
}
