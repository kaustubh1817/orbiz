import Image from "next/image";
import Hero from '../components/landing/Hero.jsx';
import Ourservices from "../components/landing/Ourservices.jsx"
import Connect from "../components/landing/Connect.jsx"
import Testimonials from "@/components/landing/Testimonials.jsx";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Ourservices />
      <Connect />
      <Testimonials />
    </main>
  );
}
