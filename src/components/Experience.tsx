import acertip from "../../public/images/experience/acertip.jpg";
import acterio from "../../public/images/experience/acterio.jpg";
import aplinkos_ministerija from "../../public/images/experience/aplinkos_ministerija.jpg";
import elnis from "../../public/images/experience/elnis.jpg";
import telesoftas from "../../public/images/experience/telesoftas.png";
import ExperienceWrapper from "./ExperienceWrapper";

const Experience = () => {
  return (
    <div id="experience">
      <ExperienceWrapper
        imageSrc={acertip}
        title="Acertip"
        link="https://www.acertip.com/"
        role="Front-end Developer"
        date="2024 August - present"
        description="As a Front-End Developer at Acertip, I took on a broad range of responsibilities to build the platform from scratch, given its early-stage development. I implemented REST API integrations, developed forms, and created custom hooks to enhance functionality. By adhering to Figma designs and collaborating with the team, I ensured the platform aligned with UX/UI best practices, delivering an intuitive and visually cohesive user experience."
      />
      <ExperienceWrapper
        imageSrc={acterio}
        title="Acterio"
        link="https://www.acterio.com/"
        role="Front-end Developer Intership"
        date="2024 March - June"
        description="I contribute to the creation of a user-friendly platform that centralizes and streamlines the management of innovation ecosystems. My role involves implementing intuitive user interfaces, ensuring smooth navigation, and optimizing the user experience across various devices. By collaborating with designers and backend developers, I help bring innovative features to life, empowering administrators to focus on value creation within their ecosystems."
      />
      <ExperienceWrapper
        imageSrc={elnis}
        title="Elnis"
        link="https://www.elnis.lt/"
        role="Web Developer"
        date="2023 October - March"
        description="Developing user-friendly e-commerce webpages: Optimizing accessibility and usability across various devices through responsive design principles. Enhancing online transactions and user engagement by integrating advanced features and functionalities."
      />
      <ExperienceWrapper
        imageSrc={telesoftas}
        title="TeleSoftas"
        link="https://telesoftas.com/"
        role="Web Developer"
        date="2023 June - September"
        description="Worked on e-commerce projects specializing in products and fashion, creating visually engaging and responsive web interfaces. Designed user-friendly product pages, optimized site performance, and ensured cross-browser compatibility to enhance the overall online shopping experience."
      />
      <ExperienceWrapper
        imageSrc={aplinkos_ministerija}
        title="Ministry of Environment of the Republic of Lithuania"
        link="https://am.lrv.lt/lt/"
        role="Front-end Developer"
        date="2022 October - 2023 June"
        description="	In my role as a Frontend Developer at the BIIP project, I contributed to the development of a	user orieanted web application, which focused on helping nature supervisors collect and review data related to the preservation of nature and the study of invasive and endangered species. This work was both intriguing and deeply rewarding, as it allowed me to play a meaningful role in making a positive impact on our environment."
      />
    </div>
  );
};

export default Experience;
