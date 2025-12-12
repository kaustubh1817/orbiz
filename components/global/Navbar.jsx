"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";


export default function Navbar() {

    const pathname = usePathname();
    const router = useRouter();

    const [activeLink, setActiveLink] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Our services', href: '/services' },
        { name: 'Who we are', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
    ];

    useEffect(() => {
        if (pathname === "/") { setActiveLink("Home"); }
        else if (pathname === "/services") { setActiveLink("Our services"); }
        else if (pathname === "/about") { setActiveLink("Who we are"); }
        else if (pathname === "/careers") { setActiveLink("Careers"); }
        else if (pathname === "/contact") { setActiveLink("Contact Us"); }
        setMenuOpen(false);
    }, [pathname]);

    const handleNavClick = (item) => {
        setActiveLink(item.name);
        router.push(item.href);
    }

    return (
        <nav className="w-full lg:h-[94px] bg-[#F5F5F5] py-3 fixed top-0 z-[10000] left-1/2 -translate-x-1/2 flex justify-between md:rounded-none items-center container-padding ">
            <div>
                <Link href="/" className="flex items-center">
                    <Image
                        src="/orbiz_logo.png"
                        alt="Orbiz"
                        width={100}
                        height={50}
                        className="hidden md:block"
                    />
                     <Image
                        src="/orbiz_logo.png"
                        alt="Orbiz"
                        width={80}
                        height={40}
                        className="md:hidden block"
                    />
                </Link>
            </div>

            <div className="hidden lg:flex gap-8 item-center ">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`${activeLink === item.name
                            ? 'nav-active-text px-4 py-2'
                            : 'nav-text'
                            }`}>
                        {item.name}
                    </button>
                ))}

            </div>
            <button
                className="lg:hidden flex flex-col gap-1"
                onClick={() => setMenuOpen(!menuOpen)}>

                <span className="block w-6 h-0.5 bg-[#1A2B6D]"></span>
                <span className="block w-6 h-0.5 bg-[#1A2B6D]"></span>
                <span className="block w-6 h-0.5 bg-[#1A2B6D]"></span>
            </button>

            <div
                className={`
                    absolute left-0 top-16 w-full lg:hidden bg-[#00000015] backdrop-blur-[12px] rounded-b-[10px] flex flex-col gap-4 py-6 px-8 transition-all duration-300 origin-top
                    ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
                `}
            >
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`
                            w-full text-left text-lg py-2
                            transition-all duration-200
                            ${activeLink === item.name
                                ? "text-[#1A2B6D] text-[12px] md:text-[18px] font-poppins-medium"
                                : "text-[#000000] text-[12px] md:text-[18px] font-poppins-medium"
                            }
                        `}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </nav>
    );
}
