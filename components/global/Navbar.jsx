"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";


export default function Navbar(){

    const pathname = usePathname();
    const router = useRouter();

    const [activeLink , setActiveLink ] = useState("Home");

    const navItems = [
        { name: 'Home', href: '/'},
        { name: 'Our services', href: '/services' },
        { name: 'Who we are', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
    ];

    useEffect(() => {
        if(pathname === "/"){ setActiveLink("Home"); }
        else if(pathname === "/services"){ setActiveLink("Our services"); }
        else if(pathname === "/about"){ setActiveLink("Who we are"); }
        else if(pathname === "/careers"){ setActiveLink("Careers"); }
        else if(pathname === "/contact"){ setActiveLink("Contact Us"); }
    },[pathname]);

    const handleNavClick = (item) => {
        setActiveLink(item.name);
        router.push(item.href);
    }

    return(
        <nav className="w-full md:h-[94px] bg-[#F5F5F5] z-50 flex justify-between  items-center container-padding">
              <div>
                    <Link href="/" className="flex items-center">
                    <Image
                        src="/orbiz_logo.png"
                        alt="Company Logo"
                        width={120}
                        height={60}
                    />
                    </Link>
                </div>
                <div className="flex gap-8 item-center">
                    {navItems.map((item) => (
                            <button
                            key={item.name}
                            onClick={() => handleNavClick(item)}
                            className={`${
                    activeLink === item.name 
                      ? 'nav-active-text px-4 py-2'
                      : 'nav-text'
                  }`}>
                                {item.name}
                            </button>
                        ))}

                </div>
        </nav>
    );
}