import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from "react-icons/tb";

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
        className="hover:cursor-pointer text-[1.75rem] text-tag hover:text-nav-inactive"
      >
        <RiMailSendLine className="hover:text-primary" />
      </a>
    </div>
  );
};

export default SocialMedia;
