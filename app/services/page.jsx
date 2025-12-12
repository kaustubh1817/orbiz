import Ourservices from "../../components/ourservices/Ourservices"; 

export const metadata = {
  title: 'Service | Orbiz',
  description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
  openGraph: {
    title: 'Service | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    url: 'https://orbiz-sigma.vercel.app/services',
    siteName: 'Orbiz',
    images: [
      {
        url: '/images/service9.png',
        width: 1200,
        height: 630,
        alt: 'Service | Orbiz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    images: ['/images/service9.png'],
  },
};

export default function OurServicesPage() {
    return <Ourservices />;
}