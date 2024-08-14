import React from 'react';
import { motion } from 'framer-motion';

const Services = () => (
  <section className="services py-20 bg-gray-100 z-50">
    <div className="container mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8"
      >
        Nossos Serviços
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-4">Consultoria em TI</h3>
          <p>
            Consultoria para otimização de processos e infraestrutura, análise e implementação de soluções tecnológicas e segurança da informação.
          </p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-4">Desenvolvimento de Software</h3>
          <p>
            Desenvolvimento de aplicativos móveis, software personalizado, sistemas web e plataformas SaaS, além de manutenção e suporte.
          </p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-4">Serviços em Nuvem</h3>
          <p>
            Implementação e gerenciamento de soluções em nuvem, migração para a nuvem e gerenciamento de recursos.
          </p>
        </motion.div>

        {/* Service 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-4">Treinamento e Capacitação</h3>
          <p>
            Treinamento em ferramentas e tecnologias específicas e capacitação em boas práticas de desenvolvimento e segurança.
          </p>
        </motion.div>

        {/* Service 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform"
        >
          <h3 className="text-2xl font-semibold mb-4">Implementação de Sistemas ERP</h3>
          <p>
            Implementação e customização de sistemas ERP para empresas, além de suporte e treinamento para sistemas ERP.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Services;
