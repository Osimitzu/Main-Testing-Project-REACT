// Escribe una función que dado un array de numeros devuelva un objeto con 2 arreglos en el primero almacena los numeros pares y en el segundo los impares.
// EJEMPLO:
// miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) --> {pares:[2, 4, 6, 8, 0]}, impares: [1, 3, 5, 7, 9]}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const paresImpares = (array) => {
  const par = array.filter((num) => num % 2 === 0);
  // console.log(par);
  const impar = array.filter((num) => num % 2 !== 0);
  // console.log(impar);

  const arrayOrdenado = {
    pares: par,
    impares: impar,
  };
  console.log(arrayOrdenado);
  return arrayOrdenado;
};

paresImpares(arr);
