"use client";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number]; // GETTING THE TYPE OF THE OBJECT IN THE DATA.TS

// RETURNING THE PROJECT CARD
export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], // ANIMATION STARTING "0 1" WHEN THE BOTTOM OF THE VIEWPORT CROSSING TOP OF THE TARGET, ANIMATION ENDING "1.33 1" WHEN THE BOTTOM OF THE VIEWPORT HAS GONE 33% BEYOND THE END OF THE TARGET.
  }); // USING FRAMER MOTION TO ANIMATE THE SCROLL

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // CUSTOMIZING THE ANIMATION
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]); // CUSTOMIZING THE ANIMATION

  //USING "GROUP" TO GROUP ITEMS TOGETHER
  return (
    <motion.div
      ref={ref}
      style={{
        // ANIMATING THE SCALE AND OPACITY OF THE SECTION
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group "
    >
      <section className="bg-gray-100 max-w-[42rem] border rounded-lg border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 las:mb-0 hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        {/* AFTER I "GROUP" ITEMS TOGETHER I CAN CALL GROUP AND MAKE EVERY EVEN ITEM TO CHANGE E.X. group-even:ml-[20rem] MARGIN LEFT 20rem */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto dark:text-white/70 ">
            {/* MAPPING THRU TAGS  */}
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white/10"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* AFTER I "GROUP" ITEMS TOGETHER I CAN CALL GROUP AND MAKE EVERY EVEN ITEM TO CHANGE E.X. group-even:-left-40 */}
        <Image
          src={imageUrl}
          alt="project"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 
          
          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-1 
          group-hover:scale-[1.04] 
          transition
          
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-1 "
        />
      </section>
    </motion.div>
  );
}
