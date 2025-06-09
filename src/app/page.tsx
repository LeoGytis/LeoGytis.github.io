'use client';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import StarsScene from '../components/StarsScene';

export default function Home() {
  return (
    <>
      <StarsScene />
      <div className="flex gap-10 mx-auto max-xl:p-4 max-lg:flex-col max-w-7xl">
        <header className="lg:w-1/3">
          <NavBar />
        </header>
        <main className="relative md:py-6 lg:w-2/3 blur-animation">
          <span className="hidden lg:inline-block falling_line"></span>
          {/* <ThemeSwitch /> */}
          <About />
          <Education />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}
