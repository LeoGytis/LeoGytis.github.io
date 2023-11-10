"use client";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projecs from "./components/Projects";
import Education from "./components/Education";
import ThemeSwitch from "../app/utils/ThemeSwitch";
import StarsScene from "./components/StarsScene";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl p-8 md:p-12 lg:p-20">
      <div className="fixed top-0 left-0">
        {/* <StarsScene bgColor="#021732" /> */}
        <StarsScene bgColor="#042850" />
      </div>
      <div className="flex flex-col lg:flex-row">
        <header className="lg:w-1/3">
          <NavBar />
        </header>
        <main className="lg:w-2/3 lg:pl-24 relative">
          <div className="hidden lg:inline-block falling_line"></div>
          <div className="hidden lg:flex absolute top-[-2%] right-[-10%]">
            <ThemeSwitch />
          </div>
          <About />
          <Education />
          <Experience />
          <Projecs />
        </main>
      </div>
    </div>
  );
}
