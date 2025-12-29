"use client";

import { useState } from "react";

export default function Scale_up() {
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
    <section className="min-h-screen sm:min-h-auto flex flex-col justify-center items-center md:mt-8 bg-[url('/landing/launching-bg-mobilev3.webp')] md:bg-contain bg-no-repeat bg-center sm:bg-cover md:bg-[url('/landing/launching-bg2.png')]">
      
        <h1 className="fl1 text-center title-content-gap">
          Scale-up or Lean-up?
        </h1>

        <div className="py-3 md:py-5">
            <img
              src="/scale_up/scale-pop.webp"
              alt="scale up"
              className="size-25 md:size-40"
            />
        </div>
         <p className="fl5 text-center w-[60vw] md:w-[47vw]">
          One protects your assets; the other attracts millions in funding. Do you know which is which?
        </p>

        <a href="/company_registration" className="red-btn mt-8 md:mt-10 mx-auto md:mx-0">
            Learn More
          </a>
      
    </section>
  );
}
