/*
  "Torres de Hanoi"
  - Crear una función que reciba el numero de discos en una torre de hanoi como parametro y que devuelva la cantidad minima de movimientos para completar la tarea.
*/

const torreHanoi = (discos) => {
  let movimientos = 2 ** discos - 1;
  console.log(movimientos);
};

torreHanoi(4);
torreHanoi(3);
torreHanoi(8);

// Solución de la maestra:
// Es igual a la mia.
