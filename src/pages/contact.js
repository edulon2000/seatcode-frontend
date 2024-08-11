import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => (
  <div className="contact-page">
    <section className="hero bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Entre em Contato
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg text-gray-200"
      >
        Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
      </motion.p>
    </section>

    <main className="container mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
      >
        <ContactForm />
      </motion.div>
    </main>

    <section className="cta-section bg-gray-100 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Não hesite em nos contactar!
      </motion.h2>
      <p className="text-lg text-gray-600 mb-8">
        Nossa equipe está sempre pronta para ajudar você com qualquer dúvida ou necessidade.
      </p>
    
    </section>
  </div>
);

export default Contact;
