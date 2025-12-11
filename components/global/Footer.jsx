"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import socialLinks from "../../data/socialLink";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "applicatin/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("✓ Successfully subscribed!");
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="flex flex-col">
      <section className="!bg-[#1A2B6D] w-full flex flex-col gap-8 text-center section-block-padding">
        <div className="max-w-[715px]  text-center flex flex-col mx-auto gap-8">
          <h2 className="fl2 !text-white px-10 md:px-0">
            Subscribe to our newsletter to get updates to our latest collections
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="md:w-full w-75 mx-auto bg-white p-2"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:max-h-16">
              <div className="flex flex-row items-center">
                <div className="size-4 md:size-6.5 flex justify-center items-center">
                  <img
                    src="/landing/email.png"
                    alt="email"
                    className="w-full h-auto flex-shrink-0"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-6 md:py-0 outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="nav-active-text px-8 py-3"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {message && (
              <p
                className={`message ${
                  message.includes("") ? "success" : "error"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-white section-block-padding container-padding ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="w-40">
              <Link href="/" className="flex items-center">
                <Image
                  src="/orbiz_logo.png"
                  alt="Orbiz"
                  width={90}
                  height={45}
                />
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group hover:opacity-90 transition-opacity duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="size-6 hover:scale-101 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-row md:justify-between gap-50 md:gap-0 sm:gap-0">
            <div className="flex flex-col gap-3 justify-center items-center">
              <h4 className="fl5 mb-0 md:mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="fl4 hover:text-blue-600">
                    Our services
                  </a>
                </li>
                <li>
                  <a href="/about" className="fl4 hover:text-blue-600">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="/careers" className="fl4 hover:text-blue-600">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center ">
              <h4 className="fl5 mb-0 md:mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="fl4 hover:text-blue-600">
                    Accelerate
                  </a>
                </li>
                <li>
                  <a href="/about" className="fl4 hover:text-blue-600">
                    Transform
                  </a>
                </li>
                <li>
                  <a href="/about" className="fl4 hover:text-blue-600">
                    Innovate
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center ">
            <h4 className="fl5 mb-0 md:mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@orbiz.one" className="fl4">
                  contact@orbiz.one
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-[#1A2B6D1F]"></div>

      <div className="container-padding py-2 md:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          <p className="fl4">All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-10">
            <a href="/terms" className="fl4 ">
              Terms of Services
            </a>
            <a href="/cookies" className="fl4 ">
              Cookie Policy
            </a>
            <a href="/privacy" className="fl4 ">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
