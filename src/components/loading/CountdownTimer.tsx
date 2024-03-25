interface CountdownTimerProps {
  time: number;
  label: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ time, label }) => {
  return (
    <div className="relative flex flex-col gap-5">
      <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-container sm:h-32 sm:w-32 lg:h-40 lg:w-40">
        <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
        <span className="text-3xl font-semibold sm:text-6xl lg:text-7xl">
          {time}
        </span>
        <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
      </div>
      <span className="text-center text-xs capitalize leading-none sm:text-2xl">
        {label}
      </span>
    </div>
  );
};

export default CountdownTimer;
