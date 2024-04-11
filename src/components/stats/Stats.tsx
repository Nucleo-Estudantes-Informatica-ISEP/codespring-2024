import React from "react";
import { motion } from "framer-motion";

import stats from "../../data/stats.json";

const StatsContainer: React.FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid w-full max-w-screen-lg grid-cols-1 justify-center gap-x-64 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{
              once: true
            }}
          >
            <span className="text-6xl font-bold text-accent md:text-7xl lg:text-8xl">
              {stat.title}
            </span>
            <span className="mt-2 text-xl md:text-2xl lg:text-3xl font-semibold">
              {stat.description}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsContainer;
