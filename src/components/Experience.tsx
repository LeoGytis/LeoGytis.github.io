import acterio from '../../public/images/experience/acterio.jpg';
import elnis from '../../public/images/experience/elnis.jpg';
import telesoftas from '../../public/images/experience/telesoftas.png';
import aplinkos_ministerija from '../../public/images/experience/aplinkos_ministerija.jpg';
import ExperienceWrapper from './ExperienceWrapper';

const Experience: any = () => {
	return (
		<div id="experience">
			<ExperienceWrapper
				imageSrc={acterio}
				title="Acterio"
				link="https://www.acterio.com/"
				role="Front-end Developer Intership"
				date="2024 March - present"
				description="I contribute to the creation of a user-friendly platform that centralizes and streamlines the management of innovation ecosystems. My role involves implementing intuitive user interfaces, ensuring smooth navigation, and optimizing the user experience across various devices. By collaborating with designers and backend developers, I help bring innovative features to life, empowering administrators to focus on value creation within their ecosystems."
				tags={['HTML', 'CSS', 'Material UI', 'React', 'TypeScript', ' Figma']}
			/>
			<ExperienceWrapper
				imageSrc={elnis}
				title="Elnis"
				link="https://www.elnis.lt/"
				role="Web Developer"
				date="2023 October - present"
				description="Developing user-friendly e-commerce webpages: Optimizing accessibility and usability across various devices through responsive design principles. Enhancing online transactions and user engagement by integrating advanced features and functionalities."
				tags={['HTML', 'CSS', 'Jquery', 'PHP', 'WordPress', 'PrestaShop', 'Paymo']}
			/>
			<ExperienceWrapper
				imageSrc={telesoftas}
				title="TeleSoftas"
				link="https://telesoftas.com/"
				role="Web Developer"
				date="2023 June - September"
				description="Worked on e-commerce projects specializing in products and fashion, creating visually engaging and responsive web interfaces. Designed user-friendly product pages, optimized site performance, and ensured cross-browser compatibility to enhance the overall online shopping experience."
				tags={['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Next.js', 'GitHub', 'Shopify', 'Liquid']}
			/>
			<ExperienceWrapper
				imageSrc={aplinkos_ministerija}
				title="Ministry of Environment of the Republic of Lithuania"
				link="https://am.lrv.lt/lt/"
				role="Front-end Developer"
				date="2022 October - 2023 June"
				description="	In my role as a Frontend Developer at the BIIP project, I contributed to the development of a	user orieanted web application, which focused on helping nature supervisors collect and review data related to the preservation of nature and the study of invasive and endangered species. This work was both intriguing and deeply rewarding, as it allowed me to play a meaningful role in making a positive impact on our environment."
				tags={[
					'HTML',
					'CSS',
					'Styled-Components',
					'TypeScript',
					'React',
					'Redux',
					'React Router',
					'Formik',
					'GitHub',
					'Postman',
					'Jira',
				]}
			/>
		</div>
	);
};

export default Experience;
