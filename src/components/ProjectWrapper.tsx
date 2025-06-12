import { generateImagePaths } from '@/utils/generateImagePaths';
import { useIntersectionObserver } from '@/utils/useIntersectionObserver';
import { cn } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ToolTags from './ToolTags';

interface ProjectProps {
  title: string;
  gallerySrc: string;
  imageCount?: number;
  description: string;
  accomplishments?: string[];
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
  accomplishments,
}: ProjectProps) => {
  const [open, setOpen] = useState(false);
  const { elementRef, inView } = useIntersectionObserver({
    threshold: 0.8,
    rootMargin: '0px',
  });
  const imageSrc = imageCount
    ? `/images/projects/${gallerySrc}/${gallerySrc}01.jpg`
    : `/images/projects/${gallerySrc}.jpg`;
  const slidesSrc = generateImagePaths(gallerySrc, imageCount);

  return (
    <div
      ref={elementRef}
      className={cn(
        'p-4 mb-12 lg:mb-24 hover:shadow-border group hover:bg-background',
        inView && 'bg-background shadow-border md:bg-transparent md:shadow-none'
      )}
    >
      <div className="flex w-full gap-6 max-md:flex-col">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="h-full overflow-hidden rounded-lg cursor-pointer md:w-2/5 shadow-border"
        >
          <Image
            src={imageSrc}
            width={500}
            height={250}
            alt="project_image"
            className="w-full duration-1000 ease-out transform hover:scale-125"
          />
        </div>
        <div className="flex flex-col flex-1">
          <Link
            href={link}
            className={cn(
              'mb-2 text-xl font-semibold whitespace-nowrap group-hover:text-secondary underline-animation',
              inView && 'text-secondary'
            )}
          >
            {title}
            <BsLink45Deg
              className={cn(
                'absolute top-[6px] right-[-20px] text-secondary link-icon group-hover:visible group-hover:underline-animation',
                inView &&
                  'text-secondary opacity-100 visible underline-animation'
              )}
            />
          </Link>
          <p className="mb-3">{description}</p>
          {accomplishments && (
            <ul className="mb-3 list-disc_">
              {accomplishments.map((accomplishment, index) => (
                <li
                  key={index}
                  className="px-2 py-1 mb-1 border-b rounded-lg border-secondary"
                >
                  {accomplishment}
                </li>
              ))}
            </ul>
          )}
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
