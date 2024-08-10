import { motion } from 'framer-motion';

const services = [
  {
    category: 'Desenvolvimento de E-commerce',
    items: [
      'Criação e manutenção de websites.',
      'Desenvolvimento de lojas virtuais.',
      'Otimização de sites para motores de busca (SEO).'
    ]
  },
  {
    category: 'Consultoria em TI',
    items: [
      'Consultoria para otimização de processos e infraestrutura.',
      'Análise e implementação de soluções tecnológicas.',
      'Consultoria em segurança da informação.'
    ]
  },
  {
    category: 'Institucional',
    items: [
      'Criação e manutenção de sites institucionais para empresas e organizações.',
      'Desenvolvimento de conteúdo e estratégias de comunicação digital.',
      'Design responsivo e otimização para diferentes dispositivos.'
    ]
  },
  {
    category: 'Desenvolvimento de Software',
    items: [
      'Desenvolvimento de aplicativos móveis (iOS, Android).',
      'Desenvolvimento de software personalizado.',
      'Desenvolvimento de sistemas web e plataformas SaaS.',
      'Manutenção e suporte de software.'
    ]
  },
  {
    category: 'Serviços em Nuvem',
    items: [
      'Implementação e gerenciamento de soluções em nuvem (AWS, Azure, Google Cloud).',
      'Migração para a nuvem e gerenciamento de recursos.'
    ]
  },
  {
    category: 'Treinamento e Capacitação',
    items: [
      'Treinamento em ferramentas e tecnologias específicas.',
      'Capacitação em boas práticas de desenvolvimento e segurança.'
    ]
  },
  {
    category: 'Implementação de Sistemas ERP',
    items: [
      'Implementação e customização de sistemas ERP para empresas.',
      'Suporte e treinamento para sistemas ERP.'
    ]
  }
];

const ServicesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
      <p className="text-xl">Explore nossos serviços especializados e descubra como podemos ajudar a transformar sua empresa.</p>
    </motion.section>
    
    <div className="space-y-8">
      {services.map((service, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            {service.category}
          </motion.h2>
          <ul className="list-disc list-inside space-y-2">
            {service.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-lg"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
    
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mt-12"
    >
      <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
      <p className="text-lg mb-8">Entre em contato conosco para discutir como podemos ajudar a alcançar seus objetivos.</p>
      <motion.a
        href="/contact"
        className="bg-black text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Fale Conosco
      </motion.a>
    </motion.section>
  </div>
);

export default ServicesPage;
