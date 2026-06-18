import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SuccessMessage = ({ show, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (show) {
      setProgress(0); // Reset progress bar
      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 2 : 100));
      }, 60);

      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center relative w-80"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={onClose}
            >
              ×
            </button>

            {/* Success Message */}
            <p className="text-black text-lg font-semibold">Hello, thank you for reaching out. Our team will contact you shortly</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessMessage;
