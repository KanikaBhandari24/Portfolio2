import React, { useState } from "react";

const Skills = () => {
  const [hovered, setHovered] = useState(null); // State to track hover
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // State to track cursor position

  const techStackImages = {
    Ex: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    Rt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&s",
    Nd: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    Nt: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
  };
  const techStackImages2 = {
    Tw: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    Gs: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
    Fm: "https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png"
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative overflow-x-hidden w-full h-screen px-20 py-20 dm-sans"
      id="skills"
    >
      <div
        style={{
          position: "fixed",
          top: cursorPos.y - 50, // Adjust to center the image
          left: cursorPos.x - 50, // Adjust to center the image
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundImage: hovered
            ? `url(${techStackImages[hovered]})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none", // Prevent interference with other elements
          zIndex: 1000,
          transform: hovered ? "scale(1)" : "scale(0)", // Scale up or down
          transition: "transform 0.3s ease-out", // Smooth scaling
        }}
      />
      <div
        style={{
          position: "fixed",
          top: cursorPos.y - 50, // Adjust to center the image
          left: cursorPos.x - 50, // Adjust to center the image
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundImage: hovered
            ? `url(${techStackImages2[hovered]})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none", // Prevent interference with other elements
          zIndex: 1000,
          transform: hovered ? "scale(1)" : "scale(0)", // Scale up or down
          transition: "transform 0.3s ease-out", // Smooth scaling
        }}
      />

      <h1 className="special-gothic text-center text-4xl tracking-tight">
        My Skills
      </h1>

      <div>
      <p className="text-2xl mt-10 font-outfit text-zinc-800 font-semibold">
      Tech Stack:</p>
      <div className="flex gap-3 mt-5">
        {["Rt", "Nt", "Nd", "Ex"].map((item, index) => (
          <p
            key={index}
            className="text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[2.5rem] px-[3rem] rounded-lg"
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
          >
            {item}
          </p>
        ))}
      </div>
      </div>
      <div className="mt-5">
        <p className="text-2xl mt-5 font-outfit text-zinc-800 font-semibold">
        Frameworks:</p>
        <div className="mt-2 flex gap-3">
          {["Tw", "Gs", "Fm"].map((item, index) => (
            <p
              key={index}
              className="text-4xl hover:scale-110 hover:text-5xl border-zinc-800 cursor-pointer duration-500 transition-all ease-out font-outfit text-zinc-800 font-black border-2 py-[2.5rem] px-[3rem] rounded-lg"
              onMouseEnter={() => setHovered(item)} // Set hovered item
              onMouseLeave={() => setHovered(null)} // Clear hovered item
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
