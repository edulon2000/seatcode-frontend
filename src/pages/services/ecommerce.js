import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EcommerceDevelopment = () => (
  <div className="ecommerce-development">
    <section className="hero bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Desenvolvimento de E-commerce
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Soluções completas para criar, gerenciar e otimizar sua loja virtual e presença online.
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
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Criação e Manutenção de Websites</h2>
          <p>
            Desenvolvemos websites modernos e funcionais, garantindo a melhor experiência de usuário e manutenção contínua.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Desenvolvimento de Lojas Virtuais</h2>
          <p>
            Criamos lojas virtuais personalizadas, com integração de métodos de pagamento, gerenciamento de produtos e muito mais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Otimização para Motores de Busca (SEO)</h2>
          <p>
            Melhoramos a visibilidade do seu site em mecanismos de busca, aumentando o tráfego e as vendas.
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
        Pronto para transformar sua presença online?
      </motion.h2>
      <p className="text-lg mb-8">
        Estamos aqui para ajudar a criar um e-commerce de sucesso. Fale conosco e comece sua jornada digital hoje!
      </p>
      <Link href="/contact">
        <div className="bg-white text-teal-600 py-2 px-6 rounded transition-transform transform hover:scale-110 cursor-pointer text-lg inline-block max-w-xs mx-auto">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default EcommerceDevelopment;
