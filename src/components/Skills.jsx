import React, { useState } from "react";

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const techStackImages = {
    Ex: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    Rt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&s",
    Nt: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
  };

  const techStackImages2 = {
    Tw: "https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg",
    Gs: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
    Fm: "https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png",
  };

  const techStackImages3 = {
    Py: "https://kunalcybersecurity.com/wp-content/uploads/2023/08/Python-Symbol.png",
    Js: "https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y",
  };

  const techStackImages4 = {
    Html: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
    Css: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png",
  };

  const getImageUrl = (key) =>
    techStackImages[key] ||
    techStackImages2[key] ||
    techStackImages3[key] ||
    techStackImages4[key];

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleTap = (key) => {
    setHovered(key);
    // Hide image after 2 seconds on mobile
    setTimeout(() => {
      setHovered(null);
    }, 2000);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen px-6 sm:px-10 md:px-20 py-10 dm-sans"
      id="skills"
    >
      {/* Hover/Tap Image Preview */}
      <div
        className="block"
        style={{
          position: "fixed",
          top: cursorPos.y - 50,
          left: cursorPos.x - 50,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundImage: hovered ? `url(${getImageUrl(hovered)})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
          zIndex: 1000,
          transform: hovered ? "scale(1)" : "scale(0)",
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Title */}
      <h1 className="special-gothic text-center text-3xl sm:text-5xl tracking-tight">
        My Skills
      </h1>

      {/* Tech Stack */}
      <div className="flex justify-between items-center mt-10 flex-wrap gap-8">
        <div className="mt-10">
          <p className="text-xl sm:text-2xl font-outfit text-zinc-800 font-semibold">
            Tech Stack:
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["Rt", "Nt", "Ex"].map((item, index) => (
              <p
                key={index}
                className="text-3xl sm:text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[3rem] px-[3rem] rounded-lg"
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleTap(item)}
                onTouchStart={() => handleTap(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="mt-10">
          <p className="text-xl sm:text-2xl font-outfit text-zinc-800 font-semibold">
            Frameworks:
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["Tw", "Gs", "Fm"].map((item, index) => (
              <p
                key={index}
                className="text-3xl sm:text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[3rem] px-[3rem] rounded-lg"
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleTap(item)}
                onTouchStart={() => handleTap(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Languages & Basics */}
      <div className="flex justify-between items-center flex-wrap gap-8">
        {/* Languages */}
        <div className="mt-10">
          <p className="text-xl sm:text-2xl font-outfit text-zinc-800 font-semibold">
            Languages:
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["Py", "Js"].map((item, index) => (
              <p
                key={index}
                className="text-3xl sm:text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[3rem] px-[3rem] rounded-lg"
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleTap(item)}
                onTouchStart={() => handleTap(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Basics */}
        <div className="mt-10">
          <p className="text-xl sm:text-2xl font-outfit text-zinc-800 font-semibold">
            Basics:
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["Html", "Css"].map((item, index) => (
              <p
                key={index}
                className="text-3xl sm:text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[3rem] px-[3rem] rounded-lg"
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleTap(item)}
                onTouchStart={() => handleTap(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
