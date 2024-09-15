import { useState, useEffect } from 'react';


const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button 
      className={`back-to-top ${visible ? 'visible' : ''}`} 
      onClick={scrollToTop}
    >
      &#8679; {/* Unicode for up arrow */}
    </button>
  );
};

export default BackToTopButton;
