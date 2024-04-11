import { motion } from "framer-motion";
import {
  Atom,
  Lightbulb,
  MessageSquareText,
  Rocket,
  Target,
  type LucideIcon
} from "lucide-react";

import juriCriteria from "../../data/juriCriteria.json";

const iconMap: { [key: string]: LucideIcon } = {
  target: Target,
  message: MessageSquareText,
  lightbulb: Lightbulb,
  atom: Atom,
  rocket: Rocket
};

const JuriCriteriaContainer: React.FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="max-w-8xl flex w-full flex-wrap justify-center gap-4">
        {juriCriteria.map((criteria, index) => {
          const IconComponent = iconMap[criteria.icon];
          if (!IconComponent) return null;
          return (
            <motion.div
              initial={{
                opacity: 0,
                x: 50 * index
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: (index - 1) * 0.1
              }}
              viewport={{
                once: true
              }}
              key={criteria.description}
              className="h-[375px] w-52 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-b-0 bg-background shadow-xl dark:border-2 dark:shadow-none">
                <div className="flex justify-center pt-12">
                  <IconComponent className="mx-auto size-20" />
                </div>
                <div className="flex justify-center px-4 py-2">
                  <p className="mt-2 text-center text-lg font-bold md:text-2xl">
                    {criteria.description}
                  </p>
                </div>
                <p className="bg-criteria-value p-3 text-center text-lg font-black text-white md:text-xl">
                  {criteria.value}%
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default JuriCriteriaContainer;
