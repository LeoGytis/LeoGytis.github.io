/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import pz from "../../../public/images/pz.png";
import brofinity from "../../../public/images/brofinity.png";
import sris from "../../../public/images/sris.png";
import study from "../../../public/images/study.png";
import braintech from "../../../public/images/braintech.png";
import gridster from "../../../public/images/gridster.png";

const Projecs: any = () => {
  return (
    <div id="projects" className="text-slate-200">
      <div className="mb-12 experience_container ">
        <div className="lg:p-6">
          <a href="https://pienozvaigzdes.lt/business-solutions-and-ingredients/">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image src={pz} width={500} height={500} alt="Pieno Zvaigzdes" className="w-4/5 sm:w-1/3 rounded self-center sm:self-start" />
              <p className="hover:bg-transparent">Developed a dynamic B2B products page for seamless access to our offerings by potential business clients. The page prioritizes clarity and ease of navigation, ensuring a smooth user experience.</p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">Tailwind</div>
              <div className="experience_tag">TypeScript</div>
              <div className="experience_tag">React</div>
              <div className="experience_tag">Next.js</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://brofinity.com/">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image src={brofinity} width={500} height={500} alt="brofinity" className="w-4/5 sm:w-1/3 rounded self-center sm:self-start" />
              <p className="hover:bg-transparent">Developed fashion clothing e-commerce site on Shopify, leveraging Liquid to deliver a seamless shopping platform for our collection.</p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">Tailwind</div>
              <div className="experience_tag">TypeScript</div>
              <div className="experience_tag">React</div>
              <div className="experience_tag">Next.js</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://sris.biip.lt/">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image src={sris} width={500} height={500} alt="sris" className="w-4/5 sm:w-1/3 rounded self-center sm:self-start" />
              <p className="hover:bg-transparent">An information system for protected species provided by the State Protected Areas Service under the Ministry of Environment, offering data on the protected plant, animal, and fungal species in the Republic of Lithuania, along with their habitats and locations.</p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">Styled Components</div>
              <div className="experience_tag">TypeScript</div>
              <div className="experience_tag">React</div>
              <div className="experience_tag">Redux</div>
              <div className="experience_tag">Router</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://leogytis.github.io/education/">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image src={study} width={500} height={500} alt="study" className="w-4/5 sm:w-1/3 rounded self-center sm:self-start" />
              <p className="hover:bg-transparent">E-Study is a learning-oriented landing page that showcases my use of various React libraries. It's designed to provide a practical demonstration of React-based web development for educational purposes.</p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">Styled Components</div>
              <div className="experience_tag">TypeScript</div>
              <div className="experience_tag">React</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://front-end-by-rimantas.github.io/35-grupe-portfolio-braintech/">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image src={braintech} width={500} height={500} alt="braintech" className="w-4/5 sm:w-1/3 rounded self-center sm:self-start" />
              <p className="hover:bg-transparent">Braintech is an educational landing page that showcases my utilization of various web development techniques and technologies. This project was undertaken as part of my coursework at BIT School, signifying an important chapter in my academic journey. It offers a practical demonstration of web development, with a focus on using plain JavaScript for educational purposes.</p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">HTML</div>
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">GitHub</div>
              <div className="experience_tag">Vanilla.js</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://leogytis.github.io/gridster/">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image src={gridster} width={500} height={500} alt="gridster" className="w-4/5 sm:w-1/3 rounded self-center sm:self-start" />
              <p className="hover:bg-transparent">UI project that involves creating a resizable grid interface. Users can set the grid dimensions, and the application generates 'start' and 'end' points. Users can interactively mark squares as 'clear' or 'filled'. The project also includes a pathfinding algorithm to highlight the shortest path from 'start' to 'end' on the grid, showcasing my UI development and third-party library integration skills.</p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">StyledComponents</div>
              <div className="experience_tag">TypeScript</div>
              <div className="experience_tag">React</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Projecs;
