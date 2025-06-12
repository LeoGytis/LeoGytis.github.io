import { useIntersectionObserver } from '@/utils/useIntersectionObserver';
import { cn } from '@/utils/utils';

const About: any = () => {
  const { elementRef, inView } = useIntersectionObserver({
    threshold: 0.8,
    rootMargin: '0px',
    mobileThreshold: 0.5,
    mobileRootMargin: '-50px',
  });

  return (
    <div
      ref={elementRef}
      id="about"
      className={cn(
        'flex flex-col gap-4 p-4 mb-16 text-lg md:mb-20 hover:shadow-border hover:bg-background',
        inView && 'bg-background shadow-border md:bg-transparent md:shadow-none'
      )}
    >
      <p>
        I have experience developing web applications, from simple landing pages
        to progressive web applications. I strive to create software that not
        only functions efficiently under the hood, but also provides intuitive,
        pixel-perfect user experiences.
      </p>
      <p>
        I love learning new and better ways to create seamless user experiences
        with clean, efficient and scalable code. I consider work an ongoing
        education, and I am always looking for opportunities to work with those
        who are willing to share their knowledge as much as I want to learn. At
        the end of the day, my primary goal is to create something beautiful
        with people that bring out the best in me.
      </p>
      <p>At my free time I am out in the woods or swimming.</p>
    </div>
  );
};

export default About;
