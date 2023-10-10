import {
  Link as ScrollLink,
} from "react-scroll";
import SocialMedia from "./SocialMedia";

const NavBar: any = () => {
  return (
    <div className="lg:h-full lg:fixed mb-10">
      <div className="flex flex-col gap-10 justify-between lg:h-5/6 text-slate-100">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold pb-3">
            Gytis Leonavičius
          </h1>
          <h2 className="text-lg sm:text-xl font-medium pb-4">
            Front end web developer
          </h2>
          <h3 className="max-w-xs text-slate-300">
            Focused on inclusive products and digital experiences for the web.
          </h3>
        </div>
        <nav className="hidden lg:flex flex-col text-lg gap-2">
          <ScrollLink
            className="navbar_selection"
            smooth
            spy
            offset={-80}
            to="about"
          >
            About
          </ScrollLink>
          <ScrollLink
            className="navbar_selection"
            smooth
            spy
            offset={-80}
            to="education"
          >
            Education
          </ScrollLink>
          <ScrollLink
            className="navbar_selection"
            smooth
            spy
            offset={-80}
            to="experience"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            className="navbar_selection"
            smooth
            spy
            offset={-80}
            to="projects"
          >
            Projects
          </ScrollLink>
        </nav>
        <SocialMedia />
      </div>
    </div>
  );
};

export default NavBar;
