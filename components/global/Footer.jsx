"use client";

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
        <div className="max-w-[80%]  text-center flex flex-col mx-auto gap-8">
          <h2 className="fl4 text-white">
            Subscribe to our newsletter to get updates to our latest collections
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="md:w-150 w-75 mx-auto bg-white p-3"
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-row items-center">
                <img
                  src="/landing/email.png"
                  alt="email"
                  className="h-6 w-8 pl-2 flex-shrink-0"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="nav-active-text px-8 py-2"
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

      <section className="bg-white section-block-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 ">
            <div className="lg:col-span-1 flex flex-col gap-5">
              <div className="w-40">
                <img
                  src="/orbiz_logo.png"
                  alt="ORBiZ"
                  className="w-full h-auto"
                />
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
                      className="h-8 w-8 hover:scale-101 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="fl1">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="fl8">
                    Our services
                  </a>
                </li>
                <li>
                  <a href="/about" className="fl8">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="/career" className="fl8">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="fl1">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/accelerate" className="fl8">
                    Accelerate
                  </a>
                </li>
                <li>
                  <a href="/transform" className="fl8">
                    Transform
                  </a>
                </li>
                <li>
                  <a href="/innovate" className="fl8">
                    Innovate
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="fl1">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/mailto:contact@orbiz.one" className="fl8">
                    support@orbiz.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-[#1A2B6D1F]"></div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 container-padding h-10 ">
        <p className="fl8">All rights reserved.</p>
        <a href="/terms" className="fl8">
          Terms of Services
        </a>
        <a href="/cookies" className="fl8">
          Cookie Policy
        </a>
        <a href="/privacy" className="fl8">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
