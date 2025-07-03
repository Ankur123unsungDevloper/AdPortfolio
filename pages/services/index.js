// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

function Services() {
  return (
    <div
      className='h-full bg-primary/30 py-36 flex items-center'
    >
      <Circles />
      <div
        className='container mx-auto'
      >
        <div
          className='flex flex-col xl:flex-row gap-x-8'
        >
          {/* text */ }
          <div
            className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4'
          >
            <motion.h2
              variants={ fadeIn('up', 0.3) }
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 xl:mt-8'
            >
              My service <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={ fadeIn('up', 0.4) }
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              I offer a range of services that bridge creativity and technology — from building responsive websites and web applications to delivering seamless user experiences. Whether it&apos;s frontend design, backend development, or full-stack solutions, my focus is on creating scalable, efficient, and visually compelling digital products.
            </motion.p>
          </div>
          <motion.div
            variants={ fadeIn('down', 0.6) }
            initial="hidden"
            animate="show"
            exit="hidden"
            className='w-full xl:max-w-[65%]'
          >
          {/* slider */ }
          <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
