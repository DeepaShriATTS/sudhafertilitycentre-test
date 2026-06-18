import { motion, AnimatePresence } from 'framer-motion';

const ScrollMotion = ({children}) => {

  return (
    <AnimatePresence>
      <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0,transition:{delay:0.2,duration:0.5}}}
      viewport={{once:false,amount:0.1}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollMotion;
