import { useEffect, useState } from 'react';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-2 rounded-full border border-secondary text-white transition-all duration-300 hover:shadow-border cursor-pointer group hover:bg-background ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <RiArrowUpDoubleLine className="w-6 h-6 text-secondary group-hover:text-primary" />
    </button>
  );
};

export default ArrowUp;
