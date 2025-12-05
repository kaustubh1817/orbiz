import Image from "next/image";
import Hero from '../components/landing/Hero.jsx';
import Ourservices from "../components/landing/Ourservices.jsx"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Ourservices />
    </main>
  );
}
