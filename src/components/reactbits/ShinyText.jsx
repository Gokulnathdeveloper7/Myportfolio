export default function ShinyText({
  children,
  className = '',
  speed = 3,
  disabled = false,
}) {
  return (
    <span
      className={`inline-block bg-clip-text ${disabled ? '' : 'animate-shiny'} ${className}`}
      style={{
        backgroundImage: disabled
          ? 'none'
          : 'linear-gradient(120deg, rgba(59,130,246,0) 40%, rgba(59,130,246,0.8) 50%, rgba(59,130,246,0) 60%)',
        backgroundSize: '200% 100%',
        WebkitTextFillColor: disabled ? undefined : 'transparent',
        WebkitBackgroundClip: 'text',
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
}
