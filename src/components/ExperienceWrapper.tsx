import { useIntersectionObserver } from '@/utils/useIntersectionObserver';
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
    rootMargin: '-150px',
    mobileThreshold: 0.5,
    mobileRootMargin: '-50px',
  });

  return (
    <div
      ref={elementRef}
      className={cn('p-4 mb-12 group', inView && 'bg-background shadow-border')}
    >
      <div className="flex gap-4 mb-4">
        <Image src={imageSrc} alt={title} className="w-16 h-16 rounded" />
        <div>
          <Link
            href={link}
            className={cn(
              'text-white flex items-center gap-1 text-xl font-semibold whitespace-nowrap underline-animation',
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
          <h2>{role}</h2>
          <h5 className="text-xs">{date}</h5>
        </div>
      </div>
      <p className="mb-4 text-lg font-light">{description}</p>
    </div>
  );
};

export default ExperienceWrapper;
