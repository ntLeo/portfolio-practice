"use client"
import { BsMoon, BsSun } from "react-icons/bs"
import { useEffect, useState } from "react"
import { useTheme } from "@/context/theme-context";



const ThemeSwitch = () => {
const {theme, toggleTheme} = useTheme();
  return (
    <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-sm border border-gray-300 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950" 
    onClick={toggleTheme}
    >
        {theme === 'light' ? <BsSun className='text-2xl text-gray-800' /> : <BsMoon className='text-2xl' />}
        
    </button>
  )
}
export default ThemeSwitch