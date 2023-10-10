import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const SocialMedia: any = () => {
  return (
    <div className="flex items-center ml-1 gap-4">
      <a
        href="https://www.facebook.com/divergytis"
        className="hover:cursor-pointer text-2xl text-teal-400 hover:text-emerald-100">
        <BsFacebook />
      </a>
      <a
        href="https://github.com/LeoGytis"
        className="hover:cursor-pointer text-2xl text-teal-400 hover:text-emerald-100">

        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/gytis-leonavicius-74839519a/"
        className="hover:cursor-pointer text-2xl text-teal-400 hover:text-emerald-100">
        <BsLinkedin />
      </a>
      <a
        href="mailto:leogytis@gmail.com"
        className="hover:cursor-pointer text-3xl text-teal-400 hover:text-emerald-100">
        <HiMail />
      </a>
    </div>
  );
};

export default SocialMedia;
