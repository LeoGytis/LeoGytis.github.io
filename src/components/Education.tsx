import { useIntersectionObserver } from '@/utils/useIntersectionObserver';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import SvgBit from '../../public/images/svg/svgBit';
import SvgKtu from '../../public/images/svg/svgKtu';

const Education: any = () => {
  const { elementRef, inView } = useIntersectionObserver({
    threshold: 0.8,
    rootMargin: '0px',
    mobileThreshold: 0.5,
    mobileRootMargin: '-50px',
  });

  return (
    <div
      ref={elementRef}
      id="education"
      className={cn(
        'flex flex-col gap-8 p-4 mb-16 text-lg md:mb-24 scroll-mt-16 hover:shadow-border hover:bg-background',
        inView && 'bg-background shadow-border md:bg-transparent md:shadow-none'
      )}
    >
      <Link
        href="https://en.ktu.edu/"
        className="flex items-center gap-2 group"
      >
        <SvgKtu width={40} height={40} className="mr-3 fill-secondary" />
        <div className="group-hover:text-secondary">
          <div>Kaunas University of Technology</div>
          <p className="text-sm group-hover:text-secondary">
            Bachelor&apos;s degree in Information System Design
          </p>
        </div>
      </Link>

      <Link href="https://bit.lt/" className="flex items-center gap-2 group ">
        <SvgBit width={40} height={40} className="mr-3 fill-secondary" />
        <div className="group-hover:text-secondary">
          <div>Baltic Institute of Technology</div>
          <p className="text-sm group-hover:text-secondary">
            Full-stack developer JavaScript + PHP
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Education;
