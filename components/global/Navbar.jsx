"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar(){

    const [activeLink , setActiveLink ] = useState("Home");

    const navItems = [
        { name: 'Home', href: '/'},
        { name: 'Our services', href: '/services' },
        { name: 'Who we are', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
    ]

    return(
        <nav className="w-full md:h-[94px] bg-[#F5F5F5] z-50">
            <div className="flex items-center justify-between md:px-14 px-8 py-4 mx-auto">
                
                <div>
                    <Link href="/" className="flex items-center">
                    <Image
                        src="/orbiz_logo.png"
                        alt="Company Logo"
                        width={120}
                        height={66}
                    />
                    </Link>
                </div>
                <div className="flex gap-8 item-center">
                    {navItems.map((item) => (
                            <button
                            key={item.name}
                            onClick={() => setActiveLink(item.name)}
                            className={`${
                    activeLink === item.name 
                      ? 'bg-[#1A2B6D] text-white px-4 py-2'
                      : 'text-[#1A2B6D]'
                  }`}>
                                {item.name}
                            </button>
                        ))}

                </div>
            </div>
        </nav>
    );
}