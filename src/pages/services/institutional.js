import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Institutional = () => (
  <div className="institutional">
    <section className="hero bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Institucional
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Criamos e mantemos sites institucionais que fortalecem a presença online da sua empresa com conteúdo impactante e design responsivo.
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
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Criação e Manutenção de Sites Institucionais</h2>
          <p>
            Desenvolvemos e mantemos sites institucionais de alta qualidade, garantindo que sua empresa se destaque online com um site moderno e funcional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Desenvolvimento de Conteúdo e Estratégias de Comunicação Digital</h2>
          <p>
            Criamos conteúdo impactante e estratégias de comunicação digital que ajudam a construir a identidade da sua marca e engajar seu público.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Design Responsivo e Otimização para Diferentes Dispositivos</h2>
          <p>
            Garantimos que seu site seja responsivo e otimizado para uma ampla gama de dispositivos, proporcionando uma experiência de usuário excelente em qualquer tela.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="cta-section bg-teal-600 py-20 text-center text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Pronto para destacar sua presença online?
      </motion.h2>
      <p className="text-lg mb-8">
        Nossa equipe está aqui para criar um site institucional que represente sua empresa com excelência. Entre em contato e vamos começar!
      </p>
      <Link href="/contact">
        <div className="bg-white text-teal-600 py-2 px-6 rounded transition-transform transform hover:scale-110 cursor-pointer text-lg inline-block max-w-xs mx-auto">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default Institutional;
