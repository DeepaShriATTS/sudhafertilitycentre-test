import { useEffect } from "react";

/**
 * useFocusTrap
 * 
 * Traps keyboard focus within a DOM container.
 * Crucial for modals, dialogs, and slide-out menus to comply with WCAG 2.1 Accessibility guidelines.
 * Focus cannot escape the trapped container while active, ensuring screen readers and keyboard users
 * do not navigate back into underlying page content.
 * 
 * @param {React.RefObject} containerRef The ref of the container element to trap focus inside.
 * @param {boolean} active Whether the focus trap is currently active.
 */
export function useFocusTrap(containerRef, active = true) {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;
    
    // Find all focusable element selectors
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])'
    ].join(',');

    const focusableElements = container.querySelectorAll(focusableSelectors);
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Store the element that was focused before entering the trap
    const previousFocusedElement = document.activeElement;

   

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab: if on the first element, go to the last element
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab: if on the last element, go to the first element
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
      // Restore focus when component unmounts
      if (previousFocusedElement && typeof previousFocusedElement.focus === "function") {
        previousFocusedElement.focus();
      }
    };
  }, [active, containerRef]);
}
