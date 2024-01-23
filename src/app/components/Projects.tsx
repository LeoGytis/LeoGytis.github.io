/* eslint-disable react/no-unescaped-entities */
import Project from "./Project";
import pz from "../../../public/images/pz.png";
import brofinity from "../../../public/images/brofinity.png";
import sris from "../../../public/images/sris6.png";
import study from "../../../public/images/e-study.png";
import braintech from "../../../public/images/braintech.png";
import gridster from "../../../public/images/gridster.png";
import ip_royal from "../../../public/images/ip_royal.png";
import futbolo_batai from "../../../public/images/futbolo_batai.png";

const Projecs: any = () => {
	return (
		<div id="projects">
			<Project
				title="SRIS"
				imageSrc={sris}
				link="https://sris.biip.lt/"
				description="An information system for protected, endangered, and invasive species. Offering data on the plants, animals, and fungal species in the Republic of Lithuania, along with their habitats and locations. Inspectors as well as public users could fill in the form if they spot or would like to track any specie on the list."
				tags={[
					"HTML",
					"CSS",
					"React",
					"TypeScript",
					"Formik",
					"Redux",
					"React-Router",
					"Styled-Components",
				]}
			/>
			<Project
				title="Futbolobatai"
				imageSrc={futbolo_batai}
				link="https://futbolobatai.lt/"
				description="Football shoe store with options for all players from you children to adults. Easy browsing, simple user friendly webpage to buy shoes. I was working with WordPress and Elemenetor on this page. Used jquery and PHP to help me with creating optimal user experience."
				tags={[
					"HTML",
					"CSS",
					"WordPress",
					"Jquery",
					"PHP",
				]}
			/>
			<Project
				title="E-Study"
				imageSrc={study}
				link="https://leogytis.github.io/e-study/"
				description="Learning-oriented landing page that showcases my use of various React libraries. It's designed to provide a practical demonstration of React-based web development for educational purposes."
				tags={[
					"React",
					"TypeScript",
					"Styled-Components",
					"React-Icons",
					"React-Scroll",
				]}
			/>

			<Project
				title="Braintech"
				imageSrc={braintech}
				link="https://leogytis.github.io/braintech/"
				description="Educational landing page project was undertaken as part of my coursework at BIT School, signifying an important chapter in my academic journey. It is a practical demonstration of web development, with a focus on using plain JavaScript."
				tags={["HTML", "CSS", "GitHub", "Vanilla.js"]}
			/>

			<Project
				title="Brofinity"
				imageSrc={brofinity}
				link="https://brofinity.com/"
				description="Developed fashion clothing e-commerce site on Shopify, leveraging Liquid to to provide an effortless and visually appealing shopping experience for customers curated collection."
				tags={["Shopify", "Liquid", "JavaScript", "Tailwind"]}
			/>

			<Project
				title="Pieno Žvaigždės"
				imageSrc={pz}
				link="https://pienozvaigzdes.lt/business-solutions-and-ingredients/"
				description="Developed a dynamic B2B products page for seamless access to our offerings by potential business clients. The page prioritizes clarity and ease of navigation, ensuring a smooth user experience."
				tags={["Next.js", "React", "TypeScript", "Tailwind", "CSS"]}
			/>

			<Project
				title="Gridster"
				imageSrc={gridster}
				link="https://leogytis.github.io/gridster/"
				description="UI project that involves creating a resizable grid interface. User can set the grid dimensions, interactively mark squares as 'clear' or 'filled'. The project includes a pathfinding algorithm to highlight the shortest path from 'start' to 'end' on the grid."
				tags={["React", "TypeScript", "Styled-Components", "CSS"]}
			/>

			<Project
				title="IP Royal"
				imageSrc={ip_royal}
				link="https://leogytis.github.io/ip_royal/"
				description="Interactive dashboard using Tailwind  and TypeScript to evaluate my skills with Vue.js framework. The project was an excellent opportunity to demonstrate adaptability by quickly gaining proficiency in new technologies."
				tags={["Vue.js", "TypeScript", "Tailwind", "CSS"]}
			/>
		</div>
	);
};

export default Projecs;
