import React from "react";
import { motion } from "framer-motion";

import rules from "../../data/rules.json";

const RulesContainer: React.FC = () => {
  return (
    <div className="mx-auto w-full items-center justify-center bg-background md:w-1/2 md:px-8">
      {rules.map((rule, index) => (
        <motion.div
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.2 * (index + 1)
          }}
          viewport={{
            once: true
          }}
          key={rule.title}
          className="mb-4"
        >
          <h3 className="mb-2 text-xl font-bold">
            {index + 1}. {rule.title}
          </h3>
          <p className="">{rule.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default RulesContainer;
