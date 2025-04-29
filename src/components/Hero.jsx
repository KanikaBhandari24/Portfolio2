import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
const Hero = () => {
  return (
    <div className="w-full h-full px-20 py-25">
      <div>
        <h1 className="capitalize special-gothic text-5xl max-w-[50%] tracking-tight">
          hello i'm kanika bhandari. frontend developer based in india.
        </h1>
        <p className="mt-10 dm-sans max-w-[43%] text-sm">
          A passionate Frontend Developer with 1.5 years of experience.
          Currently, I'm diving deep into the world of animations, exploring
          creative tools and techniques to bring life to websites. My goal is to
          specialize in building engaging, interactive, and animated web
          experiences. As I continue to expand my skills, I'm also gearing up to
          explore backend development.
        </p>
        <div className="flex gap-5 mt-10 cursor-pointer">
          <a href="https://x.com/Kanikaa78">
            <FaXTwitter size={30} />
          </a>
          <a href="https://github.com/KanikaBhandari24">
            <BsGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/kanika-bhandari-001k/">
            <FaLinkedin size={30} />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <BiLogoGmail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
