import { Link as ScrollLink } from 'react-scroll';
import SocialMedia from './SocialMedia';

const NavItem = ({ to }: { to: string }) => (
  <ScrollLink className="nav_item" spy smooth offset={-80} to={to}>
    <div className="nav_indicator" />
    {to.charAt(0).toUpperCase() + to.slice(1)}
  </ScrollLink>
);

const NavBar = () => {
  return (
    <div className="relative flex flex-col justify-between gap-10 p-4 lg:py-12 lg:fixed lg:h-[100dvh]">
      <div className="blur-animation">
        <h1 className="pb-1 text-4xl font-bold sm:text-5xl">Gytis</h1>
        <h1 className="pb-6 text-4xl font-bold sm:text-5xl">Leonavičius</h1>
        <h2 className="text-lg font-medium sm:text-xl">Web developer</h2>
        <h3>Creating innovative digital solutions</h3>
      </div>
      <nav className="hidden flex-col gap-2 mb-14 text-lg lg:flex text-primary blur-animation">
        <NavItem to="about" />
        <NavItem to="education" />
        <NavItem to="experience" />
        <NavItem to="projects" />
      </nav>
      <SocialMedia />
    </div>
  );
};

export default NavBar;
