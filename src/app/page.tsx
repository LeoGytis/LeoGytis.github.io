'use client';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import NavBar from '../components/NavBar';
import Projecs from '../components/Projects';
import StarsScene from '../components/StarsScene';

export default function Home() {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <StarsScene />
      <div className="flex flex-col gap-10 lg:flex-row">
        <header className="lg:w-1/3">
          <NavBar />
        </header>
        <main className="relative lg:w-2/3 lg:pl-6 blur-animation">
          <span className="hidden lg:inline-block falling_line"></span>
          {/* <ThemeSwitch /> */}
          <About />
          <Education />
          <Experience />
          <Projecs />
        </main>
      </div>
    </div>
  );
}
