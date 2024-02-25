"use client"; // This is a custom command to use the client side 

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = typeof links[number]["name"]; // Creating a type for the section name from data.ts

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
    };  // Creating a type for the children prop

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
    }; // Creating a type for the context

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); // Creating a context for the active section

export function useActiveSectionContext() {
    const context = React.useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error(
            "useActiveSection must be used within an ActiveSectionProvider"
        );
    }
    return context;
} // Creating a custom hook to use the active section context

const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home"); // Using the useState hook to set the active section to home by default
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // We need to keep of this to disable the observer when the user clicks on the nav links

     

  return <ActiveSectionContext.Provider value = {{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
  }}>{children}</ActiveSectionContext.Provider>;
  
}
export default ActiveSectionContextProvider