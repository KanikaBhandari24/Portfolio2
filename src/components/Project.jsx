"use client";
import { IoOpenOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
const bestProjects = projects.filter(p =>
  ["01", "04", "05"].includes(p.id)
);// top ones

const ProjectCard = ({ proj }) => (
  <div className="flex flex-col items-start border rounded-xl shadow-md p-2 h-full max-w-sm">
    <img
      src={proj.image}
      alt={proj.title}
      className="w-full h-35 object-cover rounded-md mb-2"
    />
    <h3 className="text-base font-semibold leading-tight">{proj.title}</h3>
    <p className="text-xs text-gray-600 line-clamp-2">{proj.description}</p>
    <ul className="flex flex-wrap gap-1 mt-1">
      {proj.tags.map((tag, i) => (
        <li
          key={i}
          className="px-2 py-0.5 bg-black text-white rounded-full text-[10px]"
        >
          {tag}
        </li>
      ))}
    </ul>
    <div className="flex gap-2 mt-2 items-center text-xs">
      <a href={proj.live} target="_blank" rel="noopener noreferrer">
        <IoOpenOutline size={16} />
      </a>
      <a
        href={proj.source}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Source
      </a>
    </div>
  </div>
);

const Project = () => {
  return (
    <div className="w-full h-screen px-20 dm-sans flex flex-col justify-center mt-6" id="project">
      <div className="flex flex-col gap-3 overflow-y-auto h-full">
        <h1 className="special-gothic text-center text-2xl sm:text-4xl tracking-tight mb-2">My Projects</h1>
        {/* Best Projects */}
        <section className="mb-5">
          <h1 className="special-gothic text-left text-xl md:text-2xl font-bold mb-2">
            Best Projects
          </h1>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {bestProjects.map((proj) => (
              <SwiperSlide key={proj.id}>
                <ProjectCard proj={proj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* All Projects */}
        <section>
          <h1 className="special-gothic text-left text-xl md:text-2xl font-bold mb-2">
            All Projects
          </h1>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((proj) => (
              <SwiperSlide key={proj.id}>
                <ProjectCard proj={proj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Project;
