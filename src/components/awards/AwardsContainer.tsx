"use client";

import { motion } from "framer-motion";

import { BackgroundGradient } from "../../lib/components/ui/background-gradient";

export default function AwardsContainer() {
  return (
    <section className="grid grid-cols-1 place-items-center gap-y-4 md:grid-cols-3 md:gap-2">
      <BackgroundGradient className="flex h-full w-full max-w-xs flex-col justify-center rounded-[22px] bg-background p-4 text-center dark:bg-zinc-900 sm:p-5 md:h-48">
        <motion.p
          initial={{ opacity: 0.1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="bg-gradient-to-br bg-clip-text py-6 text-center font-poppins text-4xl tracking-tight md:text-6xl"
        >
          600 <span className="text-3xl md:text-5xl">🏆</span>
        </motion.p>
      </BackgroundGradient>
      <BackgroundGradient className="flex h-full w-full max-w-xs flex-col justify-center rounded-[22px] bg-background p-4 text-center dark:bg-zinc-900 sm:p-5 md:h-48">
        <motion.p
          initial={{ opacity: 0.1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="bg-gradient-to-br bg-clip-text py-6 text-center font-poppins text-4xl tracking-tight md:text-6xl"
        >
          400 <span className="text-3xl md:text-5xl">🏆</span>
        </motion.p>
      </BackgroundGradient>
      <BackgroundGradient className="flex h-full w-full max-w-xs flex-col justify-center rounded-[22px] bg-background p-4 text-center dark:bg-zinc-900 sm:p-5 md:h-48">
        <motion.p
          initial={{ opacity: 0.1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="bg-gradient-to-br bg-clip-text py-6 text-center font-poppins text-4xl tracking-tight md:text-6xl"
        >
          150 <span className="text-3xl md:text-5xl">🏆</span>
        </motion.p>
      </BackgroundGradient>
    </section>
  );
}
