import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every `.scroll-reveal` element
 * within the current page. Once an element enters the viewport it gets
 * the `.visible` class — and it is NEVER removed (permanent reveal).
 *
 * Safe to call on every render: elements that already have `.visible`
 * are skipped immediately since they stop being observed after first trigger.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing — element stays visible forever
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,          // trigger when 12% of the element is visible
        rootMargin: '0px 0px -40px 0px', // slightly before the bottom edge
      }
    );

    // Small delay so newly-rendered DOM elements are available
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.visible)');
      elements.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }); // No dependency array — runs after every render to pick up new elements
};

export default useScrollReveal;
