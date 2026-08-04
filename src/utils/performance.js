/**
 * Debounces a function, limiting the rate at which it can fire.
 * Highly useful for performance optimization in event handlers (e.g., resize, scroll).
 * 
 * @param {Function} func The function to debounce.
 * @param {number} wait The delay in milliseconds.
 * @returns {Function} The debounced function.
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttles a function, executing it at most once in every interval.
 * Highly useful for scroll handlers or game loops.
 * 
 * @param {Function} func The function to throttle.
 * @param {number} limit The throttling interval in milliseconds.
 * @returns {Function} The throttled function.
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
