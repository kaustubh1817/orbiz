"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/map/LeafletMap"), {
  ssr: false,
});
const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});

export default function Contactus() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: "",
  });

 
  const handleFirstName = (e) => {
    let value = e.target.value;
    value = value.replace(/[0-9]/g, ""); 
    setFormData({ ...formData, firstName: value });
  };


  const handleLastName = (e) => {
    let value = e.target.value;
    value = value.replace(/[0-9]/g, ""); 
    setFormData({ ...formData, lastName: value });
  };

 
  const handleEmail = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
  };

  
  const handleCompanyName = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, companyName: value });
  };

  
  const handleMessage = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, message: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");

   
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen section-block-padding md:px-18 2xl:px-18 3xl:px-22 ">
      <p className="fl1 flex justify-center title-content-gap">Contact Us</p>
      <div className="w-full bg-[#f5f5f5]  p-4">
        <div className="w-full flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-16 items-center ">
            <div className="flex flex-col gap-4">
              <h2 className="fl2">Get in touch with us</h2>

              <p className="fl6 max-w-[350px] text-justify ">
                Thank you for your interest in Orbiz. Whether you're a client,
                job seeker, journalist, analyst or investor, you can find the
                best way to contact us below.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="icons/client.svg"
                  className="size-6 md:size-8"
                  alt="client icon"
                />
                <h3 className="fl2">Clients</h3>
              </div>

              <p className="fl6 max-w-[350px] text-justify ">
                Find out more on how we can help you to get the future you want
                in through our industry expertise, services, and technology
                partners.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 pb-4 md:p-10">
            <div className="p-6 md:p-8 bg-white rounded-xs">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={handleFirstName}
                      placeholder="Ex. Amy"
                      className="w-full bg-[#F5F5F5] p-3 fl6"
                    />
                  </div>

                  <div>
                    <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={handleLastName}
                      placeholder="Ex. West"
                      className="w-full bg-[#F5F5F5] p-3 fl6"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleEmail}
                    placeholder="example@gmail.com"
                    className="w-full bg-[#F5F5F5] p-3 fl6"
                  />
                </div>

                <div className="mb-6">
                  <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={handleCompanyName}
                    placeholder="Ex. Orbiz"
                    className="w-full bg-[#F5F5F5] p-3 fl6"
                  />
                </div>

                <div className="mb-8">
                  <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={handleMessage}
                    placeholder="********"
                    className="w-full bg-[#F5F5F5] p-3 fl6 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A2B6D] !text-white py-3 fl3"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block-padding container-padding">
        <div className="container-padding title-content-gap">
          <p className="fl1 flex justify-center">Global contact details</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:min-h-[250px] 3xl:min-h-[300px]">
          <div className="bg-[#1A2B6D] text-white p-10 rounded-[2px] flex flex-col justify-between ">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img src="/icons/mail.svg" className="size-7" alt="Chat Icon" />
                <h3 className="fl2 !text-white">Chat with Us</h3>
              </div>
              <p className="fl6 !text-white">
                Email:&nbsp;
                <a
                  href="mailto:contact@orbiz.one"
                  className="underline fl6 !text-white"
                >
                  contact@orbiz.one
                </a>
              </p>
            </div>
          </div>

          <div className="bg-[#1A2B6D] text-white p-10 rounded-[2px] flex flex-col">
            <div className="">
              <div className="flex items-center gap-4 mb-4">
                <img src="/icons/job.svg" className="size-7" alt="Job Icon" />
                <h3 className="fl2 !text-white">Job Seekers</h3>
              </div>
              <p className="fl6 !text-white text-justify">
                Please refer following link to know more about Orbiz culture and
                career opportunities.
              </p>
            </div>
            <a
              href="/contact"
              className="fl3 w-full pt-10 md:pt-20 flex justify-between items-center text-white gap-2 hover:gap-3 transition-all duration-200 "
            >
              <span>Learn More</span>

              <img
                src="/landing/ourservices/arrow3.svg"
                alt="arrow"
                className="w-6 h-auto !text-white"
              />
            </a>
          </div>

          <div className="bg-[#13296A] text-white p-10 rounded-[2px] flex flex-col">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/icons/location.svg"
                  className="size-7"
                  alt="Location Icon"
                />
                <h3 className="fl2 !text-white">Head Office</h3>
              </div>
              <p className="fl6 !text-white text-justify">
                Orbiz Analytics India Pvt. Ltd. Plot No. 52, Suman Ankur
                complex, Shayadri Farm, Baner Road, Baner, Pune 411045
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-18 2xl:px-18 3xl:px-22">
        <p className="fl1 flex justify-center title-content-gap ">
          Our Location
        </p>
        <LeafletMap />
      </div>
      <BackToTop />
    </main>
  );
}
