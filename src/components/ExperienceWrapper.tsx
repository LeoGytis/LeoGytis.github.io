import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/utils';
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
  const { elementRef, inView } = useIntersectionObserver({
    threshold: 0.8,
    rootMargin: '0px',
  });

  console.log('🔥 : inView =>', inView);

  return (
    <div
      ref={elementRef}
      className={cn(
        'p-4 mb-12 hover:shadow-border group hover:bg-background',
        inView && 'md:bg-transparent md:shadow-none bg-background shadow-border'
      )}
    >
      <div className="flex gap-4 mb-4">
        <Image src={imageSrc} alt={title} className="w-16 h-16 rounded" />
        <div>
          <Link
            href={link}
            className={cn(
              'text-xl font-semibold w-fit md:whitespace-nowrap group-hover:text-secondary underline-animation',
              inView && 'text-secondary !text-red-300'
            )}
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
