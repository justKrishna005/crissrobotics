import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every `.scroll-reveal` element
 * within the current page. Once an element enters the viewport it gets
 * the `.visible` class — and it is NEVER removed (permanent reveal).
 *
 * Uses a MutationObserver to pick up dynamically added elements,
 * so we only need a single mount (empty dependency array) rather than
 * re-running on every render.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: '0px 0px 150px 0px',
      }
    );

    // Observe all existing .scroll-reveal elements
    const observeAll = () => {
      document.querySelectorAll('.scroll-reveal:not(.visible)').forEach((el) => io.observe(el));
    };

    // Small initial delay so the first render's DOM is ready
    const timer = setTimeout(observeAll, 50);

    // Watch for dynamically added elements (e.g. tab content, lazy loaded sections)
    const mo = new MutationObserver((mutations) => {
      let hasNewNodes = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          hasNewNodes = true;
          break;
        }
      }
      if (hasNewNodes) observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      io.disconnect();
      mo.disconnect();
    };
  }, []); // Runs once on mount — MutationObserver handles dynamic elements
};

export default useScrollReveal;
