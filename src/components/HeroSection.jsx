import { AiOutlineSearch } from "react-icons/ai";
import HeroImg from "../assets/heroImg.png";
function HeroSection() {
  return (
    <section
      id="home"
      className="flex md:justify-between items-center py-17 md:py-24 flex-wrap  justify-center"
    >
      <div className="flex flex-col gap-8 text-center md:text-left md:w-[45%]">
        <h1 className="text-[#208486] text-lg sm:text-2xl md:text-4xl font-bold  ">
          START TO SUCCESS
        </h1>
        <h3 className="text-sm  md:text-3xl font-semibold  ">
          Access to over <span className="text-[#208486]">1000</span> courses
          from over <span className="text-[#208486]">200</span> professional
          instructors & institutions
        </h3>
        <p className="md:text-xl ">
          Various versions have evolved over the years
        </p>
        <div className="flex items-center gap-5">
          <input
            type="text"
            className="input-box-shadow  my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500"
            placeholder="search for courses here"
          />

          <AiOutlineSearch
            size={40}
            className="icon cursor-pointer"
            style={{ color: "#000" }}
          />
        </div>
      </div>
      <div className="md:w-[45%]">
        <img
          className="md:order-last w-[100%] order-first"
          src={HeroImg}
          alt="heroimage"
        />
      </div>
    </section>
  );
}

export default HeroSection;
