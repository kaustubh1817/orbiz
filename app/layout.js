import "./globals.css";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/orbiz_logo.ico" />
      </head>
      <body>
        <Navbar />
        <div className="md:pt-23 pt-16">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
