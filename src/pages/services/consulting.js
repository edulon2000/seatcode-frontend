import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ITConsulting = () => (
  <div className="it-consulting">
    <section className="hero bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Consultoria em TI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Oferecemos consultoria especializada para otimizar processos, implementar soluções tecnológicas e garantir a segurança da informação.
      </motion.p>
    </section>

    <section className="features-section py-20 bg-gray-100 text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-orange-600">Otimização de Processos e Infraestrutura</h2>
          <p>
            Melhoramos a eficiência dos seus processos e infraestrutura de TI, garantindo maior desempenho e redução de custos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-orange-600">Soluções Tecnológicas</h2>
          <p>
            Analisamos e implementamos soluções tecnológicas personalizadas para atender às necessidades específicas do seu negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-orange-600">Segurança da Informação</h2>
          <p>
            Garantimos a proteção dos seus dados e sistemas com consultoria especializada em segurança da informação.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="cta-section bg-orange-600 py-20 text-center text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Queremos ajudar a transformar seu negócio com tecnologia?
      </motion.h2>
      <p className="text-lg mb-8">
        Nossa equipe de consultores está pronta para oferecer as melhores soluções. Entre em contato e vamos começar!
      </p>
      <Link href="/contact">
        <div className="bg-white text-orange-600 py-2 px-6 rounded transition-transform transform hover:scale-110 cursor-pointer text-lg inline-block max-w-xs mx-auto">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default ITConsulting;
