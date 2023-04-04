// const logMessage = () => {
//   console.log('лог при виклику коллбек функції через 3 секунди');
// };

// console.log('до виклику setTimeout');

// setTimeout(
//   x => {
//     console.log(x);
//     console.log('1- всередині коллбек для setTimeout');
//   },
//   2000,
//   5
// );

// setTimeout(() => {
//   console.log('2- всередині коллбек для setTimeout');
// }, 1000);

// console.log('після виклику setTimeout');

// const logger = time => {
//   console.log(`лог через ${time} ms, тому що не відмінили таймаут`);
// };

// const timerId = setTimeout(logger, 3000, 2000);
// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

console.log('до виклику setTimeout');

setTimeout(() => {
  console.log('виклик відкладеної функції');
}, 0);

console.log('після виклику setTimeout');
