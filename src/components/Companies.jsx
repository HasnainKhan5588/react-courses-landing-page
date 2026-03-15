import Company1 from "../assets/company-logo-1.png";
import Company2 from "../assets/company-logo-2.png";
import Company3 from "../assets/company-logo-3.png";
import Company4 from "../assets/company-logo-4.png";

function Companies() {
  return (
    <section className="md:mt-20 flex flex-col gap-6 text-center mt-10  md:mb-20 items-center">
      <h2 className=" text-lg  md:text-2xl font-bold text-[#536e90]">
        Trusted by over 25,000 teams around the world
      </h2>
      <h3 className=" md:text-xl text-[#536e90]">
        Leading Companies use the same courses to help their employees keep
        skill up
      </h3>
      <div className="grid gap-2 md:gap-20 md:grid-cols-4 grid-cols-2 ">
        <img src={Company1} alt="" />
        <img src={Company2} alt="" />
        <img src={Company3} alt="" />
        <img src={Company4} alt="" />
      </div>
    </section>
  );
}

export default Companies;
