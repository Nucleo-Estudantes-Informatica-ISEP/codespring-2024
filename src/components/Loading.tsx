import { useCallback, useEffect, useState } from "react";

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
  const getTimeDifference = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      });
    } else {
      setCountDownTIme({
        days: days.toString().length > 1 ? days.toString() : `0${days}`,
        hours: hours.toString().length > 1 ? hours.toString() : `0${hours}`,
        minutes:
          minutes.toString().length > 1 ? minutes.toString() : `0${minutes}`,
        seconds:
          seconds.toString().length > 1 ? seconds.toString() : `0${seconds}`
      });
    }
  };
  const startCountDown = useCallback(() => {
    const countDownDate = new Date(year, month, day, 0, 0, 0);
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
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
          <div className="relative flex flex-col gap-5">
            <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-container sm:h-32 sm:w-32 lg:h-40 lg:w-40">
              <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
              <span className="text-3xl font-semibold sm:text-6xl lg:text-7xl">
                {countDownTime?.days}
              </span>
              <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
            </div>
            <span className="text-center text-xs capitalize leading-none sm:text-2xl">
              {+countDownTime?.days == 1 ? "Dia" : "Dias"}
            </span>
          </div>
          <div className="relative flex flex-col gap-5">
            <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-container sm:h-32 sm:w-32 lg:h-40 lg:w-40">
              <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
              <span className="text-3xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                {countDownTime?.hours}
              </span>
              <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
            </div>
            <span className="text-center text-xs font-medium leading-none sm:text-2xl">
              {+countDownTime?.hours == 1 ? "Hora" : "Horas"}
            </span>
          </div>
          <div className="relative flex flex-col gap-5">
            <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-container sm:h-32 sm:w-32 lg:h-40 lg:w-40">
              <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
              <span className="text-3xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                {countDownTime?.minutes}
              </span>
              <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
            </div>
            <span className="text-center text-xs capitalize leading-none sm:text-2xl">
              {+countDownTime?.minutes == 1 ? "Minuto" : "Minutos"}
            </span>
          </div>
          <div className="relative flex flex-col gap-5">
            <div className="flex h-16 w-16 items-center justify-between rounded-lg bg-container sm:h-32 sm:w-32 lg:h-40 lg:w-40">
              <div className="relative !-left-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
              <span className="text-3xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                {countDownTime?.seconds}
              </span>
              <div className="relative -right-[6px] h-2.5 w-2.5 rounded-full bg-accent sm:h-3 sm:w-3"></div>
            </div>
            <span className="text-center text-xs capitalize leading-none sm:text-2xl">
              {+countDownTime?.seconds == 1 ? "Segundo" : "Segundos"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
