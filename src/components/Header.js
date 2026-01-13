/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import NavMobile from "./NavMobile";

const Header = () => {
    const [bg, setBg] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const bgStyle = bg ? "bg-primary py-4 lg:py-6 shadow-md" : "bg-none";
    const mobileNavMenu = mobileNav ? <CgClose /> : <CgMenuRight />;
    const mobileNavMenuStyle = mobileNav ? "left-0" : "-left-full";

    const navItems = navigation.map((item, index) => {
        // VentureMond Fix: Ensure href starts with # for smooth scroll
        const targetId = item.href.startsWith('#') ? item.href : `#${item.name.toLowerCase()}`;
        
        return (
            <li key={index}>
                <a
                    href={targetId}
                    className={`text-white capitalize hover:text-accent border-b border-transparent hover:border-accent transition-all duration-300 pb-1`}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setBg(true) : setBg(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className={`${bgStyle} fixed w-full left-0 py-8 z-50 transition-all duration-300`}
        >
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    <a href='#home'>
                        <img src={Logo} alt='VentureMond Logo' className='h-6 lg:h-8' />
                    </a>
                    
                    <div
                        onClick={() => setMobileNav(!mobileNav)}
                        className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer z-50'
                    >
                        {mobileNavMenu}
                    </div>

                    {/* Nav Desktop + Tablet */}
                    <nav className='hidden md:flex'>
                        <ul className='flex md:gap-x-12'>{navItems}</ul>
                    </nav>

                    {/* Nav Mobile */}
                    <div
                        className={`${mobileNavMenuStyle} md:hidden fixed top-0 bottom-0 w-full max-w-xs h-screen transition-all duration-300 z-40 bg-primary`}
                    >
                        <NavMobile setMobileNav={setMobileNav} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;