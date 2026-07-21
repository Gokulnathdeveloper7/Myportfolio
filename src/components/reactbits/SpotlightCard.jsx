import { useRef } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(59, 130, 246, 0.15)',
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg ${className}`}
      style={{
        '--spotlight-color': spotlightColor,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--spotlight-color), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
