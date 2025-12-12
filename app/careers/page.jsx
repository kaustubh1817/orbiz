import Careers from "@/components/careers/Careers";

export const metadata = {
  title: 'Careers | Orbiz',
  description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
  openGraph: {
    title: 'Careers | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    url: 'https://orbiz-sigma.vercel.app/careers',
    siteName: 'Orbiz',
    images: [
      {
        url: '/images/service9.png',
        width: 1200,
        height: 630,
        alt: 'Careers | Orbiz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    images: ['/images/service9.png'],
  },
};

export default function careers(){
    return <Careers />
    
}