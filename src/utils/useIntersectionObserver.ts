import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { elementRef, inView };
};
