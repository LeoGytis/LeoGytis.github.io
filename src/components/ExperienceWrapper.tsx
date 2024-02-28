import Link from "next/link";
import ToolTags from "../utils/ToolTags";
import Image, { StaticImageData } from "next/image";
import elnis from "../../public/images/experience/elnis.jpg";
import telesoftas from "../../public/images/experience/telesoftas.png";
import aplinkos_ministerija from "../../public/images/experience/aplinkos_ministerija.png";
import { BsLink45Deg } from "react-icons/bs";

interface ExperienceProps {
	imageSrc: StaticImageData;
	title: string;
	link: string;
	role: string;
	date: string;
	description: string;
	tags: string[];
}

const ExperienceWrapper = ({ imageSrc, title, link, role, date, description, tags }: ExperienceProps) => {
	return (
		<div className="mb-12 hover_border group">
			<div className="lg:p-6">
				<div className="flex gap-4 mb-4">
					<Image src={imageSrc} alt={title} className="w-16 h-16 rounded" />
					<div className="">
						<Link
							href={link}
							className="whitespace-nowrap text-xl group-hover:text-secondary underline-animation"
						>
							{title}
							<BsLink45Deg className="absolute top-[6px] right-[-20px] text-tag link-icon" />
						</Link>
						<h2>{role}</h2>
						<h5 className="text-xs">{date}</h5>
					</div>
				</div>
				<p className="mb-4">{description}</p>
				<div className="flex"></div>
				<ToolTags tags={tags} />
			</div>
		</div>
	);
};

export default ExperienceWrapper;
