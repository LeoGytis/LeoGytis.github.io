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
    <div className="mb-12 lg:p-6 hover_border">
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="overflow-hidden rounded cursor-pointer">
          <Image
            src={imageSrc}
            width={300}
            height={300}
            alt={title}
            className="rounded hover:scale-125 ease-out duration-1000 transform"
          />
        </div>
        <div className="flex flex-col gap-3 sm:w-2/3">
          <p>{description}</p>
          <a href={link}>Project link</a>
          <div className="flex flex-wrap gap-2">
            <ToolTags tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
