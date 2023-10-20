// Sucesión de Fibonacci

// const fibArray = [0, 1];

// const fibo = (limit) => {
//   for (let i = 0; i <= limit; i++) {
//     const last = fibArray[fibArray.length - 1];
//     const pLast = fibArray[fibArray.length - 2];

//     let sum = last + pLast;

//     if (sum <= limit) {
//       fibArray.push(sum);
//     } else {
//       break;
//     }
//   }

//   return fibArray;
// };

// console.log(fibo(500));

/*-----------------------------------------------------*/
/* SOLUCIÓN MAESTRA: */

const fiboFuntion = (limit) => {
  const fiboArray = [0, 1];

  for (let i = 2; fiboArray[i - 1] + fiboArray[i - 2] <= limit; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
  }
  return fiboArray;
};

console.log(fiboFuntion(1000));
/*-----------------------------------------------------*/
