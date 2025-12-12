import Whoweare from "@/components/whoweare/Whoweare";

export const metadata = {
  title: 'About Us | Orbiz',
  description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
  openGraph: {
    title: 'About Us | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    url: 'https://orbiz-sigma.vercel.app/about',
    siteName: 'Orbiz',
    images: [
      {
        url: '/images/service9.png',
        width: 1200,
        height: 630,
        alt: 'About Us | Orbiz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    images: ['/images/service9.png'],
  },
};


export default function About(){
    return<Whoweare />;
}