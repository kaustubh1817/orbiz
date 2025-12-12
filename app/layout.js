import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
