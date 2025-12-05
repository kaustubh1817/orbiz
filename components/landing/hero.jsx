"use client";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen md:min-h-0 md:h-128">
      <div className="flex flex-col w-full md:w-1/2 justify-center section-block-top container-padding gap-10">
        <h1 className="fl1">
          Innovation to Execution: Accelerate your Technology Development
        </h1>
        <p className="fl8">
          At Orbiz, we are passionate about helping businesses like yours
          leverage technology to drive growth and improve efficiency. Our team
          of experienced consultants and engineers provide customized IT
          solutions tailored to your specific needs. Let us help you take your
          business to the next level.
        </p>
        <button className="red-btn mt-10">Learn More</button>
      </div>

      <div className="flex flex-col w-full md:w-1/2 relative">
        <img
          src="/landing/top-box.png"
          alt="top-box-image"
          className="absolute top-0 left-26"
        />
        <div className="relative flex flex-row">
            <div className="flex flex-col">
                <img
                    src="/landing/hero1.png"
                    alt="mid-box-left-image"
                    className="absolute top-4 md:top-0 right-43 w-78"
                />
                <img
                    src="/landing/hero2.png"
                    alt="mid-box-right-image"
                    className="absolute top-61 right-75 w-75"
                />
            </div>
            <img
                src="/landing/hero3.png"
                alt="mid-box-image"
                className="absolute right-29 h-109"
            />
        </div>
        <img
            src="/landing/buttom-box.png"
            alt="bottom-box-image"
            className="absolute bottom-0 right-0"
        />
      </div>
    </section>
  );
}
