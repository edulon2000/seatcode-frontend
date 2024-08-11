import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CloudServices = () => (
  <div className="cloud-services">
    <section className="hero bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Serviços em Nuvem
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Soluções completas para a implementação, gerenciamento e migração para a nuvem, assegurando eficiência e escalabilidade para o seu negócio.
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
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Implementação e Gerenciamento de Soluções em Nuvem</h2>
          <p>
            Oferecemos serviços de implementação e gerenciamento para AWS, Azure e Google Cloud, garantindo que suas soluções na nuvem sejam eficientes e seguras.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Migração para a Nuvem e Gerenciamento de Recursos</h2>
          <p>
            Facilitamos a migração dos seus sistemas para a nuvem e gerenciamos seus recursos para otimizar o desempenho e reduzir custos.
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
        Pronto para elevar sua infraestrutura para a nuvem?
      </motion.h2>
      <p className="text-lg mb-8">
        Entre em contato com nossa equipe para explorar como podemos ajudar na implementação e gerenciamento das suas soluções em nuvem.
      </p>
      <Link href="/contact">
        <div className="bg-white text-blue-600 py-2 px-6 rounded transition-transform transform hover:scale-110 cursor-pointer text-lg inline-block max-w-xs mx-auto">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default CloudServices;
