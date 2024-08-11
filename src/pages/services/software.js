import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SoftwareDevelopment = () => (
  <div className="software-development">
    <section className="hero bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Desenvolvimento de Software
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Criamos soluções digitais inovadoras, desde aplicativos móveis até sistemas complexos e personalizados.
      </motion.p>
    </section>

    <section className="features-section py-20 bg-gray-100 text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-indigo-600">Aplicativos Móveis (iOS, Android)</h2>
          <p>
            Desenvolvemos aplicativos móveis intuitivos e robustos para as principais plataformas, garantindo uma experiência do usuário excepcional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-indigo-600">Software Personalizado</h2>
          <p>
            Criamos soluções de software sob medida para atender às necessidades específicas do seu negócio, com foco em desempenho e escalabilidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-indigo-600">Sistemas Web e Plataformas SaaS</h2>
          <p>
            Desenvolvemos sistemas web avançados e plataformas SaaS que oferecem flexibilidade, segurança e integração perfeita com outros serviços.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-indigo-600">Manutenção e Suporte de Software</h2>
          <p>
            Oferecemos serviços contínuos de manutenção e suporte para garantir que seu software esteja sempre atualizado e funcionando sem problemas.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="cta-section bg-indigo-600 py-20 text-center text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Pronto para elevar seu software ao próximo nível?
      </motion.h2>
      <p className="text-lg mb-8">
        Nossa equipe está pronta para criar soluções que impulsionem o crescimento do seu negócio. Entre em contato e comece hoje!
      </p>
      <Link href="/contact">
        <div className="bg-white text-indigo-600 py-2 px-6 rounded transition-transform transform hover:scale-110 cursor-pointer text-lg inline-block max-w-xs mx-auto">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default SoftwareDevelopment;
