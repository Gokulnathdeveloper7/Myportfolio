import { useEffect } from 'react';

/**
 * Custom hook to trigger scroll-based fade/slide animations.
 * @param {string} selector - CSS selector of elements to observe (default: '.reveal')
 * @param {Object} options - IntersectionObserver configurations
 */
export default function useIntersectionObserver(selector = '.reveal', options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once it reveals, we stop observing it to lock its state and avoid duplicate animations
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [selector, options]);
}
