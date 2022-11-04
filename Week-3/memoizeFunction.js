const timer = (fn) => {
  console.time();
  console.log(fn());
  console.timeEnd();
};

// Main Function
const add = (...args) => {
  // if (!!a && !!b) return a + b;
  // if (!!a) return a;
  // if (!!b) return b;
  return args.reduce((prev, current) => prev + current, 0);
};

const memoize = (fn) => {
  const data = new Map();
  return (...args) => {
    const key = args.toString();
    if (!data.has(key)) {
      data.set(key, fn(...args));
    }
    return data.get(key);
  };
};

const memoizeSum = memoize(add);

timer(() => memoizeSum(100, 100));
timer(() => memoizeSum(100));
timer(() => memoizeSum(100, 200));
timer(() => memoizeSum(100, 100));
timer(() => memoizeSum(100, 100, 100, 100));
