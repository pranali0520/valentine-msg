import React from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://picsum.photos/id/1011/400/500",
  "https://picsum.photos/id/1015/400/500",
  "https://picsum.photos/id/1021/400/500",
];

const PhotoCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
  w-80 
  sm:w-96 
  md:w-[420px] 
  lg:w-[520px] 
  xl:w-[600px]
  h-96 
  lg:h-[520px]
  rounded-xl
  overflow-hidden 
  shadow-xl 
  relative
"
    >
      {/* Sliding + Fading Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex flex-col animate-slide-fade">
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="slide"
              className="w-full h-96 object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Centered Text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-3">
        <h3 className="text-1xl font-bold mb-2 sm:text-3xl">
          💖 You Made My Heart Happy! 💖
        </h3>
        <p className=" text-sm sm:text-xl mb-2">
          Every moment with you feels like a dream come true.
        </p>
        <p className=" text-sm sm:text-xl mb-8">
          I’m so lucky to have you in my life 💘
        </p>
        <p className=" text-sm sm:text-xl mb-8 text-red-600 font-bold">
          I LOVE YOU SANIL
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white px-4 py-2 rounded-full transition duration-300 shadow-md transform hover:scale-110 hover:animate-pulse"
        >
          Back to My Heart 💌
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
