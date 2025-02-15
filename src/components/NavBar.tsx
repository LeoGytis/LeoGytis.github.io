import { Link as ScrollLink } from 'react-scroll';
import SocialMedia from './SocialMedia';

const NavBar: any = () => {
  return (
    <div className="relative lg:fixed flex flex-col justify-between gap-10 lg:h-[90%]">
      <div className="blur-animation">
        <h1 className="text-4xl sm:text-5xl font-bold pb-6">
          Gytis Leonavičius
        </h1>
        <h2 className="text-lg sm:text-xl font-medium">Web developer</h2>
        <h3>Passionate about building intuitive digital solutions.</h3>
      </div>
      <nav className="hidden lg:flex flex-col text-lg text-primary gap-2 mb-14 blur-animation">
        <ScrollLink className="nav_item" spy smooth offset={-80} to="about">
          <div className="nav_indicator" />
          About
        </ScrollLink>

        <ScrollLink className="nav_item" spy smooth offset={-80} to="education">
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

        <ScrollLink className="nav_item" spy smooth offset={-80} to="projects">
          <div className="nav_indicator" />
          Projects
        </ScrollLink>
      </nav>
      <SocialMedia />
    </div>
  );
};

export default NavBar;
