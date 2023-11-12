/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import pz from "../../../public/images/pz.png";
import brofinity from "../../../public/images/brofinity.png";
import sris from "../../../public/images/sris.png";
import study from "../../../public/images/study.png";
import braintech from "../../../public/images/braintech.png";
import gridster from "../../../public/images/gridster.png";
import ip_royal from "../../../public/images/ip_royal.png";

const Projecs: any = () => {
  return (
    <div id="projects">
      <div className="mb-12 experience_container ">
        <div className="lg:p-6">
          <a href="https://pienozvaigzdes.lt/business-solutions-and-ingredients/">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image
                src={pz}
                width={500}
                height={500}
                alt="Pieno Zvaigzdes"
                className="sm:w-1/2 rounded self-center sm:self-start"
              />
              <p className="hover:bg-transparent">
                Developed a dynamic B2B products page for seamless access to our
                offerings by potential business clients. The page prioritizes
                clarity and ease of navigation, ensuring a smooth user
                experience.
              </p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="tool_tag">CSS</div>
              <div className="tool_tag">Tailwind</div>
              <div className="tool_tag">TypeScript</div>
              <div className="tool_tag">React</div>
              <div className="tool_tag">Next.js</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://brofinity.com/">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image
                src={brofinity}
                width={500}
                height={500}
                alt="brofinity"
                className="sm:w-1/2 rounded self-center sm:self-start"
              />
              <p className="hover:bg-transparent">
                Developed fashion clothing e-commerce site on Shopify,
                leveraging Liquid to deliver a seamless shopping platform for
                our collection.
              </p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="tool_tag">CSS</div>
              <div className="tool_tag">Tailwind</div>
              <div className="tool_tag">JavaScript</div>
              <div className="tool_tag">Shopify</div>
              <div className="tool_tag">Liquid</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://sris.biip.lt/">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image
                src={sris}
                width={500}
                height={500}
                alt="sris"
                className="sm:w-1/2 rounded self-center sm:self-start"
              />
              <p className="hover:bg-transparent">
                An information system for protected species provided by the
                State Protected Areas Service under the Ministry of Environment,
                offering data on the protected plant, animal, and fungal species
                in the Republic of Lithuania, along with their habitats and
                locations.
              </p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="tool_tag">CSS</div>
              <div className="tool_tag">Styled Components</div>
              <div className="tool_tag">TypeScript</div>
              <div className="tool_tag">React</div>
              <div className="tool_tag">Redux</div>
              <div className="tool_tag">Router</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://leogytis.github.io/e-study/">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image
                src={study}
                width={500}
                height={500}
                alt="study"
                className="sm:w-1/2 rounded self-center sm:self-start"
              />
              <p className="hover:bg-transparent">
                E-Study is a learning-oriented landing page that showcases my
                use of various React libraries. It's designed to provide a
                practical demonstration of React-based web development for
                educational purposes.
              </p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="tool_tag">CSS</div>
              <div className="tool_tag">Styled Components</div>
              <div className="tool_tag">TypeScript</div>
              <div className="tool_tag">React</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://leogytis.github.io/braintech/">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image
                src={braintech}
                width={500}
                height={500}
                alt="braintech"
                className="sm:w-1/2 rounded self-center sm:self-start"
              />
              <p className="hover:bg-transparent">
                Braintech is an educational landing page that showcases my
                utilization of various web development techniques and
                technologies. This project was undertaken as part of my
                coursework at BIT School, signifying an important chapter in my
                academic journey. It offers a practical demonstration of web
                development, with a focus on using plain JavaScript for
                educational purposes.
              </p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="tool_tag">HTML</div>
              <div className="tool_tag">CSS</div>
              <div className="tool_tag">GitHub</div>
              <div className="tool_tag">Vanilla.js</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://leogytis.github.io/gridster/">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image
                src={gridster}
                width={500}
                height={500}
                alt="gridster"
                className="sm:w-1/2 rounded self-center sm:self-start"
              />
              <p className="hover:bg-transparent">
                UI project that involves creating a resizable grid interface.
                Users can set the grid dimensions, and the application generates
                'start' and 'end' points. Users can interactively mark squares
                as 'clear' or 'filled'. The project also includes a pathfinding
                algorithm to highlight the shortest path from 'start' to 'end'
                on the grid, showcasing my UI development and third-party
                library integration skills.
              </p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="tool_tag">CSS</div>
              <div className="tool_tag">StyledComponents</div>
              <div className="tool_tag">TypeScript</div>
              <div className="tool_tag">React</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <a href="https://leogytis.github.io/ip_royal/">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
              <Image
                src={ip_royal}
                width={500}
                height={500}
                alt="ip_royal"
                className="sm:w-1/2 rounded self-center sm:self-start"
              />
              <p className="hover:bg-transparent">
                Exploring Vue.js for the first time, I created a dynamic
                dashboard using Tailwind CSS and TypeScript. This project tested
                my proficiency in a new framework and assessed Tailwind's
                efficiency. The interactive dashboard, with real-time updates,
                showcased a seamless integration of Tailwind CSS, TypeScript,
                and Vue.js, demonstrating adaptability to new technologies.
              </p>
            </div>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="tool_tag">CSS</div>
              <div className="tool_tag">Tailwind</div>
              <div className="tool_tag">TypeScript</div>
              <div className="tool_tag">Vue.js</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projecs;
