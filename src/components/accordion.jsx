"use client"
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
 

function FAQItem({ question, answer, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer mt-5"
        onClick={toggle}
      >
        <h4 className="text-lg font-semibold ">{question}</h4>
        <span className="">{isOpen ? <FaMinus size={15}/> : <FaPlus size={15}/>}</span>
      </div>
 

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
 
export default FAQItem;