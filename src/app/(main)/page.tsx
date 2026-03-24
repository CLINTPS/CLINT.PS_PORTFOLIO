import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";

export default function Page() {
  return (
    <>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}