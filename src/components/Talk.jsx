import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";

const Talk = () => {
  return (
    <div className="w-full h-full dm-sans" id="contact">
      <div className="flex flex-col lg:flex-row px-5 lg:px-20 py-30 gap-10">
        <div className="w-full lg:w-1/2">
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Your name"
              className="border-2 w-full rounded-lg px-5 py-3 mb-4"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="border-2 w-full rounded-lg px-5 py-3 mb-4"
            />
            <input
              type="text"
              placeholder="Your website (If exists)"
              className="border-2 w-full rounded-lg px-5 py-3 mb-4"
            />
            <textarea
              placeholder="How can I help?"
              className="border-2 w-full rounded-lg px-5 py-3 h-32 mb-4"
            ></textarea>
          </form>

          <div className="flex gap-4 mt-6 items-center">
            <button className="text-white bg-black px-5 py-3 text-lg rounded-lg font-semibold hover:bg-gray-800 flex items-center mb-4 sm:mb-0">
              Get In Touch
              <FaArrowCircleRight size={20} className="ml-2" />
            </button>
            <a
              href="https://x.com/Kanikaa78"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 sm:mb-0"
            >
              <FaXTwitter size={30} />
            </a>
            <a
              href="https://github.com/KanikaBhandari24"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 sm:mb-0"
            >
              <BsGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/kanika-bhandari-001k/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 sm:mb-0"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:k.anikabhandari2417@gmail.com"
              className="mb-4 sm:mb-0"
            >
              <BiLogoGmail size={30} />
            </a>
          </div>
        </div>

        <div className="ml-10 w-full lg:w-1/2 max-w-[40%]">
          <h1 className="special-gothic text-4xl sm:text-5xl lg:text-6xl tracking-tight sm:max-w-full">
            Let's talk for something special
          </h1>
          <p className="text-gray-500 mt-6 max-w-full">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <h2 className="mt-6 md:text-lg sm:text-sm font-bold ">
            k.anikabhandari2417@gmail.com
          </h2>
        </div>
      </div>

      <footer
        className="bg-black py-6 text-white px-5 lg:px-20 flex flex-col sm:flex-row items-center justify-between hover:bg-green-600"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <h1 className="text-xl sm:text-2xl font-semibold hover:underline cursor-pointer hover:text-black">
          Kanika - Portfolio
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-0">2025</h2>
      </footer>
    </div>
  );
};

export default Talk;
