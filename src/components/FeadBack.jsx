import React from "react";
import Slider from "react-slick";
import FeadBackCard from "./FeadBackCard";

function FeadBack() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="flex flex-col gap-5 py-20 md:py-24">
      <div>
        <h2 className="text-lg font-bold md:text-3xl mb-2 ">
          Students <span className="text-[#208486]">Feed back</span>
        </h2>
        <p className="text-sm md:text-lg text-neutral-500">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          <FeadBackCard />
          <FeadBackCard />
          <FeadBackCard />
          <FeadBackCard />
          <FeadBackCard />
          <FeadBackCard />
        </Slider>
      </div>
    </section>
  );
}

export default FeadBack;
