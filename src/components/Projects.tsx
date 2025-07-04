import ProjectWrapper from './ProjectWrapper';

const Projects: any = () => {
  return (
    <div id="projects">
      <ProjectWrapper
        title="Acertip"
        gallerySrc="acertip"
        imageCount={7}
        link="https://acertip.com/"
        description="Acertip is an innovative platform that unites architects, engineers and constructors. Share knowledge, showcase your projects, and easily find the right specialists and companies.      "
        // accomplishments={[
        //   'React Query for efficient data fetching and caching',
        //   'Comprehensive user profile management system',
        //   'Advanced form handling with React Hook Form and Zod validation',
        //   'Interactive talents and projects filtering system',
        //   'Image cropping and uploading functionality using CropperJS',
        //   'Modern, clean UI with Shadcn and Tailwind',
        //   'Responsive design for all screen sizes',
        //   'Carousel/slider functionality',
        //   'Smooth scrolling functionality',
        //   'Questionnaire, answer, and voting functionality for interactive user engagement',
        // ]}
        tags={[
          'TypeScript',
          'React',
          'Next.js',
          'Swagger',
          'RestAPI',
          'TanStack Query',
          'React Hook Form',
          'Zod',
          'Shadcn',
          'Tailwind',
          'Figma',
          'Jira',
        ]}
      />
      <ProjectWrapper
        title="Acterio"
        gallerySrc="acterio"
        imageCount={3}
        link="https://acterio.com/"
        description="Acterio is an all-in-one innovation management platform designed for startups and innovation ecosystems. It offers comprehensive tools for managing and supporting startups, streamlining operations, and fostering community engagement. Features include application tracking, workspace management, networking, event management, and detailed reporting. The platform simplifies administrative tasks and enhances collaboration, making it a valuable resource for innovation hubs."
        tags={[
          'TypeScript',
          'React',
          'REST API',
          'Context',
          'Material UI',
          'Figma',
          'Jira',
          'SCRUM',
        ]}
      />

      <ProjectWrapper
        title="SRIS"
        gallerySrc="sris"
        imageCount={3}
        link="https://sris.biip.lt/"
        description="An information system for protected, endangered, and invasive species. Offering data on the plants, animals, and fungal species in the Republic of Lithuania, along with their habitats and locations. Inspectors as well as public users could fill in the form if they spot or would like to track any specie on the list."
        tags={[
          'TypeScript',
          'React',
          'Formik',
          'Redux',
          'React-Router',
          'Styled-Components',
          'Figma',
          'Jira',
        ]}
      />

      <ProjectWrapper
        title="Medėja"
        gallerySrc="medeja"
        imageCount={4}
        link="https://medeja.lt/"
        description="An e-shop dedicated to home brewing accessories for wine and beer enthusiasts. The platform offers a wide range of tools and equipment for beginners and experts alike, with a focus on intuitive navigation and seamless shopping. "
        tags={['Prestahop', 'JavaScript', 'CSS', 'HTML', 'Figma']}
      />

      <ProjectWrapper
        title="Futbolobatai"
        gallerySrc="futbolobatai"
        imageCount={4}
        link="https://futbolobatai.lt/"
        description="Football shoe store with options for all players from you children to adults. Easy browsing, simple user friendly webpage to buy shoes. I was working with WordPress and Elemenetor on this page. Used jquery and PHP to help me with creating optimal user experience."
        tags={['HTML', 'CSS', 'WordPress', 'Elementor', 'Jquery', 'PHP']}
      />

      <ProjectWrapper
        title="E-Study"
        gallerySrc="e-study"
        imageCount={5}
        link="https://leogytis.github.io/e-study/"
        description="Learning-oriented landing page that showcases my use of various React libraries. It's designed to provide a practical demonstration of React-based web development for educational purposes."
        tags={[
          'TypeScript',
          'React',
          'Styled-Components',
          'React-Icons',
          'React-Scroll',
        ]}
      />

      <ProjectWrapper
        title="Elastic"
        imageCount={13}
        gallerySrc="elastic"
        link="https://leogytis.github.io/elastic/"
        description="This project provides a stylish responsive landing page built with React, Tailwind, and TypeScript. It showcases a clean and modern design with a focus on user experience and responsiveness."
        tags={['HTML', 'CSS', 'Figma', 'TypeScript', 'React']}
      />

      <ProjectWrapper
        title="Shift Mind"
        imageCount={9}
        gallerySrc="shift_mind"
        link="https://leogytis.github.io/shift_mind/"
        description="This project provides a stylish and functional checkout payment modal built with Next.js, utilizing React Hook Form for form handling and Zod for validation. The modal is designed to streamline the checkout experience with a clean, user-friendly interface."
        tags={['HTML', 'CSS', 'GitHub', 'Figma', 'TypeScript', 'Next.js']}
      />

      <ProjectWrapper
        title="Braintech"
        gallerySrc="braintech"
        imageCount={10}
        link="https://leogytis.github.io/braintech/"
        description="Educational landing page project was undertaken as part of my coursework at BIT School, signifying an important chapter in my academic journey. It is a practical demonstration of web development, with a focus on using plain JavaScript."
        tags={['HTML', 'CSS', 'GitHub', 'Vanilla.js']}
      />

      <ProjectWrapper
        title="Betsy"
        gallerySrc="betsy"
        imageCount={4}
        link="https://github.com/LeoGytis/betsy"
        description="This web-based betting platform lets users place bets, track transactions, and manage accounts with real-time balance updates via WebSocket. Authentication is handled with JWT and stored in LocalStorage for persistence. Forms use React Hook Form with Zod validation, while API requests are managed through reusable services. Users can filter bets and transactions in a responsive UI styled with Tailwind, featuring a theme switcher for light/dark modes."
        tags={[
          'Node.js',
          'Express.js',
          'Websockets',
          'REST API',
          'Next.js',
          'React',
          'TypeScript',
          'React Hook Form',
          'TypeScript',
          'Tailwind',
        ]}
      />
      <ProjectWrapper
        title="Nestjs RestAPI"
        gallerySrc="nestjs_restapi"
        link="https://github.com/LeoGytis/nestjs-restapi"
        description="This project is a NestJS based REST API that implements CRUD operations with a focus on modern web development practices. It integrates JWT-based authentication for secure access, along with modules for user management, bookmarking, and Prisma ORM for database interactions."
        tags={['Node.js', 'Nest.js', 'Prisma', 'Docker', 'Jest', 'JWT']}
      />
      <ProjectWrapper
        title="Node.js Blog"
        gallerySrc="node_blog"
        link="https://github.com/LeoGytis/node-blog"
        description="
				This is project is made with Node.js and MongoDB This project is built using Node.js and MongoDB, designed to manage a simple blogging platform. It allows users to create, read, update, and delete blog posts. "
        tags={['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'EJS']}
      />
      {/* <ProjectWrapper
        title="Table Manager"
        gallerySrc="table_manager"
        link="https://github.com/LeoGytis/table-manager"
        description="
				Table Manager is a web-based application for managing and visualizing tabular data. It provides an interactive table view with filtering, sorting, and column customization, as well as a chart visualization mode."
        tags={[
          'Next.js',
          'React',
          'Tanstack Query',
          'Tanstack Table',
          'ReCharts',
          'Tailwind',
          'React Icons',
        ]}
      /> */}
      {/* <ProjectWrapper
        title="Checkouter"
        gallerySrc="checkouter"
        link="https://leogytis.github.io/checkouter/"
        description="Checkouter is built with Next.js utilizing React for dynamic UI components and Tailwind CSS for styling, ensuring a sleek and responsive design. It features a checkout form tailored for collecting customer details and securely handling credit card credentials."
        tags={[
          'TypeScript ',
          'React',
          'Next.js',
          'Formik',
          'Yup',
          'React-Icons',
          'Tailwind',
          'Figma',
        ]}
      /> */}
      {/* <ProjectWrapper
        title="Royal DashBoard"
        gallerySrc="ip_royal"
        link="https://leogytis.github.io/ip_royal/"
        description="Interactive dashboard using Tailwind  and TypeScript to evaluate my skills with Vue.js framework. The project was an excellent opportunity to demonstrate adaptability by quickly gaining proficiency in new technologies."
        tags={['Vue.js', 'TypeScript', 'Tailwind', 'CSS']}
      /> */}
      {/* <ProjectWrapper
        title="Acterio API"
        gallerySrc="acterio_api"
        link="https://github.com/LeoGytis/acterio"
        description="
				In the Acterio project, fetching data from the DummyJSON API involves sending requests to retrieve relevant information for processing. Error handling mechanisms are implemented to gracefully manage instances where the API may be unavailable or return unexpected responses. Next.js is used for efficient dynamic routing."
        tags={['Next.js', 'React', 'TypeScript', 'Tailwind', 'API']}
      /> */}
      {/* <ProjectWrapper
        title="Toolster"
        gallerySrc="toolster"
        link="https://leogytis.github.io/toolster/"
        description="
				Toolster is a convenient platform to keep myself informed about the stats I care about. Its customizable features allow me to tailor my experience to suit my specific needs and preferences."
        tags={[
          'React',
          'TypeScript',
          'Next.js',
          'Tailwind',
          'React-Icons',
          'TanStack Query',
        ]}
      /> */}
      {/* <ProjectWrapper
        title="Pieno Žvaigždės"
        gallerySrc="pz"
        link="https://pienozvaigzdes.lt/business-solutions-and-ingredients/"
        description="Developed a dynamic B2B products page for seamless access to our offerings by potential business clients. The page prioritizes clarity and ease of navigation, ensuring a smooth user experience."
        tags={['Next.js', 'React', 'TypeScript', 'Tailwind', 'CSS']}
      /> */}
      {/* <ProjectWrapper
        title="Gridster"
        gallerySrc="gridster"
        link="https://leogytis.github.io/gridster/"
        description="UI project that involves creating a resizable grid interface. User can set the grid dimensions, interactively mark squares as 'clear' or 'filled'. The project includes a pathfinding algorithm to highlight the shortest path from 'start' to 'end' on the grid."
        tags={['React', 'TypeScript', 'Styled-Components', 'CSS']}
      /> */}
      <ProjectWrapper
        title="ImagesHub"
        gallerySrc="images_hub"
        link="https://leogytis.github.io/imageshub/"
        description="Project fetches images with Flickr API, implementing both infinite scroll and lazy loading for seamless browsing. It was tested with Jest and includes lazy loading, ensuring images load only when visible on the screen. Users can also favorite items, with favorites persisting across sessions. The design closely mirrors provided screenshots, including hover states."
        tags={['HTML', 'CSS', 'REST API', 'Jest', 'React', 'TypeScript']}
      />
      <ProjectWrapper
        title="Brofinity"
        gallerySrc="brofinity"
        link="https://leogytis.github.io/"
        description="Developed fashion clothing e-commerce site on Shopify, leveraging Liquid to to provide an effortless and visually appealing shopping experience for customers curated collection."
        tags={['Shopify', 'Liquid', 'JavaScript', 'Tailwind']}
      />
    </div>
  );
};

export default Projects;
