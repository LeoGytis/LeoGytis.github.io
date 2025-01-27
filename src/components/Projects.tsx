/* eslint-disable react/no-unescaped-entities */
import acertip from "../../public/images/projects/acertip.jpg";
import acterio from "../../public/images/projects/acterio.jpg";
import acterio_api from "../../public/images/projects/acterio_api.jpg";
import braintech from "../../public/images/projects/braintech.jpg";
import brofinity from "../../public/images/projects/brofinity.jpg";
import checkouter from "../../public/images/projects/checkouter.jpg";
import study from "../../public/images/projects/e-study.jpg";
import futbolo_batai from "../../public/images/projects/futbolo_batai.jpg";
import gridster from "../../public/images/projects/gridster.jpg";
import images_hub from "../../public/images/projects/imageshub.jpg";
import ip_royal from "../../public/images/projects/ip_royal.jpg";
import medeja from "../../public/images/projects/medeja.jpg";
import nodeblog from "../../public/images/projects/nodeblog.jpg";
import pz from "../../public/images/projects/pz.jpg";
import sris from "../../public/images/projects/sris.jpg";
import toolster from "../../public/images/projects/toolster.jpg";
import ProjectWrapper from "./ProjectWrapper";

const Projecs: any = () => {
  return (
    <div id="projects">
      <ProjectWrapper
        title="Acertip"
        imageSrc={acertip}
        link="https://acertip.com/"
        description="Acertip is an innovative platform that unites architects, engineers and constructors. Share knowledge, showcase your projects, and easily find the right specialists and companies."
        tags={[
          "Next.js",
          "React",
          "TypeScript",
          "REST API",
          "React-query",
          "React-form",
          "Tailwind",
          "Shadcn",
          "Figma",
          "Jira",
        ]}
      />
      <ProjectWrapper
        title="Acterio"
        imageSrc={acterio}
        link="https://acterio.com/"
        description="Acterio is an all-in-one innovation management platform designed for startups and innovation ecosystems. It offers comprehensive tools for managing and supporting startups, streamlining operations, and fostering community engagement. Features include application tracking, workspace management, networking, event management, and detailed reporting. The platform simplifies administrative tasks and enhances collaboration, making it a valuable resource for innovation hubs."
        tags={[
          "TypeScript",
          "React",
          "REST API",
          "Context",
          "Material UI",
          "Figma",
          "Jira",
          "SCRUM",
        ]}
      />
      <ProjectWrapper
        title="SRIS"
        imageSrc={sris}
        link="https://sris.biip.lt/"
        description="An information system for protected, endangered, and invasive species. Offering data on the plants, animals, and fungal species in the Republic of Lithuania, along with their habitats and locations. Inspectors as well as public users could fill in the form if they spot or would like to track any specie on the list."
        tags={[
          "TypeScript",
          "React",
          "Formik",
          "Redux",
          "React-Router",
          "Styled-Components",
          " Figma",
          "Jira",
        ]}
      />
      <ProjectWrapper
        title="Medėja"
        imageSrc={medeja}
        link="https://medeja.lt/"
        description="An e-shop dedicated to home brewing accessories for wine and beer enthusiasts. The platform offers a wide range of tools and equipment for beginners and experts alike, with a focus on intuitive navigation and seamless shopping. "
        tags={["Prestahop", "JavaScript", "CSS", "Figma"]}
      />
      <ProjectWrapper
        title="Futbolobatai"
        imageSrc={futbolo_batai}
        link="https://futbolobatai.lt/"
        description="Football shoe store with options for all players from you children to adults. Easy browsing, simple user friendly webpage to buy shoes. I was working with WordPress and Elemenetor on this page. Used jquery and PHP to help me with creating optimal user experience."
        tags={["HTML", "CSS", "WordPress", "Elementor", "Jquery", "PHP"]}
      />

      <ProjectWrapper
        title="ImagesHub"
        imageSrc={images_hub}
        link="https://leogytis.github.io/imageshub/"
        description="Project fetches images with Flickr API, implementing both infinite scroll and lazy loading for seamless browsing. It was tested with Jest and includes lazy loading, ensuring images load only when visible on the screen. Users can also favorite items, with favorites persisting across sessions. The design closely mirrors provided screenshots, including hover states."
        tags={["HTML", "CSS", "REST API", "Jest", "React", "TypeScript"]}
      />

      <ProjectWrapper
        title="Nestjs Rest API + Prisma"
        imageSrc={nodeblog}
        link="https://github.com/LeoGytis/nestjs-restapi"
        description="This project is a NestJS-based REST API that implements CRUD operations with a focus on modern web development practices. It integrates JWT-based authentication for secure access, along with modules for user management, bookmarking, and Prisma ORM for database interactions."
        tags={["Node.js", "Nest.js", "Prisma", "Docker", "Jest"]}
      />

      <ProjectWrapper
        title="Node Blog"
        imageSrc={nodeblog}
        link="https://github.com/LeoGytis/node-blog"
        description="
				This is project is made with Node.js and MongoDB This project is built using Node.js and MongoDB, designed to manage a simple blogging platform. It allows users to create, read, update, and delete blog posts. "
        tags={["Node.js", "Express.js", "MongoDB", "JavaScript", "EJS"]}
      />

      <ProjectWrapper
        title="E-Study"
        imageSrc={study}
        link="https://leogytis.github.io/e-study/"
        description="Learning-oriented landing page that showcases my use of various React libraries. It's designed to provide a practical demonstration of React-based web development for educational purposes."
        tags={[
          "TypeScript",
          "React",
          "Styled-Components",
          "React-Icons",
          "React-Scroll",
        ]}
      />

      <ProjectWrapper
        title="Braintech"
        imageSrc={braintech}
        link="https://leogytis.github.io/braintech/"
        description="Educational landing page project was undertaken as part of my coursework at BIT School, signifying an important chapter in my academic journey. It is a practical demonstration of web development, with a focus on using plain JavaScript."
        tags={["HTML", "CSS", "GitHub", "Vanilla.js"]}
      />

      <ProjectWrapper
        title="Checkouter"
        imageSrc={checkouter}
        link="https://leogytis.github.io/checkouter/"
        description="Checkouter is built with Next.js utilizing React for dynamic UI components and Tailwind CSS for styling, ensuring a sleek and responsive design. It features a checkout form tailored for collecting customer details and securely handling credit card credentials."
        tags={[
          "TypeScript ",
          "React",
          "Next.js",
          "Formik",
          "Yup",
          "React-Icons",
          "Tailwind",
          "Figma",
        ]}
      />

      <ProjectWrapper
        title="Royal DashBoard"
        imageSrc={ip_royal}
        link="https://leogytis.github.io/ip_royal/"
        description="Interactive dashboard using Tailwind  and TypeScript to evaluate my skills with Vue.js framework. The project was an excellent opportunity to demonstrate adaptability by quickly gaining proficiency in new technologies."
        tags={["Vue.js", "TypeScript", "Tailwind", "CSS"]}
      />

      <ProjectWrapper
        title="Acterio API"
        imageSrc={acterio_api}
        link="https://github.com/LeoGytis/acterio"
        description="
				In the Acterio project, fetching data from the DummyJSON API involves sending requests to retrieve relevant information for processing. Error handling mechanisms are implemented to gracefully manage instances where the API may be unavailable or return unexpected responses. Next.js is used for efficient dynamic routing."
        tags={["Next.js", "React", "TypeScript", "Tailwind", "API"]}
      />

      <ProjectWrapper
        title="Toolster"
        imageSrc={toolster}
        link="https://leogytis.github.io/toolster/"
        description="
				Toolster is a convenient platform to keep myself informed about the stats I care about. Its customizable features allow me to tailor my experience to suit my specific needs and preferences."
        tags={[
          "React",
          "TypeScript",
          "Next.js",
          "Tailwind",
          "React-Icons",
          "TanStack Query",
        ]}
      />

      <ProjectWrapper
        title="Pieno Žvaigždės"
        imageSrc={pz}
        link="https://pienozvaigzdes.lt/business-solutions-and-ingredients/"
        description="Developed a dynamic B2B products page for seamless access to our offerings by potential business clients. The page prioritizes clarity and ease of navigation, ensuring a smooth user experience."
        tags={["Next.js", "React", "TypeScript", "Tailwind", "CSS"]}
      />

      <ProjectWrapper
        title="Gridster"
        imageSrc={gridster}
        link="https://leogytis.github.io/gridster/"
        description="UI project that involves creating a resizable grid interface. User can set the grid dimensions, interactively mark squares as 'clear' or 'filled'. The project includes a pathfinding algorithm to highlight the shortest path from 'start' to 'end' on the grid."
        tags={["React", "TypeScript", "Styled-Components", "CSS"]}
      />
      <ProjectWrapper
        title="Brofinity"
        imageSrc={brofinity}
        link="https://leogytis.github.io/"
        description="Developed fashion clothing e-commerce site on Shopify, leveraging Liquid to to provide an effortless and visually appealing shopping experience for customers curated collection."
        tags={["Shopify", "Liquid", "JavaScript", "Tailwind"]}
      />
    </div>
  );
};

export default Projecs;
