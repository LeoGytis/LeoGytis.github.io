/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import SvgKtu from "../../../public/images/svg/svgKtu";
import SvgBit from "../../../public/images/svg/svgBit";

const Education: any = () => {
	return (
		<div className="blur-animation">
			<div
				id="education"
				className="flex flex-col gap-8 text-lg lg:p-6 mb-16 md:mb-24 scroll-mt-16 hover_border"
			>
				<Link
					href="https://en.ktu.edu/"
					className="flex items-center gap-2 group"
				>
					<SvgKtu width={40} height={40} className="fill-tag mr-3" />
					<div className="group-hover:text-secondary">
						<div>Kaunas University of Technology</div>
						<p className="text-sm group-hover:text-secondary">
							Bachelor's degree in Information System Design
						</p>
					</div>
				</Link>

				<Link
					href="https://bit.lt/"
					className="flex items-center gap-2 group"
				>
					<SvgBit width={40} height={40} className="fill-tag mr-3" />
					<div className="group-hover:text-secondary">
						<div>Baltic Institute of Technology</div>
						<p className="text-sm group-hover:text-secondary">
							Full-stack developer JavaScript + PHP
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Education;
