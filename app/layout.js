import "./globals.css";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";

export const metadata = {
  title: 'Orbiz',
  description:
    'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
  alternates: {
    canonical: 'https://orbiz-sigma.vercel.app/',
  },
  openGraph: {
    title: 'Orbiz',
    description:
      'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    url: 'https://orbiz-sigma.vercel.app/',
    siteName: 'Orbiz',
    images: [
      {
        url: '/images/service9.png',
        width: 1200,
        height: 630,
        alt: 'Orbiz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbiz',
    description:
      'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    images: ['/images/service9.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/orbiz_logo.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://orbiz-sigma.vercel.app/#website',
              url: 'https://orbiz-sigma.vercel.app',
              name: 'Orbiz',
              publisher: {
                '@id': 'https://orbiz-sigma.vercel.app/#organization',
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'Home',
                  url: 'https://orbiz-sigma.vercel.app/',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Services',
                  url: 'https://orbiz-sigma.vercel.app/services',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'About',
                  url: 'https://orbiz-sigma.vercel.app/about',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Careers',
                  url: 'https://orbiz-sigma.vercel.app/careers',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Company Registration',
                  url: 'https://orbiz-sigma.vercel.app/company_registration',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 6,
                  name: 'Contact',
                  url: 'https://orbiz-sigma.vercel.app/contact',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <div className="md:pt-23 pt-16 min-h-screen">
          {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
