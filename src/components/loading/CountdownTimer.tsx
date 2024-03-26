import { motion } from "framer-motion";

interface CountdownTimerProps {
  time: number;
  label: string;
  animated: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  time,
  label,
  animated
}) => {
  return (
    <div className="relative flex flex-col gap-5">
      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={{
          scale: animated ? 1.05 : 1,
          rotate: animated
            ? Math.random() > 0.5 // randomize the rotation direction
              ? 45
              : -45
            : 0
        }}
        className="flex size-16 items-center justify-between rounded-lg bg-container sm:size-32 lg:size-40"
      >
        <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-primary dark:bg-accent sm:h-3 sm:w-3"></div>
        <span className="text-3xl font-semibold sm:text-6xl lg:text-7xl">
          {time}
        </span>
        <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-primary dark:bg-accent sm:h-3 sm:w-3"></div>
      </motion.div>
      <span className="text-center text-xs capitalize leading-none sm:text-2xl">
        {label}
      </span>
    </div>
  );
};

export default CountdownTimer;
