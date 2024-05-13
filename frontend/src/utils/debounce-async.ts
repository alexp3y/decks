/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounceAsync = (func: any, wait: number) => {
  let timerID = -1;

  return (...args: any) => {
    clearTimeout(timerID);

    const promiseForFunc = new Promise((resolve) => {
      timerID = setTimeout(resolve, wait);
    });

    return promiseForFunc.then(() => func(...args));
  };
};
