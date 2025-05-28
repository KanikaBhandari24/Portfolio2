import React, { useState, useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Animate navbar with a delay of 1.5 seconds on mount
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="dm-sans w-full top-0 left-0 z-50 bg-white shadow-md"
      style={{ opacity: 0 }} // start hidden (optional, since GSAP sets initial)
    >
      <div className="flex justify-between items-center px-6 md:px-20 py-6">
        {/* Logo */}
        <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
          <span className="text-green-600">Kanika</span> - Portfolio
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold items-center">
          <li className="cursor-pointer hover:underline">About Me</li>
          <a className="cursor-pointer hover:underline" href="#skills">
            Skills
          </a>
          <a className="cursor-pointer hover:underline" href="#project">
            Project
          </a>
          <a className="cursor-pointer hover:underline" href="#contact">
            Contact Me
          </a>
        </ul>

        {/* Resume Button */}
        <a
          className="hidden md:flex px-5 py-2.5 rounded-lg bg-black text-white font-semibold cursor-pointer hover:bg-green-600 items-center"
          href="/Kanika Bhandari.pdf"
          download="Kanika Bhandari-Resume.pdf"
        >
          Resume <BsDownload className="ml-2" size={18} />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-semibold bg-white shadow-md">
          <li className="cursor-pointer hover:underline">About Me</li>
          <a className="cursor-pointer hover:underline" href="#skills">
            Skills
          </a>
          <a className="cursor-pointer hover:underline" href="#project">
            Project
          </a>
          <a className="cursor-pointer hover:underline" href="#contact">
            Contact Me
          </a>
          <a
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-black text-white font-semibold hover:bg-green-600"
            href="/Kanika Bhandari.pdf"
            download="Kanika Bhandari-Resume.pdf"
          >
            Resume <BsDownload size={18} />
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
