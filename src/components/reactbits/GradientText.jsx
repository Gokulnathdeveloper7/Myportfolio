import { useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'motion/react';

export default function GradientText({
  children,
  className = '',
  colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#3B82F6'],
  animationSpeed = 8,
  showBorder = false,
}) {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    const fullCycle = animationDuration * 2;
    const cycleTime = elapsedRef.current % fullCycle;
    if (cycleTime < animationDuration) {
      progress.set(cycleTime / animationDuration);
    } else {
      progress.set(1 - (cycleTime - animationDuration) / animationDuration);
    }
  });

  const gradientStr = colors.join(', ');

  return (
    <span
      className={`relative inline-flex ${showBorder ? 'py-1 px-3 rounded-2xl' : ''} ${className}`}
    >
      {showBorder && (
        <motion.span
          className="absolute inset-0 rounded-2xl z-0"
          style={{
            background: `linear-gradient(90deg, ${gradientStr})`,
            backgroundSize: '300% 100%',
            backgroundPositionX: progress,
            opacity: 0.15,
          }}
        />
      )}
      <motion.span
        className="relative z-10 bg-clip-text text-transparent font-inherit"
        style={{
          backgroundImage: `linear-gradient(90deg, ${gradientStr})`,
          backgroundSize: '300% 100%',
          backgroundPositionX: progress,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
