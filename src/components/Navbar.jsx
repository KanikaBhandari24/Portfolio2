import React from "react";
import { BsDownload } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="dm-sans flex justify-between items-center px-20 py-10">
      <h2 className="text-lg font-bold">
        <span className="text-2xl">Kanika</span> - Portfolio
      </h2>
      <ul className="flex gap-8 font-semibold">
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
      <a
        className="px-5 py-2.5 flex rounded-lg bg-black text-white font-semibold cursor-pointer hover:bg-green-600"
        href="/Kanika Bhandari.pdf"
        download="Resume.pdf"
      >
        Resume
        <div className="px-2 py-1">
          <BsDownload size={18} />
        </div>
      </a>
    </div>
  );
};

export default Navbar;
