import { motion } from 'framer-motion';

const TestAnimation = () => (
  <motion.div
    className="w-24 h-24 bg-red-500"
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
  />
);

export default TestAnimation;
