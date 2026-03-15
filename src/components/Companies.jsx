import Company1 from "../assets/company-logo-1.png";
import Company2 from "../assets/company-logo-2.png";
import Company3 from "../assets/company-logo-3.png";
import Company4 from "../assets/company-logo-4.png";

function Companies() {
  return (
    <section className="py-15 md:py-24 flex flex-col gap-6 text-center mt-8  items-center">
      <h2 className=" text-lg  md:text-2xl font-bold text-[#536e90]">
        Trusted by over 25,000 teams around the world
      </h2>
      <h3 className="text-sm md:text-xl text-[#536e90]">
        Leading Companies use the same courses to help their employees keep
        skill up
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        <img src={Company1} alt="" className="w-[30%] h-[30%] md:w-fit" />
        <img src={Company2} alt="" className="w-[30%] h-[30%] md:w-fit" />
        <img src={Company3} alt="" className="w-[30%] h-[30%] md:w-fit" />
        <img src={Company4} alt="" className="w-[30%] h-[30%] md:w-fit" />
      </div>
    </section>
  );
}

export default Companies;
