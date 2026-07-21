import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function AnimatedList({
  children,
  className = '',
  delay = 100,
  staggerFrom = 'first',
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = Array.isArray(children) ? children : [children];
  const orderedItems = staggerFrom === 'last' ? [...items].reverse() : items;

  return (
    <div ref={ref} className={className}>
      {orderedItems.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.4,
            delay: i * (delay / 1000),
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
