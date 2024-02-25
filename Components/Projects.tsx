"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import Project from "./ProjectItem";
import { useEffect } from "react";


const Projects = () => {
  const {ref, inView} = useInView({threshold: 0.7});                         // Using the useInView hook to check if the section is in view
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();    // Using the useInView hook to check if the section is in view

  useEffect(() => {                                          // Using the useInView hook to check if the section is in view
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");                             // Using the useInView hook to check if the section is in view
    }
  }, [inView, setActiveSection, timeOfLastClick] );                           // Using the useInView hook to check if the section is in view
  
  return (
    <section ref={ref} id="projects" className="scroll-mt-[6rem] mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {/* MAPPING THRU OBJECT TO GET THE CARDS (OBJECT in the data.ts) */}
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* USING SPREAD OPERATOR TO ACCESS THE THE OBJECT PROPERTY title, description, tags, imageUrl */}
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;
