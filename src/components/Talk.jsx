import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";

const Talk = () => {
  return (
    <div className="w-full h-screen dm-sans" id="contact">
    <div className="flex px-20 py-30">
      <div>
        <form action="" className="max-w-[50%]">
          <input
            type="text"
            placeholder="Your name"
            className="border-2 rounded-lg pr-61 pl-5 py-3"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="border-2 rounded-lg pr-61 py-3 pl-5 mt-4"
          />
          <input
            type="text"
            placeholder="Your website (If exists)"
            className="border-2 rounded-lg pr-61 pl-5 py-3 mt-4"
          />
          <textarea
            type="text"
            placeholder="How can I help?"
            className="border-2 rounded-lg pr-60 pl-5 py-3 mt-4"
          />
        </form>
        <div className="flex gap-5 mt-10 cursor-pointer items-center">
          <button className="text-white bg-black px-5 py-3 text-lg rounded-lg font-semibold hover:bg-gray-800 cursor-pointer flex items-center">Get In Touch
            <div className="ml-2"><FaArrowCircleRight size={20} /></div>
          </button>
          <FaXTwitter size={30} />
          <BsGithub size={30} />
          <FaLinkedin size={30} />
          <BiLogoGmail size={30} />
        </div>
      </div>

      <div className="">
        <h1 className="special-gothic text-6xl tracking-tight">Let's talk for something special</h1>
        <p className="text-gray-500 mt-10 max-w-[90%]">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <h2 className="mt-10 text-xl font-bold">k.anikabhandari2417@gmail.com</h2>
      </div>
      
    </div>
    <footer className="bg-black py-15.5 text-white px-20 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Kanika - Portfolio</h1>
      <h2 className="text-2xl font-semibold">2025</h2>
    </footer>
    </div>
  );
};

export default Talk;
