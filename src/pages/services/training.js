import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TrainingAndCapacityBuilding = () => (
  <div className="training-and-capacity-building">
    <section className="hero bg-gradient-to-r from-green-500 via-teal-400 to-cyan-500 text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Treinamento e Capacitação
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        Capacite sua equipe com conhecimentos e habilidades essenciais para impulsionar o desenvolvimento e a segurança de suas soluções.
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
          <h2 className="text-2xl font-bold mb-2 text-green-600">Treinamento em Ferramentas e Tecnologias Específicas</h2>
          <p>
            Oferecemos treinamentos especializados em ferramentas e tecnologias específicas para melhorar a eficiência e a competência técnica da sua equipe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="feature-card p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl font-bold mb-2 text-green-600">Capacitação em Boas Práticas de Desenvolvimento e Segurança</h2>
          <p>
            Proporcionamos capacitação em boas práticas de desenvolvimento e segurança, garantindo que sua equipe esteja alinhada com os padrões mais recentes e melhores práticas do setor.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="cta-section bg-green-500 py-20 text-center text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Pronto para capacitar sua equipe para o futuro?
      </motion.h2>
      <p className="text-lg mb-8">
        Entre em contato conosco para saber como nossos treinamentos podem melhorar as habilidades e a eficiência da sua equipe.
      </p>
      <Link href="/contact">
        <div className="bg-white text-green-600 py-2 px-6 rounded transition-transform transform hover:scale-110 cursor-pointer text-lg inline-block max-w-xs mx-auto">
          Fale Conosco
        </div>
      </Link>
    </section>
  </div>
);

export default TrainingAndCapacityBuilding;
