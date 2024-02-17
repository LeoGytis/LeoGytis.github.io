import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";

const SocialMedia: any = () => {
	return (
		<div className="flex items-center ml-1 gap-4 blur-animation">
			<SocialMediaLink icon={FaInstagram} href="https://www.instagram.com/leogytis" />
			<SocialMediaLink icon={FaFacebookF} href="https://www.facebook.com/divergytis" />
			<SocialMediaLink icon={FaLinkedinIn} href="https://www.linkedin.com/in/gytis-leonavicius-74839519a/" />
			<SocialMediaLink icon={FaGithub} href="https://github.com/LeoGytis" />
			<SocialMediaLink icon={FaPaperPlane} href="mailto:leogytis@gmail.com" />
		</div>
	);
};

export default SocialMedia;

interface SocialMediaLinkProps {
	icon: React.ElementType;
	href: string;
}

const SocialMediaLink = ({ icon: Icon, href }: SocialMediaLinkProps) => {
	return (
		<a href={href} className="border border-tag rounded-full p-2">
			<Icon className="text-lg text-tag hover:cursor-pointer hover:text-primary" />
		</a>
	);
};
