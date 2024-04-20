import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="overflow-x-hidden selection:bg-blue-300 selection:text-white">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-8 ">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
