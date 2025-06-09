import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BsLink45Deg } from 'react-icons/bs';

interface ExperienceProps {
  imageSrc: StaticImageData;
  title: string;
  link: string;
  role: string;
  date: string;
  description: string;
}

const ExperienceWrapper = ({
  imageSrc,
  title,
  link,
  role,
  date,
  description,
}: ExperienceProps) => {
  const elementRef = useIntersectionObserver({
    threshold: 0.8,
    rootMargin: '0px',
  });

  return (
    <div
      ref={elementRef}
      className="p-4 mb-12 shadow-border group hover:bg-background"
    >
      <div className="flex gap-4 mb-4">
        <Image src={imageSrc} alt={title} className="w-16 h-16 rounded" />
        <div>
          <Link
            href={link}
            className="text-xl font-semibold w-fit md:whitespace-nowrap group-hover:text-secondary in-view:text-secondary underline-animation"
          >
            {title}
            <BsLink45Deg className="absolute top-[6px] right-[-20px] text-secondary link-icon" />
          </Link>
          <h2>{role}</h2>
          <h5 className="text-xs">{date}</h5>
        </div>
      </div>
      <p className="mb-4 text-lg font-light">{description}</p>
    </div>
  );
};

export default ExperienceWrapper;
