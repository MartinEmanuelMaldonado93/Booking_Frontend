import { Variants, motion } from 'framer-motion';
import { FaBed, FaCar, FaMosque, FaPlane, FaTaxi } from 'react-icons/fa';

function RecreationOptions() {
  const parentVariant: Variants = {
    hidde: {},
    show: { transition: { delayChildren: 0.3, staggerChildren: 0.09 } },
  };
  const childVariant: Variants = {
    hidde: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      variants={parentVariant}
      initial={'hidde'}
      animate={'show'}
      className='grid grid-cols-2 sm:navbar flex-wrap gap-2 text-white'
    >
      <motion.div
        variants={childVariant}
        className='btn rounded-full bg-inherit  hover:bg-inherit hover:text-black border-white text-white gap-2'
      >
        <FaBed />
        <span>Stays</span>
      </motion.div>
      <motion.div
        variants={childVariant}
        className='btn rounded-full bg-inherit hover:bg-inherit hover:text-black border-white text-white gap-2'
      >
        <FaPlane />
        <span>Flights</span>
      </motion.div>
      <motion.div
        variants={childVariant}
        className='btn rounded-full bg-inherit hover:bg-inherit hover:text-black border-white text-white gap-2'
      >
        <FaCar />
        <span>Car rentals</span>
      </motion.div>
      <motion.div
        variants={childVariant}
        className='btn rounded-full bg-inherit hover:bg-inherit hover:text-black border-white text-white gap-2'
      >
        <FaMosque />
        <span>Attractions</span>
      </motion.div>
      <motion.div
        variants={childVariant}
        className='btn rounded-full bg-inherit hover:bg-inherit hover:text-black border-white text-white gap-2'
      >
        <FaTaxi />
        <span>Airport taxis</span>
      </motion.div>
    </motion.div>
  );
}

export { RecreationOptions };
