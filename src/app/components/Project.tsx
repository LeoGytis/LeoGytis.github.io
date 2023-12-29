// ExperienceCard.js

import Image from "next/image";
import { StaticImageData } from "next/image";
import ToolTags from "../utils/ToolTags";

interface ProjectProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Project = ({
  title,
  imageSrc,
  link,
  description,
  tags,
}: ProjectProps) => {
  return (
    <div className="mb-12 experience_container">
      <div className="lg:p-6">
        <a href={link}>
          <div className="flex flex-row gap-4 mb-2 sm:mb-4 hover:bg-transparent">
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt={title}
              className="sm:w-1/2 rounded self-center sm:self-start hover:scale-110 ease-out duration-500 mr-5"
            />
            <div>
              <p className="hover:bg-transparent mb-3">{description}</p>
              <ToolTags tags={tags} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
