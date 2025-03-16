import { generateImagePaths } from '@/utils/generateImagePaths';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ToolTags from '../utils/ToolTags';

interface ProjectProps {
  title: string;
  gallerySrc: string;
  imageCount?: number;
  description: string;
  tags: string[];
  link: string;
}

const Project = ({
  title,
  gallerySrc,
  imageCount,
  link,
  description,
  tags,
}: ProjectProps) => {
  const [open, setOpen] = useState(false);
  const imageSrc = imageCount
    ? `/images/projects/${gallerySrc}/${gallerySrc}01.jpg`
    : `/images/projects/${gallerySrc}.jpg`;
  const slidesSrc = generateImagePaths(gallerySrc, imageCount);

  return (
    <div className="mb-12 lg:p-4 hover_border group hover:bg-background">
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="h-full overflow-hidden rounded-lg cursor-pointer hover_border"
        >
          <Image
            src={imageSrc}
            width={400}
            height={250}
            alt="project_image"
            className="sm:w-[250px] w-[400px] hover:scale-125 ease-out duration-1000 transform origin-top"
          />
        </div>
        <div className="flex flex-col sm:w-2/3">
          <Link
            href={link}
            className="whitespace-nowrap text-xl font-semibold group-hover:text-secondary underline-animation"
          >
            {title}
            <BsLink45Deg className="absolute top-[6px] right-[-20px] text-secondary link-icon" />
          </Link>
          <p className="mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            <ToolTags tags={tags} />
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slidesSrc}
        index={0}
      />
    </div>
  );
};

export default Project;
