import { motion } from "framer-motion";

import { LampContainer } from "@/lib/components/ui/lamp";

const Lamp: React.FC = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: -80 }}
        transition={{
          delay: 0.1,
          duration: 0.6,
          ease: "easeInOut"
        }}
        className="bg-gradient-to-br from-slate-500 to-slate-800 bg-clip-text py-4 text-center text-5xl font-medium tracking-tight text-transparent dark:from-slate-300 dark:to-slate-500 md:text-7xl"
      >
        Saúde & <br /> bem-estar
      </motion.h1>
    </LampContainer>
  );
};

export default Lamp;
