import Image from 'next/image';
import { motion } from 'framer-motion';
import { subtle } from 'crypto';
const values = [
  {
    title: 'Ownership',
    description: 'We empower individuals to take responsibility for their work, driving progress with confidence and accountability.'
  },
  {
    title: 'Results',
    description: 'We prioritize delivering tangible outcomes and measurable success, ensuring that our actions and decisions consistently lead to positive results.'
  },
  {
    title: 'Feedback',
    description: 'We value open, honest and constructive feedback, fostering a culture of continuous improvement and growth.'
  },
  {
    title: 'Improvement',
    description: 'We actively seek opportunities for growth and refinement, continuously enhancing ourselves to better serve others.'
  }
];
const AboutUs = () => (
  <div className="about-us-container">
    {/* Seção de Introdução */}
    <section className="hero-section bg-black text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Bridging the gap between US companies and remote talent in Latin America
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg mt-4"
      >
        At Seatcode, we're reshaping how US companies collaborate with remote developers...
      </motion.p>
    </section>

    {/* Seção de Valores */}
    <section className="values-section py-20 bg-white text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="value-card p-4 shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{value.title}</h2>
            <p>
              {/* Texto descritivo sobre o valor */}
              {value.description}
              </p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Seção de História */}
    <section className="history-section py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Our History</h2>
        <p>
          Seatcode was founded by entrepreneurs...
        </p>
      </motion.div>
    </section>

    {/* Seção de Liderança */}
    <section className="leadership-section py-20 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4 text-center">Leadership</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: 'Eduardo Costa', title: 'CEO & CTO',subtle:'Co-founder', image: '/images/edu.jpeg' },
          { name: 'João Pedro', title: 'COO & CXO Co-founder',subtle:'Co-founder', image: '/images/joao.jpg' },
          { name: 'Maria Dolores', title: 'CMO & CSO Co-founder',subtle:'Co-founder', image: '/images/dolores.jpg' },
          // Adicione outros membros
        ].map((leader, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="leader-card text-center"
          >
            <Image
              src={leader.image}
              alt={leader.name}
              width={150}
              height={150}
              className="rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">{leader.name}</h3>
            <p className="text-sm text-gray-600">{leader.title}</p>
            <p className="text-sm text-gray-600">{leader.subtle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default AboutUs;
