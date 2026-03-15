import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";
import Lock from "../assets/lock.svg";
import Menu from "../assets/hamburgerMenu.svg";
import Close from "../assets/close.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavItems } from "../data/data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-8 sticky">
      <div className="w-[30%] md:w-fit ">
        <img src={Logo} alt="logo" />
      </div>
      <ul className=" gap-6 hidden lg:flex ">
        {NavItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            className="font-semibold hover:text-green-400 cursor-pointer transition-all"
            duration={500}
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flex gap-6">
        <button className="border-2 border-[#208446] text-[#208446] rounded-md flex gap-2 px-3 py-2">
          <img src={Lock} alt="lock" /> sgin In
        </button>
        <button className="rounded-md px-4 hover:bg-green-500 transition-all py-2 bg-green-600 text-lg">
          Sign up for free
        </button>
      </div>
      <motion.div
        whileTap={{ scale: 0.6 }}
        className="flex lg:hidden "
        onClick={ToggleMenu}
      >
        <img src={isOpen ? Close : Menu} alt="" />
      </motion.div>
      {isOpen && (
        <ul className="top-20 md:hidden w-full mt-25 text-center flex flex-col gap-4 font-semibold bg-white left-0 fixed ">
          {NavItems.map((item) => (
            <Link
              className="capitalize hover:text-green-400 transition-all md:text-lg text-sm "
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex justify-center gap-6">
            <button className="border-2 md:text-lg text-sm border-[#208446] text-[#208446] rounded-md flex gap-2 px-3 py-2">
              <img src={Lock} alt="lock" /> sgin In
            </button>
            <button className="rounded-md px-4 hover:bg-green-500 transition-all py-2 bg-green-600 md:text-lg text-sm">
              Sign up for free
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
