import { BsGithub, BsFacebook } from "react-icons/bs";
import SvgGmail from "../../public/images/svg/svgGmail";
import SvgLinkedIn from "../../public/images/svg/svgLinkedIn";

const SocialMedia: any = () => {
	return (
		<div className="flex items-center ml-1 gap-4 blur-animation">
			<a href="https://www.facebook.com/divergytis" className=" ">
				<BsFacebook className="text-2xl text-tag hover:cursor-pointer hover:text-primary" />
			</a>
			<a href="https://github.com/LeoGytis">
				<BsGithub className="text-2xl text-tag hover:cursor-pointer hover:text-primary" />
			</a>

			<a href="https://www.linkedin.com/in/gytis-leonavicius-74839519a/">
				<SvgLinkedIn className="w-7 text-[1.7rem] fill-tag hover:cursor-pointer hover:fill-primary" />
			</a>
			<a href="mailto:leogytis@gmail.com">
				<SvgGmail className="text-2xl fill-tag hover:cursor-pointer hover:fill-primary" />
			</a>
		</div>
	);
};

export default SocialMedia;
