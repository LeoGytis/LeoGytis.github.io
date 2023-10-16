"use client";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projecs from "./components/Projects";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl p-8 md:p-12 lg:p-20">
      <div className="flex flex-col lg:flex-row">
        <header className="lg:w-1/3">
          <NavBar />
        </header>
        <main className="lg:w-2/3 lg:pl-24 relative">
          <div className="hidden lg:inline-block falling_line"></div>
          <About />
          <Education />
          <Experience />
          <Projecs />
        </main>
      </div>
    </div>
  );
}
