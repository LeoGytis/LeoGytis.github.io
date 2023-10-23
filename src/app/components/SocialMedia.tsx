import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { TbMail } from "react-icons/tb";

const SocialMedia: any = () => {
  return (
    <div className="flex items-center ml-1 gap-4">
      <a
        href="https://www.facebook.com/divergytis"
        className="hover:cursor-pointer text-2xl text-secondary hover:text-primary"
      >
        <BsFacebook />
      </a>
      <a
        href="https://github.com/LeoGytis"
        className="hover:cursor-pointer text-2xl text-secondary hover:text-primary"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/gytis-leonavicius-74839519a/"
        className="hover:cursor-pointer text-2xl text-secondary hover:text-primary"
      >
        <BsLinkedin />
      </a>
      <a
        href="mailto:leogytis@gmail.com"
        className="hover:cursor-pointer text-3xl text-secondary hover:text-primary"
      >
        <HiMail />
      </a>
    </div>
  );
};

export default SocialMedia;
