import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const defaultFrom = useMemo(() => (
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: -30 }
      : { filter: 'blur(10px)', opacity: 0, y: 30 }
  ), [direction]);

  const defaultTo = useMemo(() => ({
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
  }), []);

  const from = animationFrom || defaultFrom;
  const to = animationTo || defaultTo;

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={from}
          animate={inView ? to : from}
          transition={{
            duration: 0.5,
            delay: i * (delay / 1000),
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          onAnimationComplete={() => {
            if (i === elements.length - 1 && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
          className="inline-block will-change-[filter,opacity,transform]"
          style={{ marginRight: animateBy === 'words' ? '0.3em' : undefined }}
        >
          {el}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
