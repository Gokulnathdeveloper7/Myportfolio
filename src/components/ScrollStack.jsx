import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollStack({ children }) {
  return (
    <div className="relative w-full flex flex-col items-center gap-10 py-20">
      {React.Children.map(children, (child, i) => (
        <ScrollStackItem key={i} index={i} total={React.Children.count(children)}>
          {child}
        </ScrollStackItem>
      ))}
    </div>
  );
}

function ScrollStackItem({ children, index, total }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start top"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sticky top-24 w-full"
    >
      {children}
    </motion.div>
  );
}
