import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const useBannerMotion = () => {
  const sectionControls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    async function seq() {
      await sectionControls.start({
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 80 },
      });
      await Promise.all([
        leftControls.start({
          opacity: 1,
          x: -500,
          transition: { duration: 1, type: 'keyframes', stiffness: 300, damping: 80 },
        }),
        rightControls.start({
          opacity: 1,
          x: 500,
          transition: { duration: 1, type: 'keyframes', stiffness: 300, damping: 80 },
        }),
      ]);
    }

    seq();
  }, [sectionControls, leftControls, rightControls]);

  return { sectionControls, leftControls, rightControls };
};

export default useBannerMotion;
