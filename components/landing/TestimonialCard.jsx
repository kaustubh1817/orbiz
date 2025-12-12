import React from 'react';

const TestimonialCard = () => {
    return (
        <div className="bg-white rounded-[2px] px-4 sm:px-10 py-5 flex flex-col gap-3 sm:gap-5 lg:gap-8">
            <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">

                <p className="fl6 text-left md:text-justify p-2 sm:p-6">
                    "Orbiz Analytics proved to be the right choice from the start, exceeding expectations with unparalleled dedication and expertise during a critical period. Their strategic thinking, coupled with deep technical proficiency, transformed them into true partners, improving efficiency, addressing bottlenecks, and enhancing our software architecture for long-term resilience. Highly recommended for top-notch software development services, Orbiz Analytics catalyzed a broader shift in our approach towards technology and innovation.".{' '}
                </p>
            </div>
            <div className="flex flex-row">
                <div className='flex gap-5 items-center flex-row md:pl-6'>
                    <img
                        src="\images\user1.svg"
                        alt="user"
                        className="size-[40px] md:size-[40px] xl:size-[50px] rounded-full mx-auto sm:mx-[6px]"
                    />
                    <div className="text-left">
                        <h5 className="fl3 text-[#1A2B6D] md:my-1">
                            Arvind Sharma
                        </h5>
                        <p className="fl4">Ex CTO, BQE</p>
                    </div>
                </div>
                <img
                    src="\images\mark1.png"
                    alt="user" className='hidden sm:flex ml-auto size-6 md:w-24 md:h-20 lg:w-40 lg:h-30'>

                </img>

            </div>
        </div>
    );
};

export default TestimonialCard;
