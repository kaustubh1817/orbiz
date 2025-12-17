"use client";

import { useState } from "react";

export default function Launching() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleNotify = async (e) => {
    e.preventDefault();

    // Validation
    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("✓ You'll be notified when we launch!");
        setMessageType("success");
        setEmail("");
      } else {
        const error = await response.json();
        setMessage(error.message || "Failed to notify. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="section-block-padding flex flex-col justify-center align-center max-h-screen  bg-[url('/landing/launching-bg-mobilev2.png')]
    md:bg-[url('/landing/launching-bg2.png')]
    bg-cover
    bg-no-repeat
    bg-center"
    >

      <div className="flex flex-col justify-center align-center mt-40 md:mt-0">
      <h1 className="text-[40px] md:text-[56px] font-poppins-semibold text-[#1A2B6D] text-center title-content-gap">
        Launching Soon
      </h1>

      <p className="text-[16px] md:text-[28px] font-poppins-light text-[#1A2B6D] text-center">
        We are excited to introduce you to the <br />
        <span className="font-poppins-bold">AI & Machine Learning </span>
        <br className="block md:hidden" />
        service we are launching!
      </p>

      <div className="flex flex-col justify-center items-center section-block-padding mt-10 md:mt-0">
        <div className="flex justify-between w-1/2 items-center">
          <p className="text-[12px] md:text-[18px] font-poppins-light text-[#1A2B6D] md:-mb-10 ">
            Stay connected and be the first to know.
          </p>
          <img
            src="/landing/notify.png"
            alt="notify"
            className="size-18 md:size-30  md:-mb-5 -mb-3"
          />
        </div>

        <form
          onSubmit={handleNotify}
          className="w-1/2 mx-auto bg-white p-2 shadow-no-top"
          style={{
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:max-h-16">
            {/* Email Input */}
            <div className="flex flex-row items-center md:pl-5 pl-4">
              <div className="size-6 md:size-6.5 flex justify-center items-center flex-shrink-0">
                <img
                  src="/landing/email.png"
                  alt="email icon"
                  className="w-full h-auto"
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-3 py-4 md:py-0 outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="nav-active-text px-8 py-3 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Notifying..." : "Notify"}
            </button>
          </div>

          {/* {message && (
            <p
              className={`mt-3 px-4 py-2 text-center text-sm font-medium rounded ${
                messageType === "success"
              }`}
            >
              {message}
            </p>
          )} */}
        </form>
      </div>
       </div>
    </section>
  );
}
