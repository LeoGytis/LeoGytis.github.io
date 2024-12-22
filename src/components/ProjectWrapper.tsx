import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
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
    <div className="mb-12 lg:p-6 hover_border group">
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="overflow-hidden rounded-lg cursor-pointer h-full hover_border">
          <Image
            src={imageSrc}
            alt={title}
            className="rounded-lg hover:scale-125 ease-out duration-1000 transform origin-top w-[400px] sm:w-[250px]"
          />
        </div>
        <div className="flex flex-col sm:w-2/3">
          <Link
            href={link}
            className="whitespace-nowrap text-lg font-semibold group-hover:text-secondary underline-animation"
          >
            {title}
            <BsLink45Deg className="absolute top-[6px] right-[-20px] text-tag link-icon" />
          </Link>
          <p className="mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            <ToolTags tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
