import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import SvgGmail from "../../../public/images/svg/svgGmail";

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
        className="hover:cursor-pointer text-2xl text-tag hover:text-nav-inactive"
      >
        <BsLinkedin className="hover:text-primary" />
      </a>
      <a
        href="mailto:leogytis@gmail.com"
        className="hover:cursor-pointer text-2xl text-tag hover:text-nav-inactive"
      >
        {/* <SiGmail className="hover:text-primary" /> */}
        <SvgGmail
          width={40}
          height={60}
          className="fill-tag mr-3 hover:text-primary"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
