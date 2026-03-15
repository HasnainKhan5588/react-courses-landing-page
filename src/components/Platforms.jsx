import React from "react";
import cta from "../assets/cta.png";
function Platforms() {
  return (
    <section
      id="platform"
      className="py-15 mb-20 md:mb-0  flex flex-wrap gap-5 justify-between md:w-[90%] items-center"
    >
      <div className="w-full md:w-[45%]">
        <img src={cta} alt="cta" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-8 md:w-[45%]">
        <p className="text-sm  md:text-3xl font-semibold mt-10">
          Join one of the best{" "}
          <span className="text-[#208486] text-sm md:text-lg">
            platforms for online
          </span>{" "}
          courses from all over the world
        </p>
        <div>
          <p className="text-neutral-500">
            Various versions have evolved over the years
          </p>
          <button className="w-full md:w-fit rounded-md mt-4 px-4 hover:bg-green-500 transition-all py-2 bg-green-600 text-lg">
            Sginup for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Platforms;
