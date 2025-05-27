import { Link as ScrollLink } from 'react-scroll';
import SocialMedia from './SocialMedia';

const NavBar: any = () => {
  return (
    <div className="relative lg:fixed flex flex-col justify-between gap-10 lg:h-[90%] pt-6">
      <div className="blur-animation">
        <h1 className="pb-1 text-4xl font-bold sm:text-5xl">Gytis</h1>
        <h1 className="pb-6 text-4xl font-bold sm:text-5xl">Leonavičius</h1>
        <h2 className="text-lg font-medium sm:text-xl">Web developer</h2>
        <h3>Passionate about building intuitive digital solutions.</h3>
      </div>
      <nav className="flex-col hidden gap-2 text-lg lg:flex text-primary mb-14 blur-animation">
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
