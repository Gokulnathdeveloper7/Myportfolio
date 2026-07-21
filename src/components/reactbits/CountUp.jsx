import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num) => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeout = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat('en-US', {
          minimumFractionDigits: maxDecimals,
          maximumFractionDigits: maxDecimals,
        }).format(latest.toFixed(maxDecimals));

        if (separator) {
          ref.current.textContent = formatted.replace(/,/g, separator);
        } else {
          ref.current.textContent = formatted;
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, maxDecimals, separator]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const target = direction === 'down' ? from : to;
      if (Math.abs(latest - target) < 0.01) {
        if (typeof onEnd === 'function') onEnd();
        unsubscribe();
      }
    });
    return () => unsubscribe();
  }, [springValue, direction, from, to, onEnd]);

  return <span ref={ref} className={className}>{from}</span>;
}
