import { useEffect } from 'react';

const ScrollRouter = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      const targetId = e.target.getAttribute('href')?.slice(1);
      if (targetId) {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return null;
};

export default ScrollRouter;
