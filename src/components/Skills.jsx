import React, { useState } from "react";

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const techStackImages = {
    Ex: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    Rt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&s",
    Nd: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    Nt: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
  };

  const techStackImages2 = {
    Tw: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    Gs: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
    Fm: "https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png",
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen px-6 sm:px-10 md:px-20 py-10 dm-sans"
      id="skills"
    >
      {/* Hover Image Preview (Desktop only) */}
      <div
        className="hidden md:block"
        style={{
          position: "fixed",
          top: cursorPos.y - 50,
          left: cursorPos.x - 50,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundImage: hovered
            ? `url(${techStackImages[hovered] || techStackImages2[hovered]})`
            : "none",
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
      <div className="mt-10">
        <p className="text-xl sm:text-2xl font-outfit text-zinc-800 font-semibold">
          Tech Stack:
        </p>
        <div className="flex flex-wrap gap-4 mt-5">
          {["Rt", "Nt", "Nd", "Ex"].map((item, index) => (
            <p
              key={index}
              className="text-3xl sm:text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[3rem] px-[3rem] rounded-lg"
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className="mt-15">
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
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
