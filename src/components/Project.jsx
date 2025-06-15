import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const projects = [
  {
    id: "01",
    title: "Donut Slider",
    description: "Slide the donuts 🍩",
    image: "/donut.png",
    tags: ["Next", "Tailwind", "GSAP"],
    live: "https://donut-slider-gcu9.vercel.app/",
    source: "https://github.com/KanikaBhandari24/Donut-Slider",
  },
  {
    id: "02",
    title: "CollegeTips.in - DLC",
    description: "Made a DLC website for CollegeTips.in",
    image: "/DLC.png",
    tags: ["React", "Tailwind", "GSAP"],
    live: "https://internship-dlc.vercel.app/",
    source: "https://github.com/KanikaBhandari24/Internship-DLC",
  },
  {
    id: "03",
    title: "CollegeTips.in",
    description: "Made an interactive Gallery for CollegeTips.in 📸",
    image: "/Gallery.png",
    tags: ["React", "Tailwind"],
    live: "https://internship-photo-gallery.vercel.app/",
    source: "https://github.com/KanikaBhandari24/Internship-PhotoGallery",
  },
  {
    id: "04",
    title: "36Studio",
    description: "Enjoy watching chillies by clicking on Thirtysixstudio! 🌶️",
    image: "/36studio.png",
    tags: ["React", "GSAP", "Tailwind"],
    live: "https://36-studio-gold.vercel.app/",
    source: "https://github.com/KanikaBhandari24/36Studio",
  },
  {
    id: "05",
    title: "OCHI",
    description: "Clone of OCHI design with animation. 👀",
    image: "/ochi.png",
    tags: ["React", "GSAP", "Framer-motion"],
    live: "https://ochi-design-theta.vercel.app/",
    source: "https://github.com/KanikaBhandari24/OCHI",
  },
  {
    id: "06",
    title: "DOCS APP",
    description: "A To-Do-List app with motions. 📃",
    image: "/docs.png",
    tags: ["React", "Tailwind", "Framer-motion"],
    live: "https://docs-app-two-indol.vercel.app/",
    source: "https://github.com/KanikaBhandari24/Docs-App",
  },
  {
    id: "07",
    title: "GoTravel",
    description: "A responsive travel app. 🧳",
    image: "/travel.png",
    tags: ["Next", "Typescript", "Tailwind"],
    live: "https://travel-app-eta-ruby.vercel.app/",
    source: "https://github.com/KanikaBhandari24/Travel-App",
  },
  {
    id: "08",
    title: "Macbook Pro - Apple",
    description: "Apple macbook pro landing page. 💻",
    image: "/macbook.png",
    tags: ["React", "Three JS", "React - 3 Fiber"],
    live: "https://mac-book-pro-landing-page.vercel.app/",
    source: "https://github.com/KanikaBhandari24/MacBook-Pro-Landing-Page",
  },
];

const Project = () => {
  return (
    <div className="w-full h-full px-6 md:px-20 py-10 space-y-16 dm-sans" id="project">
      <h1 className="special-gothic text-center text-4xl tracking-tight">My Projects</h1>
      {projects.map((proj, idx) => (
        <div
          key={proj.id}
          className={`flex flex-col lg:flex-row ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center gap-8`}
        >
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full max-w-md h-auto border rounded-2xl shadow-lg"
          />
          <div className="flex-1 space-y-2">
            <h2 className="text-3xl font-bold">{proj.id}</h2>
            <h3 className="text-2xl font-bold mt-2">{proj.title}</h3>
            <p className="font-semibold">{proj.description}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {proj.tags.map((tag, i) => (
                <li
                  key={i}
                  className="px-3 py-1.5 bg-black text-white rounded-full text-sm cursor-pointer hover:bg-gray-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 items-center mt-4">
              <a href={proj.live} target="_blank" rel="noopener noreferrer">
                <IoOpenOutline size={22} />
              </a>
              <a
                href={proj.source}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-sm"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
