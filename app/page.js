import Image from "next/image";
import Herov2 from "@/components/landing/HeroV2.jsx";
import Ourservices from "../components/landing/Ourservices.jsx"
import Connect from "../components/landing/Connect.jsx"
import BackToTop from "@/components/BackToTop";
import TestimonialV2 from "@/components/landing/TestimonialV2.jsx";
import Launching from "@/components/landing/Launching.jsx";

export const metadata = {
  title: 'Home | Orbiz',
  description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
  openGraph: {
    title: 'Home | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    url: 'https://orbiz-sigma.vercel.app/',
    siteName: 'Orbiz',
    images: [
      {
        url: '/images/service9.png',
        width: 1200,
        height: 630,
        alt: 'Home | Orbiz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    images: ['/images/service9.png'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Herov2 />
      {/* <Launching /> */}
      <Ourservices />
      <Connect />
      <TestimonialV2 />
      <BackToTop />
    </main>
  );
}
