import React from "react";
import Slider from "react-slick";
import CoursesCard from "./CoursesCard";
import { courses } from "../data/data";

function Courses() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    ],
  };

  return (
    <section id="courses" className="py-20 md:py-24">
      <div>
        <h3 className="text-lg md:text-3xl font-bold ">
          Most Popular <span className="text-[#208486]">Courses</span>{" "}
        </h3>
        <p className="mt-5 text-sm sm:text-lg text-neutral-500">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>
      <div className="md:max-w-[1100px]  m-auto max-w-[400px] ">
        <Slider {...settings} className="px-5">
          {courses.map((course) => (
            <CoursesCard
              key={course.id}
              title={course.title}
              category={course.category}
              rating={course.rating}
              price={course.price}
              linkImg={course.linkImg}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Courses;
