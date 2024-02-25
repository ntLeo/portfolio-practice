"use client"; // This is a custom command to use the client side of the app need for framer motion
import { motion } from "framer-motion"; // Importing the motion from framer-motion
import { links } from "@/lib/data";
import { link } from "fs";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";


const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); // Using the custom hook to use the active section context
  

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2  h-[4.25rem] w-full rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0,5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"

        // FRAMER MOTION ANIMATION
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        transition={{ delay: 0.2 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">

          {/* Mapping thru the links array to create the nav links (array in the data.ts) */}
          
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              transition={{ delay: 0.2 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300", { "text-gray-950 dark:!text-gray-200": activeSection === link.name })} // Using clsx to conditionally apply the active class
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name) // Setting the active section to the link name
                  setTimeOfLastClick(Date.now()) // Setting the time of the last click to the current time
                }} // Setting the active section to the link name
              >
                {link.name}
                {link.name === activeSection && (<motion.span className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800" // Conditional rendering of the active class
                layoutId="active" // Using layoutId to animate the active class
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 7 }} // Adding a spring animation to the active class
                ></motion.span>)} {/* Conditional rendering of the active class */}
                
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
