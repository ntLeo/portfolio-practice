import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Experience from "@/Components/Experience";
import Intro from "@/Components/Intro";
import Projects from "@/Components/Projects";
import SectionDivider from "@/Components/SectionDivider";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
