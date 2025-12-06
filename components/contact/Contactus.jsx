export default function Contactus() {
    return (
        <main className="min-h-screen">
            <div className="container-padding section-block-padding">
                <p className="fl1 flex justify-center">Contact Us</p>
            </div>
            <div className="container-padding section-block-bottom ">
                <div className="w-full bg-[#f5f5f5] ">
                    <div className="w-full flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-[40%] flex flex-col gap-12  py-8 items-center ">


                            <div className="flex flex-col gap-4 md:mt-15">
                                <h2 className="fl1">Get in touch with us</h2>

                                <p className="fl8 max-w-[350px] ">
                                    Thank you for your interest in Orbiz. Whether you’re a
                                    client, job seeker, journalist, analyst or investor,
                                    you can find the best way to contact us below.
                                </p>
                            </div>


                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="icons/client.svg"
                                        className="w-8 h-8"
                                        alt="client icon"
                                    />
                                    <h3 className="fl1">Clients</h3>
                                </div>

                                <p className="fl8 max-w-[350px] ">
                                    Find out more on how we can help you to get
                                    the future you want in through our industry
                                    expertise, services, and technology partners.
                                </p>
                            </div>

                        </div>




                        <div className="w-full   md:w-[60%]  md:p-10">
                            <div className=" p-8 bg-white ">
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="First Name *"
                                        className="w-full bg-[#f5f5f5] p-3"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name *"
                                        className="w-full bg-[#f5f5f5] p-3"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Id *"
                                    className="w-full bg-[#f5f5f5] p-3 mb-4 "
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full  mb-4 bg-[#f5f5f5] p-3"
                                />
                                <textarea
                                    rows={5}
                                    placeholder="Message"
                                    className="w-full  mb-6 bg-[#f5f5f5] p-3"
                                ></textarea>
                                <button className="w-full fl3 bg-[#1A2B6D] !text-white py-3 ">
                                    Send
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-padding section-block-bottom">
                <p className="fl1 flex justify-center">Global contact details</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
                <div className="bg-[#1A2B6D]  p-8 ">
                    <p className="flex items-center"><img src="\icons\mail.svg" className="w-10 h-10" alt="Chat Icon" />
                        <span className=" fl1 !text-white  ">Chat WIth US</span></p>

                    <p className="fl8 !text-white">
                        Email: <a href="mailto:contact@orbiz.one" className="underline">contact@orbiz.one</a>
                    </p>
                </div>

                <div className="bg-[#13296A] text-white p-8 rounded-md flex flex-col gap-4 relative">
                    <img src="\icons\job.svg" className="w-10 h-10" alt="Job Icon" />
                    <h3 className="text-xl font-semibold">Job Seekers</h3>

                    <p className="text-sm leading-relaxed">
                        Please refer following link to know
                        more about Orbiz culture and career
                        opportunities.
                    </p>

                    <div className="mt-4">
                        <button className="text-sm font-medium flex items-center gap-2">
                            Learn More
                            <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
                <div className="bg-[#13296A] text-white p-8 rounded-md flex flex-col gap-4">
                    <img src="\icons\location2.svg" className="w-10 h-10" alt="Location Icon" />
                    <h3 className="fl1 !text-white">Head Office</h3>

                    <p className="fl8 !text-white">
                        Orbiz Analytics India Pvt. Ltd.<br />
                        Plot No. 52, Suman Ankur complex,<br />
                        Shayadri Farm, Baner Road, Baner<br />
                        Pune 411045
                    </p>
                </div>
            </div>

        </main>

    );
}