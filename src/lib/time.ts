const getTimeDifference = (countDownTime: number) => {
  const currentTime = new Date().getTime();
  const timeDiference = countDownTime - currentTime;
  let days =
    Math.floor(timeDiference / (24 * 60 * 60 * 1000)) >= 10
      ? Math.floor(timeDiference / (24 * 60 * 60 * 1000))
      : `0${Math.floor(timeDiference / (24 * 60 * 60 * 1000))}`;
  const hours =
    Math.floor((timeDiference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >= 10
      ? Math.floor((timeDiference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
      : `0${Math.floor(
          (timeDiference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        )}`;
  const minutes =
    Math.floor((timeDiference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
      ? Math.floor((timeDiference % (60 * 60 * 1000)) / (1000 * 60))
      : `0${Math.floor((timeDiference % (60 * 60 * 1000)) / (1000 * 60))}`;
  const seconds =
    Math.floor((timeDiference % (60 * 1000)) / 1000) >= 10
      ? Math.floor((timeDiference % (60 * 1000)) / 1000)
      : `0${Math.floor((timeDiference % (60 * 1000)) / 1000)}`;
  if (timeDiference < 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    };
  }
  return {
    days: `${String(days).padStart(2, "0")}`,
    hours: `${String(hours).padStart(2, "0")}`,
    minutes: `${String(minutes).padStart(2, "0")}`,
    seconds: `${String(seconds).padStart(2, "0")}`
  };
};

export { getTimeDifference };
