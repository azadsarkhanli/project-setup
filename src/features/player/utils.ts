const pad = (d: number) => {
  return d < 10 ? '0' + d.toString() : d.toString();
};

export const secondsToDuration = (totalSeconds: number) => {
  const hours = pad(Math.floor(Math.abs(totalSeconds) / 3600) || 0);
  const minutes = pad(Math.floor(Math.abs(totalSeconds) / 60) % 60 || 0);
  const seconds = pad(Math.floor(Math.abs(totalSeconds) % 60 || 0));
  return {
    hours,
    minutes,
    seconds,
  };
};
