"use client";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

const fadeInAnimationVariants = {
    initial: {opacity: 0, y: 100},
    animate: (index: number) => ({opacity: 1, y: 0, transition: {duration: 0.3, delay: 0.05 * index}}),


    // animate: (index: number) => {
    //     return {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.1}}
    // }                                                                              Example of using a function to return the object
    
}

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.5 }); // Using the useInView hook to check if the section is in view
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext(); // Using the useInView hook to check if the section is in view

  useEffect(() => {
    // Using the useInView hook to check if the section is in view
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills"); // Using the useInView hook to check if the section is in view
    }
  }, [inView, setActiveSection, timeOfLastClick]); // Using the useInView hook to check if the section is in view

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap text-center justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl py-3 px-5 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
