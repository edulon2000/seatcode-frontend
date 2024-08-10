import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EcommerceDevelopment = () => (
  <div className="ecommerce-development">
    <section className="hero bg-black text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Desenvolvimento de E-commerce
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Soluções completas para criar e gerenciar sua loja virtual com eficiência e segurança.
      </motion.p>
    </section>

    <section className="features-section py-20 bg-white text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-4 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-2">Criação e manutenção de websites</h2>
          <p>
            Desenvolvemos sites personalizados, focados na experiência do usuário, desempenho e segurança.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-4 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-2">Desenvolvimento de lojas virtuais</h2>
          <p>
            Criamos plataformas de e-commerce sob medida, com funcionalidades que atendem às necessidades do seu negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-4 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-2">Otimização de sites para motores de busca (SEO)</h2>
          <p>
            Maximize a visibilidade do seu site nos motores de busca, atraindo mais visitantes e aumentando suas vendas.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="cta-section bg-gray-200 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Pronto para transformar seu negócio online?
      </motion.h2>
      <p className="text-lg mb-8">
        Entre em contato com nossa equipe e descubra como podemos ajudar você a alcançar o sucesso no comércio eletrônico.
      </p>
      <Link href="/contact">
        <div className="bg-black text-white py-2 px-4 rounded transition-transform transform hover:scale-105 cursor-pointer">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default EcommerceDevelopment;
