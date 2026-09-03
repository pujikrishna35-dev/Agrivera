import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      if (currentScroll > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Near the very top, always show navbar
      if (currentScroll <= 60) {
        setVisible(true);
      } else {
        const delta = currentScroll - lastScrollY;
        // Require at least 8px delta to prevent jitters/bounce
        if (delta > 8) {
          // Scrolling down -> hide navbar
          setVisible(false);
        } else if (delta < -8) {
          // Scrolling up -> display navbar
          setVisible(true);
        }
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, scrollY, visible };
};
