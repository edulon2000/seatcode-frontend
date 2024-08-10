import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => (
  <div>
    
    <main className="container mx-auto py-20 px-4">
      <section className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Entre em Contato
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-600"
        >
          Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
        </motion.p>
      </section>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <ContactForm />
      </motion.div>
    </main>
  </div>
);

export default Contact;
