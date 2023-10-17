import Link from "next/link";
import { BsLink } from "react-icons/bs";

const Experience: any = () => {
  return (
    <div id="experience" className="text-slate-200">
      <div className="mb-12 experience_container">
        <div className="lg:p-6 lg:pt-0">
          <Link id="one" href="https://telesoftas.com/">
            <h1 className="font-bold text-xl hover:bg-transparent pb-3">
              Web Developer
            </h1>
            <h2 className="text-lg hover:bg-transparent">TeleSoftas</h2>
            <div className="text-xs text-slate-400 mb-4 hover:bg-transparent">
              June - September 2023
            </div>
            <p className="text-slate-300 mb-4 hover:bg-transparent">
              Working with an e-commerce projects specializing in products and
              fashion, I was responsible for creating visually engaging and
              responsive web interfaces. This role involved designing
              user-friendly product pages, optimizing site performance, and
              ensuring cross-browser compatibility to enhance the overall online
              shopping experience.
            </p>
            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">HTML</div>
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">Tailwind</div>
              <div className="experience_tag">TypeScript</div>
              <div className="experience_tag">React</div>
              <div className="experience_tag">Next.js</div>
              <div className="experience_tag">GitHub</div>
              <div className="experience_tag">Shopify</div>
              <div className="experience_tag">Liquid</div>
            </div>
          </Link>
        </div>
      </div>
      <div></div>
      <div className="mb-12 experience_container">
        <div className="lg:p-6">
          <Link href="https://am.lrv.lt/en/">
            <h1 className="font-bold text-xl hover:bg-transparent pb-3">
              Front-end Developer
            </h1>
            <h2 className="text-lg hover:bg-transparent">
              Ministry of Environment of the Republic of Lithuania
            </h2>

            <div className="text-xs text-slate-400 mb-4 hover:bg-transparent">
              October 2022 - June 2023
            </div>

            <p className="text-slate-300 mb-4 hover:bg-transparent">
              In my role as a Frontend Developer at the BIIP project, I
              contributed to the development of a user orieanted web
              application, which focused on helping nature supervisors collect
              and review data related to the preservation of nature and the
              study of invasive and endangered species. This work was both
              intriguing and deeply rewarding, as it allowed me to play a
              meaningful role in making a positive impact on our environment.
            </p>
            <div className="flex hover:bg-transparent"></div>

            <div className="tags flex flex-wrap gap-2 hover:bg-transparent">
              <div className="experience_tag">HTML</div>
              <div className="experience_tag">CSS</div>
              <div className="experience_tag">Styled Components</div>
              <div className="experience_tag">TypeScript</div>
              <div className="experience_tag">React</div>
              <div className="experience_tag">Redux</div>
              <div className="experience_tag">Router</div>
              <div className="experience_tag">GitHub</div>
              <div className="experience_tag">Postman</div>
              <div className="experience_tag">Jira</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
