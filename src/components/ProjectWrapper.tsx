import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ToolTags from "../utils/ToolTags";

interface ProjectProps {
  title: string;
  imageSrc: StaticImageData;
  imageCount?: number;
  description: string;
  tags: string[];
  link: string;
}

const Project = ({
  title,
  imageSrc,
  imageCount = 1,
  link,
  description,
  tags,
}: ProjectProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Generate image paths dynamically based on the imagesToDisplay
  const images = Array.from({ length: imageCount }, (_, i) => ({
    src: `/images/projects/${title.toLowerCase()}/${title.toLowerCase()}${(
      i + 1
    )
      .toString()
      .padStart(2, "0")}.jpg`,
    alt: `Image ${i + 1}`,
  }));

  console.log("🔥 :: images ::", images);

  return (
    <div className="mb-12 lg:p-6 hover_border group">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div
          onClick={() => {
            setIndex(1);
            setOpen(true);
          }}
          className="overflow-hidden rounded-lg cursor-pointer h-full hover_border"
        >
          <Image
            src={imageSrc}
            alt="project_image"
            className="rounded-lg hover:scale-125 ease-out duration-1000 transform origin-top w-[400px] sm:w-[250px]"
          />
        </div>
        <div className="flex flex-col sm:w-2/3">
          <Link
            href={link}
            className="whitespace-nowrap text-xl font-semibold group-hover:text-secondary underline-animation"
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
