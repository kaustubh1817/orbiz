import dynamic from "next/dynamic";

const Contactus =  dynamic(() => import("@/components/contact/Contactus"), { ssr: false });

export const metadata = {
  title: 'Contact | Orbiz',
  description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
  openGraph: {
    title: 'Contact | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    url: 'https://orbiz.in/Contact',
    siteName: 'Orbiz',
    images: [
      {
        url: '/service9.png',
        width: 1200,
        height: 630,
        alt: 'Contact | Orbiz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    images: ['/service9.png'],
  },
};

export default function Contact(){
    return<Contactus />
}