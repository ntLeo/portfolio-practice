"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGitSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";


const Intro = () => {

  const {ref, inView} = useInView({threshold: 0.1});                         // Using the useInView hook to check if the section is in view
  const { setActiveSection, timeOfLastClick, setTimeOfLastClick  } = useActiveSectionContext();    // Using the useInView hook to check if the section is in view

  useEffect(() => {                                          // Using the useInView hook to check if the section is in view
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");                             // Using the useInView hook to check if the section is in view
    }
  }, [inView, setActiveSection, timeOfLastClick, setTimeOfLastClick] );                           // Using the useInView hook to check if the section is in view

  return (
    <section ref={ref} id="home" className="sm:mt-20 mt-5 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[15rem] ">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.2, type: "tween", duration: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Image
              src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-917.jpg?w=1380"
              alt="logo"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full h-30 w-30 object-cover border-[0.35rem] border-white shadow-xl "
            />
          </motion.div>
          <motion.span
            className="text-5xl absolute bottom-0 right-1"
            initial={{ scale: 0, opacity: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 125,
              duration: 0.7,
            }}
            animate={{ scale: 1, opacity: 1 }}
          >
            ✌️
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.2}}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I&apos;m Dev.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.3}}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 mr-1 flex items-center rounded-full out-line-none focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());}}
        >
          Contact Me Here  
          <BsArrowRight className="ml-2 opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a className="group bg-white text-gray-900 px-6 py-3 flex items-center rounded-full out-line-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/90" href="/CV.pdf" download>
          Download CV <HiDownload className="ml-2 opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <a className="bg-white text-gray-700 p-4 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60" href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60" href="https://github.com/ntLeo" target="_blank">
          <FaGitSquare />
        </a>
      </motion.div>
    </section>
  );
};
export default Intro;
