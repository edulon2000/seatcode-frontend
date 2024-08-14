import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.img
        src="/images/branco.png"  // Caminho para sua logo
        alt="Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="h-60 w-80"
      />
    </div>
  );
};

export default Preloader;
