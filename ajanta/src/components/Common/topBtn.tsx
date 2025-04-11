import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const TopButton: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    }
    checkWindowSize();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 ${isMobile ? 'px-2 py-2 text-xs' : 'px-3 py-3 text-base'} bg-red-600 text-white border-none rounded cursor-pointer shadow-md z-[1000]`}
    >
      <FaArrowUp />
    </button>
  );
};

export default TopButton;