function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
    let message = `count is ${count}`;
    function log() {
      console.log(message);
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log();
  
  // Output: count is 0
  // count and message variables are initialized so even after call increment funtion 3 times due to scope
  // output is 0 but if we log count it will be 3 as it has access to above scope