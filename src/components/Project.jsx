import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const Project = () => {
  return (
    <div className="w-full h-full px-20 py-11 dm-sans" id="project">
      <h1 className="special-gothic text-center text-4xl tracking-tight">
        My Projects
      </h1>
      <div className="flex justify-between items-center mt-15">
        <div className="flex gap-5 items-center">
          <div>
            <img
              src="/36studio.png"
              alt=""
              className="h-55 w-85 border-1 rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">01</h2>
            <h3 className="text-2xl font-bold mt-4">36Studio</h3>
            <p className=" font-semibold max-w-[70%]">
              Enjoy watching chillies by clicking on Thirtysixstudio!
            </p>
            <ul className="flex gap-5 mt-4">
              <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                React
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                GSAP
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Tailwind
              </li>
            </ul>
            <div className="flex gap-5 items-center mt-2">
              <a href="https://36-studio-gold.vercel.app/" target="_blank">
                <IoOpenOutline size={20} />
              </a>
              <a
                href="https://github.com/KanikaBhandari24/36Studio"
                target="_blank"
                className="underline font-semibold cursor-pointer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-15">
        <div className="flex gap-5 items-center">
          <div>
            <img
              src="/ochi.png"
              alt=""
              className="h-55 w-85 border-1 rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">02</h2>
            <h3 className="text-2xl font-bold mt-4">OCHI</h3>
            <p className=" font-semibold">
              Clone of OCHI design using animation.
            </p>
            <ul className="flex gap-5 mt-4">
              <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                React
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                GSAP
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Framer-motion
              </li>
            </ul>
            <div className="flex gap-5 items-center mt-2">
              <a href="https://ochi-design-theta.vercel.app/" target="_blank">
                <IoOpenOutline size={20} />
              </a>
              <a
                href="https://github.com/KanikaBhandari24/OCHI"
                target="_blank"
                className="underline font-semibold cursor-pointer"
              >
                Source
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div>
            <img
              src="/docs.png"
              alt=""
              className="h-55 w-85 border-1 rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">03</h2>
            <h3 className="text-2xl font-bold mt-4">DOCS APP</h3>
            <p className=" font-semibold">A To-Do-List app with motions.</p>
            <ul className="flex gap-5 mt-4">
              <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                React
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Tailwind
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Framer-motion
              </li>
            </ul>
            <div className="flex gap-5 items-center mt-2">
              <IoOpenOutline size={20} />
              <p className="underline font-semibold cursor-pointer">Source</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-15">
        <div className="flex gap-5 items-center">
          <div>
            <img
              src="/travel.png"
              alt=""
              className="h-55 w-85 border-1 rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">04</h2>
            <h3 className="text-2xl font-bold mt-4">GoTravel</h3>
            <p className=" font-semibold">A responsive travel app.</p>
            <ul className="flex gap-5 mt-4">
              <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Next
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Typescript
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Tailwind
              </li>
            </ul>
            <div className="flex gap-5 items-center mt-2">
              <IoOpenOutline size={20} />
              <p className="underline font-semibold cursor-pointer">Source</p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div>
            <img
              src="/macbook.png"
              alt=""
              className="h-55 w-85 border-1 rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">05</h2>
            <h3 className="text-2xl font-bold mt-4">DOCS APP</h3>
            <p className=" font-semibold">Apple macbook pro landing page.</p>
            <ul className="flex gap-5 mt-4">
              <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                React
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                Three JS
              </li>
              <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
                React - 3 Fiber
              </li>
            </ul>
            <div className="flex gap-5 items-center mt-2">
              <a
                href="https://ochi-design-theta.vercel.app/"
                className="cursor-pointer"
              >
                <IoOpenOutline size={20} />
              </a>
              <a
                href="https://github.com/KanikaBhandari24/OCHI"
                className="underline font-semibold cursor-pointer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

{
  /* <div className="flex mt-15 gap-30 items-center justify-center">
  <img
    src="/ochi.png"
    alt=""
    width={450}
    height={450}
    className="rounded-2xl border-2"
  />
  <div className="">
    <h2 className="text-3xl font-bold">01</h2>
    <h3 className="text-2xl font-bold mt-4">OCHI</h3>
    <p className=" font-semibold">
      Clone of OCHI design using animation.
    </p>
    <ul className="flex gap-5 mt-4">
      <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        React
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        GSAP
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Framer-motion
      </li>
    </ul>
    <div className="flex gap-5 items-center mt-2">
      <IoOpenOutline size={20} />
      <p className="underline font-semibold cursor-pointer">Source</p>
    </div>
  </div>
</div>

<div className="flex mt-15 gap-30 items-center justify-center">
  <div className="">
    <h2 className="text-3xl font-bold">02</h2>
    <h3 className="text-2xl font-bold mt-4">GoTravel</h3>
    <p className=" font-semibold">A Responsive travel app.</p>
    <ul className="flex gap-5 mt-4">
      <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Next
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Tailwind
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Typescript
      </li>
    </ul>
    <div className="flex gap-5 items-center mt-2">
      <IoOpenOutline size={20} />
      <p className="underline font-semibold cursor-pointer">Source</p>
    </div>
  </div>
  <img
    src="/travel.png"
    alt=""
    width={450}
    height={450}
    className="rounded-2xl border-2"
  />
</div>

<div className="flex mt-15 gap-30 items-center justify-center">
  <img
    src="/docs.png"
    alt=""
    width={450}
    height={450}
    className="rounded-2xl"
  />

  <div className="">
    <h2 className="text-3xl font-bold">03</h2>
    <h3 className="text-2xl font-bold mt-4">DOCS-APP</h3>
    <p className=" font-semibold">A docs app with motions!</p>
    <ul className="flex gap-5 mt-4">
      <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        React
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Tailwind
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Framer-motion
      </li>
    </ul>
    <div className="flex gap-5 items-center mt-2">
      <IoOpenOutline size={20} />
      <p className="underline font-semibold cursor-pointer">Source</p>
    </div>
  </div>
</div>

<div className="flex mt-15 gap-30 items-center justify-center ">
  <div className="max-w-[25%]">
    <h2 className="text-3xl font-bold">04</h2>
    <h3 className="text-2xl font-bold mt-4">ConvoSim</h3>
    <p className=" font-semibold">
      This is a project made to convert a file from WORD to PDF format.
    </p>
    <ul className="flex gap-5 mt-4">
      <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        React
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Express
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Node
      </li>
    </ul>
    <div className="flex gap-5 items-center mt-2 cursor-pointer">
      <a
        href="https://ochi-design-theta.vercel.app/"
      >
        <IoOpenOutline size={20} />
      </a>
      <a
        href="https://github.com/KanikaBhandari24/OCHI"
        className="underline font-semibold cursor-pointer"
      >
        Source
      </a>
    </div>
  </div>
  <img
    src="/Convo.png"
    alt="adsf"
    width={450}
    height={450}
    className="rounded-2xl border-2"
  />
</div>

<div className="flex mt-15 gap-30 items-center justify-center">
  <img
    src="/macbook.png"
    alt=""
    width={450}
    height={450}
    className="rounded-2xl"
  />

  <div className="">
    <h2 className="text-3xl font-bold">05</h2>
    <h3 className="text-2xl font-bold mt-4">MacBook Pro</h3>
    <p className=" font-semibold">
      MacBook Pro landing page with animated features.
    </p>
    <ul className="flex gap-5 mt-4">
      <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        React
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Three.js
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        React3 Fiber
      </li>
    </ul>
    <div className="flex gap-5 items-center mt-2">
      <IoOpenOutline size={20} />
      <p className="underline font-semibold cursor-pointer">Source</p>
    </div>
  </div>
</div>

<div className="flex mt-15 gap-30 items-center justify-center">
  <div className="">
    <h2 className="text-3xl font-bold">06</h2>
    <h3 className="text-2xl font-bold mt-4">CYNET</h3>
    <p className=" font-semibold">
      Collaborated Website for the IT FEST of JIMS-VK.
    </p>
    <ul className="flex gap-5 mt-4">
      <li className="px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        React
      </li>
      <li className="border-1 px-2 py-1.5 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700">
        Tailwind
      </li>
    </ul>
    <div className="flex gap-5 items-center mt-2">
      <IoOpenOutline size={20} />
      <p className="underline font-semibold cursor-pointer">Source</p>
    </div>
  </div>
  <img
    src="/cynet.png"
    alt=""
    width={450}
    height={450}
    className="rounded-2xl"
  />
</div> */
}
