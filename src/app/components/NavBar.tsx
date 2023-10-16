import { Link as ScrollLink } from "react-scroll";
import SocialMedia from "./SocialMedia";

const NavBar: any = () => {
  return (
    <div className="lg:h-full lg:fixed mb-10">
      <div className="flex flex-col gap-10 justify-between lg:h-5/6 text-slate-100">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold pb-3">
            Gytis Leonavičius
          </h1>
          <h2 className="text-lg sm:text-xl font-medium pb-4">Web developer</h2>
          <h3 className="max-w-xs text-slate-300">
            Inclusive products and digital experiences for the web.
          </h3>
        </div>
        <nav className="hidden lg:flex flex-col text-lg gap-2">
          <ScrollLink className="nav_item" spy smooth offset={-80} to="about">
            <div className="nav_indicator" />
            About
          </ScrollLink>

          <ScrollLink
            className="nav_item"
            spy
            smooth
            offset={-80}
            to="education"
          >
            <div className="nav_indicator" />
            Education
          </ScrollLink>

          <ScrollLink
            className="nav_item"
            spy
            smooth
            offset={-80}
            to="experience"
          >
            <div className="nav_indicator" />
            Experience
          </ScrollLink>

          <ScrollLink
            className="nav_item"
            spy
            smooth
            offset={-80}
            to="projects"
          >
            <div className="nav_indicator" />
            Projects
          </ScrollLink>
        </nav>
        <SocialMedia />
      </div>
    </div>
  );
};

export default NavBar;
