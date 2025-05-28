import React, { useEffect, useRef } from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 flex items-center"
      style={{ opacity: 0 }} // optional, GSAP sets initial anyway
    >
      <div>
        {/* Heading */}
        <h1 className="capitalize special-gothic text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-full md:max-w-[80%] lg:max-w-[50%]">
          hello i'm kanika bhandari. frontend developer based in india.
        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base dm-sans max-w-full md:max-w-[80%] lg:max-w-[43%]">
          A passionate Frontend Developer with 1.5 years of experience. Currently,
          I'm diving deep into the world of animations, exploring creative tools
          and techniques to bring life to websites. My goal is to specialize in
          building engaging, interactive, and animated web experiences. As I
          continue to expand my skills, I'm also gearing up to explore backend
          development.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6 sm:mt-8 md:mt-10">
          <a
            href="https://x.com/Kanikaa78"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-600 transition"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href="https://github.com/KanikaBhandari24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-green-600 transition"
          >
            <BsGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/kanika-bhandari-001k/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-600 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:kanikabhandari78@gmail.com"
            aria-label="Gmail"
            className="hover:text-green-600 transition"
          >
            <BiLogoGmail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
