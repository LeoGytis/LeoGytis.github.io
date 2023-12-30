/* eslint-disable react/no-unescaped-entities */
import Project from "./Project";
import pz from "../../../public/images/pz.png";
import brofinity from "../../../public/images/brofinity.png";
import sris from "../../../public/images/sris6.png";
import study from "../../../public/images/e-study.png";
import braintech from "../../../public/images/braintech.png";
import gridster from "../../../public/images/gridster.png";
import ip_royal from "../../../public/images/ip_royal.png";

const Projecs: any = () => {
  return (
    <div id="projects">
      <Project
        title="SRIS"
        imageSrc={sris}
        link="https://sris.biip.lt/"
        description="An information system for protected, endangered, and invasive species. Offering data on the plants, animals, and fungal species in the Republic of Lithuania, along with their habitats and locations. Inspectors as well as public users could fill in the form if they spot or would like to track any specie on the list."
        tags={[
          "React",
          "TypeScript",
          "Formik",
          "Redux",
          "React-Router",
          "StyledComponents",
        ]}
      />
      <Project
        title="E-Study"
        imageSrc={study}
        link="https://leogytis.github.io/e-study/"
        description="E-Study is a learning-oriented landing page that showcases my use of various React libraries. It's designed to provide a practical demonstration of React-based web development for educational purposes."
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
        description="Braintech is an educational landing page that showcases my utilization of various web development techniques and technologies. This project was undertaken as part of my coursework at BIT School, signifying an important chapter in my academic journey. It offers a practical demonstration of web development, with a focus on using plain JavaScript for educational purposes."
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
        description="UI project that involves creating a resizable grid interface. Users can set the grid dimensions, and the application generates 'start' and 'end' points. Users can interactively mark squares as 'clear' or 'filled'. The project also includes a pathfinding algorithm to highlight the shortest path from 'start' to 'end' on the grid, showcasing my UI development and third-party library integration skills."
        tags={["React", "TypeScript", "Styled-Components", "CSS"]}
      />

      <Project
        title="IP Royal"
        imageSrc={ip_royal}
        link="https://leogytis.github.io/ip_royal/"
        description="Exploring Vue.js for the first time, I created a dynamic dashboard using Tailwind CSS and TypeScript. This project tested my proficiency in a new framework and assessed Tailwind's efficiency. The interactive dashboard, with real-time updates, showcased a seamless integration of Tailwind CSS, TypeScript, and Vue.js, demonstrating adaptability to new technologies."
        tags={["Vue.js", "TypeScript", "Tailwind", "CSS"]}
      />
    </div>
  );
};

export default Projecs;
