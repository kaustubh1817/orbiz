import React from 'react';

const TestimonialCard = () => {
    return (
        <div className="bg-white rounded-[4px] px-4 sm:px-10 py-5 flex flex-col-reverse sm:flex-col gap-3 sm:gap-5 lg:gap-10">
            <div className="flex gap-3 sm:gap-5 items-center flex-col sm:flex-row">

                <p className="fl8 text-center sm:text-left">
                    "Orbiz Analytics proved to be the right choice from the start, exceeding expectations with unparalleled dedication and expertise during a critical period. Their strategic thinking, coupled with deep technical proficiency, transformed them into true partners, improving efficiency, addressing bottlenecks, and enhancing our software architecture for long-term resilience. Highly recommended for top-notch software development services, Orbiz Analytics catalyzed a broader shift in our approach towards technology and innovation.".{' '}
                </p>
            </div>
            <div className="flex flex-row">
                <div className='flex gap-3 items-center flex-col sm:flex-row'>
                    <img
                        src="\images\user1.svg"
                        alt="user"
                        className="size-[30px] md:size-[40px] xl:size-[50px] rounded-full mx-auto sm:mx-[unset]"
                    />
                    <div className="text-center sm:text-left">

                        <h5 className="fl3 !text-[#1A2B6D] my-1">
                            Arvind Sharma
                        </h5>
                        <p className="fl8">Ex CTO, BQE</p>
                    </div>
                </div>
                <img
                    src="\images\mark1.png"
                    alt="user" className='hidden sm:flex ml-auto w-6 h-6 md:w-8 md:h-8 lg:w-20 lg:h-20'>

                </img>

            </div>
        </div>
    );
};

export default TestimonialCard;
