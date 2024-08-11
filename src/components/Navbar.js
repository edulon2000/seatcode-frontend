import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'; // Importa o CSS Module

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Função para verificar se o mouse está sobre o nav ou o dropdown
  const handleMouseLeave = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget) &&
      navRef.current &&
      !navRef.current.contains(e.relatedTarget)
    ) {
      setIsServicesOpen(false);
    }
  };

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  return (
    <nav className="bg-black text-white p-4 z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Image
              src="/images/branco.png"
              alt="Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </motion.div>
        </Link>
        <ul className="flex space-x-6 relative" ref={navRef}>
          <motion.li
            whileHover={{ scale: 1.1, color: '#ffffff', y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-300 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services" className={styles.navLink}>
              Services ▾
            </Link>
            {isServicesOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute bg-black shadow-lg z-50" // Remova mt-2
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ top: '100%', marginTop: '-1px' }} // Ajuste a posição
              >
                <li>
                  <Link href="/services/ecommerce" className="block px-4 py-2 hover:bg-gray-700">
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="block px-4 py-2 hover:bg-gray-700">
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/institutional" className="block px-4 py-2 hover:bg-gray-700">
                    Institutional
                  </Link>
                </li>
                <li>
                  <Link href="/services/software" className="block px-4 py-2 hover:bg-gray-700">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="block px-4 py-2 hover:bg-gray-700">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/training" className="block px-4 py-2 hover:bg-gray-700">
                    Training and Capacity Building
                  </Link>
                </li>
                <li>
                  <Link href="/services/erp" className="block px-4 py-2 hover:bg-gray-700">
                    ERP Implementation
                  </Link>
                </li>
              </motion.ul>
            )}
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#ffffff', y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-300"
          >
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#ffffff', y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-300"
          >
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
