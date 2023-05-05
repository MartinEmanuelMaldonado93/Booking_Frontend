import { featuredData } from '@api';
import { uuid } from '@utils';
import { motion } from 'framer-motion';

function Featured() {
  return (
    <div className='mt-12 px-4 overflow-x-scroll sm:overflow-x-auto'>
      <motion.div
        variants={{
          hidde: {},
          show: {
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.05,
              when: 'beforeChildren',
            },
          },
        }}
        initial={'hidde'}
        whileInView={'show'}
        className='flex gap-2 p-4  my-4 z-0 sm:flex-wrap md:justify-between '
      >
        {featuredData?.map((hotel, i) => (
          <motion.div
            variants={{
              hidde: { opacity: 0, translateX: '50%' },
              show: {
                opacity: 1,
                translateX: 0,
                transition: {
                  type: 'spring',
                  stiffness: 80,
                  mass: 2.5,
                },
              },
            }}
            whileHover={{ scale: 1.06 }}
            key={uuid()}
            className='sm:translate-x-0 bg-base-100 shadow-lg box-border min-w-[10rem] max-w-[10rem] sm:max-w-[15rem]'
          >
            <img
              src={hotel.imgUrl}
              alt={hotel.city}
              className='z-0  object-cover rounded-lg transition-all duration-500 hover:scale-105'
            />
            <div className='translate-x-4 h-0 relative -translate-y-20  text-white text-xl sm:text-3xl font-bold '>
              <h1>{hotel.city}</h1>
              <h2 className='dark:text-gray-200 z-0'>
                {Math.floor(Math.random() * 9)} properties
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export { Featured };
