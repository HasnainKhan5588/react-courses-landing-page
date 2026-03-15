import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

function CategoryCard({ icon, title }) {
  return (
    <div className="category border py-5 border-transparent hover:border-[#1a9068] hover:cursor-pointer shadow-lg rounded-md flex items-center justify-between px-4 group/edit">
      <div className="flex gap-2 ">
        {icon}
        <h2 className="text-xl">{title}</h2>
      </div>
      <div>
        <BsArrowUpRight className="text-[#1a9068] icon" size={30} />
      </div>
    </div>
  );
}

export default CategoryCard;
