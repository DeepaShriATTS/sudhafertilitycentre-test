import { useEffect } from "react";

/**
 * useKeyboardShortcut
 * 
 * Binds a callback to a specific keyboard shortcut.
 * Commonly used to bind "Escape" key events to close modals, or "Enter"/"Space" key events for non-native components.
 * 
 * @param {string} key The keyboard key to listen for (e.g., "Escape").
 * @param {Function} callback The function to execute when the key is pressed.
 * @param {boolean} active Whether the listener is active.
 */
export function useKeyboardShortcut(key, callback, active = true) {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e) => {
      if (e.key === key) {
        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback, active]);
}
