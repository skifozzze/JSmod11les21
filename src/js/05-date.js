// const date = new Date();
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());

// console.log(date.getTime());

// const date1 = new Date();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);

// аналогічно, але без постійного створення нових обєктів

const date1 = Date.now();
console.log('date1', date1);

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1);
  console.log('date2', date2);

  console.log(date2 - date1);
}, 3000);
