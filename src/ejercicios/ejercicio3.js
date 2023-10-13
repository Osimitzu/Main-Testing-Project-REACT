// "Fibonacci"
const fibonacciFunction = (limit) => {
  let fibonacci = [0, 1];

  while (
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <=
    limit
  ) {
    let siguiente =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(siguiente);
  }

  console.log(fibonacci);
  return fibonacci;
};

fibonacciFunction(50);
