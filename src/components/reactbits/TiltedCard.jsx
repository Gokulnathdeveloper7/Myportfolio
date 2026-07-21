import { useRef, useState } from 'react';

export default function TiltedCard({
  children,
  className = '',
  rotateAmplitude = 12,
  scaleOnHover = 1.03,
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)');

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateY = ((x - centerX) / centerX) * rotateAmplitude;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  );
}
