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
    rootMargin: '-150px',
    mobileThreshold: 0.5,
    mobileRootMargin: '-50px',
  });
  const imageSrc = imageCount
    ? `/images/projects/${gallerySrc}/${gallerySrc}01.jpg`
    : `/images/projects/${gallerySrc}.jpg`;
  const slidesSrc = generateImagePaths(gallerySrc, imageCount);

  return (
    <div
      ref={elementRef}
      className={cn(
        'p-4 mb-12 lg:mb-24 group',
        inView && 'bg-background shadow-border'
      )}
    >
      <div className="flex w-full gap-6 max-md:flex-col group">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="h-full overflow-hidden rounded-lg cursor-pointer md:w-2/5 group-hover:shadow-border"
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
              'text-white flex items-center gap-1 mb-2 text-xl font-semibold whitespace-nowrap underline-animation',
              inView && 'text-secondary'
            )}
          >
            {title}
            <BsLink45Deg
              className={cn(
                'opacity-0 text-secondary transition-all duration-500 ease-out',
                inView && 'opacity-100'
              )}
            />
          </Link>
          <p className="mb-6">{description}</p>
          {accomplishments && (
            <ul className="mb-3">
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
