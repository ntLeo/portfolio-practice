"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

const About = () => {
  const {ref, inView} = useInView({threshold: 0.95});                         // Using the useInView hook to check if the section is in view
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();    // Using the useInView hook to check if the section is in view

  useEffect(() => {                                          // Using the useInView hook to check if the section is in view
    if (inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection("About");                             // Using the useInView hook to check if the section is in view
    }
  }, [inView, setActiveSection, timeOfLastClick] );                           // Using the useInView hook to check if the section is in view


  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[6rem]"
    initial={{ opacity: 0, y: 100 }}
    transition={{ delay: 0.35 }}
    animate={{ opacity: 1, y: 0 }}
    id="about"
    ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
};
export default About;
