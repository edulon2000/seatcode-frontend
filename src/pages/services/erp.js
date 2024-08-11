import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ERPImplementation = () => (
  <div className="erp-implementation">
    <section className="hero bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Implementação de Sistemas ERP
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Soluções completas para a implementação e customização de sistemas ERP, além de suporte contínuo e treinamento especializado.
      </motion.p>
    </section>

    <section className="features-section py-20 bg-gray-100 text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Implementação e Customização de Sistemas ERP</h2>
          <p>
            Auxiliamos na implementação e customização de sistemas ERP para atender às necessidades específicas de sua empresa, otimizando processos e integração.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Suporte e Treinamento para Sistemas ERP</h2>
          <p>
            Oferecemos suporte contínuo e treinamento especializado para garantir que sua equipe utilize o sistema ERP de forma eficiente e eficaz.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="cta-section bg-blue-600 py-20 text-center text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Pronto para transformar seus processos empresariais com um ERP eficiente?
      </motion.h2>
      <p className="text-lg mb-8">
        Entre em contato conosco para saber como podemos implementar e personalizar um sistema ERP que atenda às suas necessidades.
      </p>
      <Link href="/contact">
        <div className="bg-white text-blue-600 py-2 px-6 rounded transition-transform transform hover:scale-110 cursor-pointer text-lg inline-block max-w-xs mx-auto">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default ERPImplementation;
