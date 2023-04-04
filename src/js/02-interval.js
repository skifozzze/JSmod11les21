const logger = time => console.log(`лог кожні ${time} ms - ${Date.now()}`);

// console.log('до виклику setInterval');
// setInterval(logger, 2000, 2000);
// console.log('після виклику setInterval');

const intervalId = setInterval(logger, 2000, 2000);

const shouldCancelInterval = Math.random() > 0.3;
console.log(shouldCancelInterval);

if (shouldCancelInterval) {
  clearInterval(intervalId);
}
