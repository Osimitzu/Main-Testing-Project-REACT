/*
  - Crear una función que reciba una cadena de texto como parametro.
  - La función tiene que determinar si la cadena es un palindromo.
  - En caso de que lo sea devolvera true.
*/

// const palindrome = (carmen) => {
//   let cadenita = carmen.split("").reverse().join("");

//   let isPalindrome =
//     carmen.toLowerCase().replace(/\s/g, "") ===
//     cadenita.toLowerCase().replace(/\s/g, "")
//       ? true
//       : false;
//   console.log(isPalindrome);
//   console.log(carmen.toLowerCase().replace(/\s/g, ""));
//   console.log(cadenita.toLowerCase().replace(/\s/g, ""));
//   return isPalindrome;
// };

// palindrome("Anita lava la tina");
// palindrome("reconocer");
// palindrome("dábale arroz a la zorra el abad"); // false por el acento
// palindrome("Ana");
// palindrome("la sal");
// palindrome("arenera");
// palindrome("hola");

//-----------------------------------------------------
/* SOLUCION DE LA MAESTRA */

const palindromo = (text) => {
  const formatedString = text.toLowerCase().replaceAll(" ", "");
  const reverseString = formatedString.split("").reverse().join("");

  const isPalindromo = formatedString === reverseString; // no es necesario el ternario porque la comparación persé ya nos devuelve un "true" o "false"

  console.log(isPalindromo);
  return isPalindromo;
};

palindromo("Hola");
palindromo("Anita lava la tina");
//-----------------------------------------------------
