import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Collapse = ({ in: isOpen, children }) => {
return (
    <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            >
            {children}
            </motion.div>
        )}
    </AnimatePresence>
);
};

export default Collapse;