import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  mobileThreshold?: number;
  mobileRootMargin?: string;
}

export const useIntersectionObserver = (options: IntersectionOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: isMobile
          ? options.mobileThreshold ?? options.threshold
          : options.threshold,
        rootMargin: isMobile
          ? options.mobileRootMargin ?? options.rootMargin
          : options.rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, isMobile]);

  return { elementRef, inView };
};
