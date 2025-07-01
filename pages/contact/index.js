//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from 'react-icons/bs'

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

function Contact() {
  return (
    <div
      className='h-full bg-primary/30'
    >
      <div
        className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'
      >
        {/* text & form */}
        <div
          className='flex flex-col w-full max-w-[700px] '
        >
          {/* text */ }
          <motion.h2
            variants={ fadeIn('up', 0.2) }
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
            {/* form */}
          <motion.form
            variants={ fadeIn('up', 0.4) }
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */ }
            <div
              className='flex gap-x-6 w-full'
            >
              <div className="relative w-[340px]">
                <input
                type="text"
                required
                placeholder="Name"
                className="peer w-full p-2.5 border border-white/25 rounded-[5px] bg-transparent outline-none text-white text-base placeholder-transparent transition-all duration-500 focus:border-accent valid:border-accent"
                />
                <span className="absolute left-2.5 top-2.5 text-white/25 text-base uppercase pointer-events-none transition-all duration-500 peer-focus:text-accent peer-valid:text-accent peer-focus:translate-x-[10px] peer-valid:translate-x-[10px] peer-focus:-translate-y-[21px] peer-valid:-translate-y-[21px] peer-focus:text-[0.70em] peer-valid:text-[0.70em] peer-focus:px-[10px] peer-valid:px-[10px] peer-focus:bg-primary peer-valid:bg-primary peer-focus:border-l peer-valid:border-l peer-focus:border-r peer-valid:border-r peer-focus:border-accent peer-valid:border-accent peer-focus:tracking-[0.2em] peer-valid:tracking-[0.2em]">
                Name
                </span>
              </div>
              <div className="relative w-[340px]">
                <input
                  type='email'
                  placeholder='email'
                  required
                  className="peer w-full p-2.5 border border-white/25 rounded-[5px] bg-transparent outline-none text-white text-base placeholder-transparent transition-all duration-500 focus:border-accent valid:border-accent"
                />
                <span className="absolute left-2.5 top-2.5 text-white/25 text-base uppercase pointer-events-none transition-all duration-500 peer-focus:text-accent peer-valid:text-accent peer-focus:translate-x-[10px] peer-valid:translate-x-[10px] peer-focus:-translate-y-[21px] peer-valid:-translate-y-[21px] peer-focus:text-[0.70em] peer-valid:text-[0.70em] peer-focus:px-[10px] peer-valid:px-[10px] peer-focus:bg-primary/90 peer-valid:bg-primary/90 peer-focus:border-l peer-valid:border-l peer-focus:border-r peer-valid:border-r peer-focus:border-accent peer-valid:border-accent peer-focus:tracking-[0.2em] peer-valid:tracking-[0.2em]">
                  Email
                </span>
              </div>
            </div>
            <div className="relative w-full">
              <input
                type='text'
                placeholder='subject'
                required
                className="peer w-full p-2.5 border border-white/25 rounded-[5px] bg-transparent outline-none text-white text-base placeholder-transparent transition-all duration-500 focus:border-accent valid:border-accent"
              />
              <span className="absolute left-2.5 top-2.5 text-white/25 text-base uppercase pointer-events-none transition-all duration-500 peer-focus:bg-accent peer-valid:bg-accent peer-focus:text-white peer-valid:text-white peer-focus:translate-x-[10px] peer-valid:translate-x-[10px] peer-focus:-translate-y-[21px] peer-valid:-translate-y-[21px] peer-focus:text-[0.70em] peer-valid:text-[0.70em] peer-focus:px-[10px] peer-valid:px-[10px] peer-focus:border-l peer-valid:border-l peer-focus:border-r peer-valid:border-r peer-focus:border-accent peer-valid:border-accent peer-focus:rounded-[2px] peer-valid:rounded-[2px] peer-focus:tracking-[0.2em] peer-valid:tracking-[0.2em]">
                Subject
              </span>
            </div>
            <textarea
              placeholder='message'
              className='textarea'
            >
            </textarea>
            <button
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span
                className='group-hover:-translate-y-[120%] group-hover:opactiy-0 transition-all duration-500'
              >
                Let&apos;s talk
              </span>
              <BsArrowRight
                className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
