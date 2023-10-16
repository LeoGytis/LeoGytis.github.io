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
          <li className="flex items-center">
            <ScrollLink className="nav_indicator" spy to="about" />
            <ScrollLink smooth offset={-80} to="about" className="nav_click">
              About
            </ScrollLink>
          </li>

          <li className="flex items-center">
            <ScrollLink className="nav_indicator" spy to="education" />
            <ScrollLink
              smooth
              offset={-80}
              to="education"
              className="nav_click"
            >
              Education
            </ScrollLink>
          </li>

          <li className="flex items-center">
            <ScrollLink className="nav_indicator" spy to="experience" />
            <ScrollLink
              smooth
              offset={-80}
              to="experience"
              className="nav_click"
            >
              Experience
            </ScrollLink>
          </li>

          <li className="flex items-center">
            <ScrollLink className="nav_indicator" spy to="projects" />
            <ScrollLink smooth offset={-80} to="projects" className="nav_click">
              Projects
            </ScrollLink>
          </li>
        </nav>
        <SocialMedia />
      </div>
    </div>
  );
};

export default NavBar;
