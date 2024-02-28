import Link from "next/link";
import ToolTags from "../utils/ToolTags";
import Image from "next/image";
import elnis from "../../public/images/experience/elnis.jpg";
import telesoftas from "../../public/images/experience/telesoftas.png";
import aplinkos_ministerija from "../../public/images/experience/aplinkos_ministerija.png";

const Experience: any = () => {
	return (
		<div id="experience">
			<div className="mb-12 hover_border">
				<div className="lg:p-6">
					<div className="flex gap-4">
						<Image src={elnis} alt="elnis" className="w-20 h-20 rounded" />
						<div>
							<Link href="https://telesoftas.com/" className="inline-block text-xl hover:text-secondary">
								Elnis
							</Link>
							<h2 className="text-lg">Web Developer</h2>
							<h5 className="text-xs mb-4">2023 October - present</h5>
						</div>
					</div>
					<p className="mb-4">
						Currently working on e-commerce projects, specializing in diverse product categories, I am
						responsible for crafting visually engaging and responsive web interfaces. In this role, I design
						user-friendly product pages and ensure cross-browser compatibility to enhance the overall online
						shopping experience.
					</p>
					<ToolTags tags={["HTML", "CSS", "Jquery", "PHP", "WordPress", "PrestaShop", "Paymo"]} />
				</div>
			</div>
			<div className="mb-12 hover_border">
				<div className="lg:p-6">
					<div className="flex gap-4">
						<Image src={telesoftas} alt="elnis" className="w-20 h-20 rounded" />
						<div>
							<Link href="https://telesoftas.com/" className="inline-block text-xl hover:text-secondary">
								TeleSoftas
							</Link>
							<h2 className="text-lg">Web Developer</h2>
							<h5 className="text-xs mb-4">2023 June - September</h5>
						</div>
					</div>
					<p className="mb-4">
						Working with an e-commerce projects specializing in products and fashion, I was responsible for
						creating visually engaging and responsive web interfaces. This role involved designing
						user-friendly product pages, optimizing site performance, and ensuring cross-browser
						compatibility to enhance the overall online shopping experience.
					</p>
					<ToolTags
						tags={[
							"HTML",
							"CSS",
							"Tailwind",
							"TypeScript",
							"React",
							"Next.js",
							"GitHub",
							"Shopify",
							"Liquid",
						]}
					/>
				</div>
			</div>
			<div className="mb-12 hover_border">
				<div className="lg:p-6">
					<div className="flex gap-4">
						<Image src={aplinkos_ministerija} alt="elnis" className="w-20 h-20 rounded" />
						<div className="">
							<Link href="https://telesoftas.com/" className="inline-block text-xl hover:text-secondary">
								Ministry of Environment of the Republic of Lithuania
							</Link>
							<h2 className="font-medium text-xl">Front-end Developer</h2>
							<h5 className="text-xs mb-4">October 2022 - June 2023</h5>
						</div>
					</div>
					<p className="mb-4">
						In my role as a Frontend Developer at the BIIP project, I contributed to the development of a
						user orieanted web application, which focused on helping nature supervisors collect and review
						data related to the preservation of nature and the study of invasive and endangered species.
						This work was both intriguing and deeply rewarding, as it allowed me to play a meaningful role
						in making a positive impact on our environment.
					</p>
					<div className="flex"></div>

					<ToolTags
						tags={[
							"HTML",
							"CSS",
							"Styled-Components",
							"TypeScript",
							"React",
							"Redux",
							"React Router",
							"Formik",
							"GitHub",
							"Postman",
							"Jira",
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
