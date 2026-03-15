import React from "react";
import CategoryCard from "./CategoryCard";
import { BsVectorPen, BsBank, BsMusicNote } from "react-icons/bs";
import {
  TiHtml5,
  TiMicrophone,
  TiBriefcase,
  TiBatteryCharge,
  TiCamera,
} from "react-icons/ti";
function Categories() {
  return (
    <section
      id="Categories"
      className="w-full bg-[#F0F8F7] p-5 my-24  flex flex-col justify-center gap-10"
    >
      <div>
        <h3 className="text-lg font-bold md:text-3xl ">
          Our <span className="text-[#208486]">Popular Categories</span>
        </h3>
        <p className="text-sm md:text-xl text-neutral-500">
          Various versions have evolved over the years
        </p>
      </div>
      <div className="grid md:grid-cols-3 py-6 gap-4">
        <CategoryCard icon={<BsVectorPen size={30} />} title={"Design"} />
        <CategoryCard icon={<TiHtml5 size={30} />} title={"Web Development"} />
        <CategoryCard icon={<TiMicrophone size={30} />} title={"Marketing"} />
        <CategoryCard icon={<TiBriefcase size={30} />} title={"Business"} />
        <CategoryCard
          icon={<TiBatteryCharge size={30} />}
          title={"Lifestyle"}
        />
        <CategoryCard icon={<TiCamera size={30} />} title={"Photograph"} />
        <CategoryCard icon={<BsMusicNote size={30} />} title={"Music"} />
        <CategoryCard icon={<BsBank size={30} />} title={"Finance"} />
        <CategoryCard
          icon={<BsMusicNote size={30} />}
          title={"Health & Fitness"}
        />
      </div>
    </section>
  );
}

export default Categories;
