import { useCallback, useEffect, useState } from "react";

import { getTimeDifference } from "@/lib/utils";

import CountdownTimer from "./CountdownTimer";

interface LoadingParams {
  title: string;
  year: number;
  month: number;
  day: number;
}

interface CountDownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Loading = ({ title, year, month, day }: LoadingParams) => {
  const [countDownTime, setCountDownTIme] = useState<CountDownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  const startCountDown = useCallback(() => {
    const countDownDate = new Date(year, month - 1, day, 0, 0, 0);
    setInterval(() => {
      setCountDownTIme(getTimeDifference(countDownDate.getTime()));
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="my-[10vh]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 sm:gap-16">
        <span className="px-2 text-center text-2xl font-semibold leading-none tracking-widest sm:text-3xl">
          {title}
        </span>
        <div className="flex justify-center gap-3 sm:gap-8">
          <CountdownTimer
            time={+countDownTime.days}
            label={+countDownTime.days === 1 ? "Dia" : "Dias"}
          />
          <CountdownTimer
            time={+countDownTime.hours}
            label={+countDownTime.hours === 1 ? "Hora" : "Horas"}
          />
          <CountdownTimer
            time={+countDownTime.minutes}
            label={+countDownTime.minutes === 1 ? "Minuto" : "Minutos"}
          />
          <CountdownTimer
            time={+countDownTime.seconds}
            label={+countDownTime.seconds === 1 ? "Segundo" : "Segundos"}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
