import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import SvgGmail from "../../../public/images/svg/svgGmail";
import SvgLinkedIn from "../../../public/images/svg/SvgLinkedIn";

const SocialMedia: any = () => {
  return (
    <div className="flex items-center ml-1 gap-4">
      <a
        href="https://www.facebook.com/divergytis"
        className="hover:cursor-pointer text-2xl text-tag hover:text-nav-inactive"
      >
        <BsFacebook className="hover:text-primary" />
      </a>
      <a
        href="https://github.com/LeoGytis"
        className="hover:cursor-pointer text-2xl text-tag hover:text-nav-inactive"
      >
        <BsGithub className="hover:text-primary" />
      </a>
      <a
        href="https://www.linkedin.com/in/gytis-leonavicius-74839519a/"
        className="hover:cursor-pointer text-[1.7rem] text-tag hover:text-nav-inactive"
      >
        <SvgLinkedIn className="fill-tag hover:fill-primary" />
      </a>
      <a
        href="mailto:leogytis@gmail.com"
        className="hover:cursor-pointer text-2xl text-tag hover:text-nav-inactive"
      >
        <SvgGmail className="fill-tag hover:fill-primary" />
      </a>
    </div>
  );
};

export default SocialMedia;
