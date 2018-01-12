/* eslint-disable */
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Display each reported measurement on console
    if (console) {
      console.log(`Name: ${entry.name} Type: ${entry.entryType} Start: ${entry.startTime} Duration: ${entry.duration}\n`);
    }
  });
});
observer.observe({ entryTypes: ['measure'] });
performance.mark('registered-observer');
