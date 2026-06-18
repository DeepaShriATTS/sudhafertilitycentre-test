import { AnimatePresence,motion} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const FadeMotion = ({
  initialOpacity = 0,
  finalOpacity = 9,
  duration = 8,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); 
        }
      },
      {
        threshold: 0.2, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        ref={elementRef}
        initial={{ opacity: initialOpacity }}
        animate={{ opacity: isVisible ? finalOpacity : initialOpacity }}
        exit={{ opacity: initialOpacity }} // Smooth exit animation
        transition={{
          duration: duration,
          opacity: { ease: 'easeInOut' }, // Ensure smooth opacity transition
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeMotion;
