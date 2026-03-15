import React from "react";
import avatar from "../assets/avatar.png";
import quotationMark from "../assets/quotationMark.png";

function FeadBackCard() {
  return (
    <div className="flex flex-col gap-6 rounded-sm border p-8 mx-4 shadow-sm">
      <div className="flex gap-2 items-center">
        <img src={avatar} alt="avatar" />
        <div>
          <h1>Jenny Wilson</h1>
          <p>UI/UX Designer</p>
        </div>
        <img src={quotationMark} alt="quotationMark" />
      </div>
      <div className="py-8">
        <h3 className="text-sm md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          praesentium distinctio excepturi dolor, nihil unde exercitationem
        </h3>
      </div>
    </div>
  );
}

export default FeadBackCard;
