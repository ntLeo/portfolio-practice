"use client"; // Vertical TIME LINE COMPONENT WILL USE IT
import { experiencesData } from "@/lib/data";
import SectionHeading from "./SectionHeading"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useTheme } from "@/context/theme-context";
import * as React from "react";


const Experience = () => {
   const {theme} = useTheme(); // Using the useTheme hook from the theme-context file
   const {ref, inView} = useInView({threshold: 0.8});                         // Using the useInView hook to check if the section is in view
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();    // Using the useInView hook to check if the section is in view

  useEffect(() => {                                          // Using the useInView hook to check if the section is in view
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");                             // Using the useInView hook to check if the section is in view
    }
  }, [inView, setActiveSection, timeOfLastClick] );    

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My Experience</SectionHeading>

         <VerticalTimeline lineColor="">  {/*Using the VerticalTimeline component from the react-vertical-timeline-component library */}

         {experiencesData.map((item, index) => (

            <React.Fragment key={index}> {/*Using the React.Fragment component to USE THE KEY instead of third party app */}
            
            <VerticalTimelineElement
             visible={true} // SOMETIMES THIS MOTHERFUCKER JUST NOT RENDERING ON THE PAGE! JUST USE VISIBLE={TRUE}
             contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.08)", 
                boxShadow: "none", 
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                }}
             contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.3)"
             }}
             date={item.date}
             icon={item.icon}
             iconStyle={{
                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
             }}> {/*Using the VerticalTimelineElement component from the react-vertical-timeline-component library */}

            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!font-normal !mt-1 text-gray-700 dark:text-white/75">{item.description}</p>
            
            </VerticalTimelineElement>

            </React.Fragment>
         ))}
            
        </VerticalTimeline>
    </section>
  )
}
export default Experience