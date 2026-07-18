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
        threshold: 0.02,          // trigger almost immediately when it enters
        rootMargin: '0px 0px 150px 0px', // trigger 150px before it even enters the viewport for an early fade-in
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
