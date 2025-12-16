"use client";

import { useState } from "react";
import Image from "next/image";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Carousel3D from "./Carousel3D";
import BackToTop from "@/components/BackToTop";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const positionOptions = [
  { value: "developer", label: "Developer" },
  { value: "qa", label: "QA Engineer" },
  { value: "intern", label: "Intern" },
  { value: "architect", label: "Architect" },
  { value: "db-architect", label: "DB Architect" },
  { value: "db-developer", label: "DB Developer" },
  { value: "hr", label: "HR" },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: null,
    email: "",
    phone: "",
    position: null,
    startDate: null,
    resumeLink: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

  const handlePhone = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9+]/g, "");
    value = value.slice(0, 14);
    setFormData({ ...formData, phone: value });
  };

  const handleDOB = (date) => {
    setFormData({ ...formData, dob: date });
  };

  const handlePosition = (selectedOption) => {
    setFormData({ ...formData, position: selectedOption });
  };

  const handleStartDate = (date) => {
    setFormData({ ...formData, startDate: date });
  };

  const handleResumeLink = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, resumeLink: value });
  };

  // Validate all fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Minimum 10 digits required";
    }
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }
    if (!formData.position) {
      newErrors.position = "Please select a position";
    }
    if (!formData.resumeLink.trim()) {
      newErrors.resumeLink = "Resume link is required";
    } else if (
      !formData.resumeLink.startsWith("http://") &&
      !formData.resumeLink.startsWith("https://")
    ) {
      newErrors.resumeLink = "URL must start with http:// or https://";
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        dob: null,
        email: "",
        phone: "",
        position: null,
        startDate: null,
        resumeLink: "",
      });
      setErrors({});
      setSubmitted(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <main className="min-h-screen section-block-top">
      <p className="fl1 text-center mx-auto title-content-gap md:w-1/2 w-full">
        Orbiz: Where Passion Meets Progress
      </p>

      <p className="fl4 text-justify mx-auto md:w-[90%] w-full container-padding title-content-gap">
        We highly appreciate individuals who excel in the face of challenges and
        demonstrate a capacity to identify opportunities amid transformations.
        If you possess a fervent enthusiasm for technology and exhibit an
        unwavering commitment to continuous learning, adaptability, and personal
        development, we are interested in your candidacy. At Orbiz, we
        acknowledge the pivotal role individuals like yourself play in
        instigating transformative shifts in established practices, underscoring
        their indispensability to our success. If you are motivated to
        contribute to the development of pioneering products and are committed
        to delivering significant value in response to users' requirements,
        Orbiz offers an ideal professional milieu for your aspirations.
      </p>

      <div className="w-full flex flex-col md:flex-row gap-10 md:px-18 2xl:px-18 3xl:px-22 section-block-padding">
        <div className="flex flex-col w-full md:w-1/2 relative justify-center container-padding">
          <img
            src="/landing/careers4.png"
            alt="Background Shape"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="bg-white md:w-1/2 w-full">
          <div className="bg-[#F5F5F5] py-4 md:p-10">
            <div className="mx-4 md:mx-0">
              <p className="fl1 text-center title-content-gap">
                Join us on this exciting journey
              </p>

              <form onSubmit={handleSubmit}>
                <div className="p-6 md:p-8 bg-white rounded-[2px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* First Name */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={handleFirstName}
                        placeholder="Ex. Amy"
                        className={`w-full bg-[#F5F5F5] p-3 fl6 placeholder-style border-2 transition ${
                          submitted && errors.firstName
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {submitted && errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={handleLastName}
                        placeholder="Ex. West"
                        className={`w-full bg-[#F5F5F5] p-3 fl6 placeholder-style border-2 transition ${
                          submitted && errors.lastName
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {submitted && errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        Date of Birth *
                      </label>
                      <DatePicker
                        selected={formData.dob}
                        onChange={handleDOB}
                        placeholderText="DD/MM/YYYY"
                        dateFormat="dd/MM/yyyy"
                        className={`w-full bg-[#F5F5F5] p-3 fl6 placeholder-style border-2 transition ${
                          submitted && errors.dob
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                        wrapperClassName="w-full datepicker-wrapper"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                      {submitted && errors.dob && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.dob}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleEmail}
                        placeholder="example@gmail.com"
                        className={`w-full bg-[#F5F5F5] p-3 fl6 placeholder-style border-2 transition ${
                          submitted && errors.email
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {submitted && errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        Contact Number *
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={handlePhone}
                        placeholder="Ex. +91XXXXXXXXXX"
                        maxLength="14"
                        className={`w-full bg-[#F5F5F5] p-3 fl6 placeholder-style border-2 transition ${
                          submitted && errors.phone
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {submitted && errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Position */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        Position Applying for *
                      </label>
                      <Select
                        options={positionOptions}
                        value={formData.position}
                        onChange={handlePosition}
                        placeholder="Select"
                        classNamePrefix="react-select"
                      />
                      {submitted && errors.position && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.position}
                        </p>
                      )}
                    </div>

                    {/* Start Date */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        Available Start Date
                      </label>
                      <DatePicker
                        selected={formData.startDate}
                        onChange={handleStartDate}
                        placeholderText="DD/MM/YYYY"
                        dateFormat="dd/MM/yyyy"
                        className="w-full bg-[#F5F5F5] p-3 fl6 placeholder-style border-2 border-transparent"
                        wrapperClassName="w-full datepicker-wrapper"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    </div>

                    {/* Resume Link */}
                    <div>
                      <label className="fl4 text-[#1A2B6DCC] mb-2 block">
                        Resume Link *
                      </label>
                      <input
                        type="text"
                        value={formData.resumeLink}
                        onChange={handleResumeLink}
                        placeholder="https://drive.google.com/..."
                        className={`w-full bg-[#F5F5F5] p-3 fl6 placeholder-style border-2 transition ${
                          submitted && errors.resumeLink
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                      />
                      {submitted && errors.resumeLink && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.resumeLink}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-8 bg-[#1A2B6D] !text-white py-3 fl3 hover:bg-[#142145] transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Carousel3D />
      <BackToTop />
    </main>
  );
}
