import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const useBannerMotion = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const sectionControls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const titleControls = useAnimation();
  const descriptionControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    async function seq() {
      await Promise.all([
        sectionControls.start({
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 80 },
        }),
        titleControls.start({
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: 300, damping: 80 },
        }),
        descriptionControls.start({
          opacity: 1,
          x: 0,
          transition: { type: 'spring', stiffness: 300, damping: 80 },
        }),
      ]);
      await Promise.all([
        leftControls.start({
          opacity: 1,
          x: -800,
          transition: { duration: 1, type: 'keyframes', stiffness: 300, damping: 80 },
        }),
        rightControls.start({
          opacity: 1,
          x: 800,
          transition: { duration: 1.5, type: 'keyframes', stiffness: 300, damping: 80 },
        }),
      ]);
    }

    seq();
  }, [sectionControls, leftControls, rightControls, titleControls, descriptionControls]);

  const handleClick = async () => {
    if (isClicked) {
      navigate('/weekly_magazine');
      return;
    }

    await Promise.all([
      imageControls.start({
        opacity: 1,
        y: -112,
        height: '573px',
        clipPath: 'inset(0%)',
        transition: { duration: 1, type: 'spring', stiffness: 300, damping: 80 },
      }),
      titleControls.start({
        opacity: 0,
        transition: { duration: 0.6 },
      }),
      descriptionControls.start({
        opacity: 0,
        transition: { duration: 0.6 },
      }),
    ]);

    setIsClicked(true);

    await Promise.all([
      titleControls.start({ opacity: 1, transition: { duration: 0.6 } }),
      descriptionControls.start({ opacity: 1, transition: { duration: 0.6 } }),
    ]);
  };

  return {
    isClicked,
    handleClick,
    sectionControls,
    leftControls,
    rightControls,
    titleControls,
    descriptionControls,
    imageControls,
  };
};

export default useBannerMotion;
