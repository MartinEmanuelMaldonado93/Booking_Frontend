import { uuid } from '@utils';
import { propertiesData } from '@api';
import { motion } from 'framer-motion';

/** Show properties by type like hotels, apartment, etc.. */
function PropertyList() {
  return (
    <div className='sm:px-4 overflow-x-auto sm:overflow-x-auto'>
      <div className='text-2xl text-gray-900'>Browse by property type</div>
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
        className='px-2 py-4 sm:py-2 flex sm:translate-x-0 sm:flex-wrap   sm:justify-between overflow-y-hidden'
      >
        {propertiesData.map((property) => (
          <motion.div
            variants={{
              hidde: { opacity: 0, translateX: '50%' },
              show: {
                transition: {
                  type: 'spring',
                  stiffness: 80,
                  mass: 2.5,
                },
                opacity: 1,
                translateX: 0,
              },
            }}
            whileHover={{ scale: 1.1 }}
            className='card duration-300 hover:shadow-xl'
            key={uuid()}
          >
            <div className='card-body p-2 px-1'>
              <img
                src={property.src}
                alt=''
                className='rounded-md max-w-[10rem] min-w-[10rem] h-full object-cover'
              />
              <h1 className='card-title capitalize'>{property.type}</h1>
              <h2>
                {property.count} {property.type}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export { PropertyList };
