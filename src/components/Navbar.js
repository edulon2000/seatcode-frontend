import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="bg-black text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" passHref>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Image
            src="/images/branco.png" // Caminho relativo a partir da pasta 'public'
            alt="Logo"
            width={150} // Ajuste conforme necessário
            height={40} // Ajuste conforme necessário
            className="object-contain"
          />
        </motion.div>
      </Link>
      <ul className="flex space-x-4">
      
        <motion.li
          whileHover={{ scale: 1.1, color: '#ffffff', textDecoration: 'underline' }}
          whileTap={{ scale: 0.9 }}
          className="transition-transform duration-300"
        >
          <Link href="/services" className="transition-colors duration-300">
            Services
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: '#ffffff', textDecoration: 'underline' }}
          whileTap={{ scale: 0.9 }}
          className="transition-transform duration-300"
        >
          <Link href="/about" className="transition-colors duration-300">
            About
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: '#ffffff', textDecoration: 'underline' }}
          whileTap={{ scale: 0.9 }}
          className="transition-transform duration-300"
        >
          <Link href="/contact" className="transition-colors duration-300">
            Contact
          </Link>
        </motion.li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
