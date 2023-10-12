# Notas de la Clase 7

## Axios

- Axios devuelve la respuesta del servidor en formato de una promesa.
- axios.methodHTTP('url', data) // data es opcional en (post, put, patch)

  - .then((resp) => console.log(resp))
  - .catch((err) => console.log(err))

- Promesas: Objeto que representa la terminación o fracaso de una operación asíncrona.
- Estados de una promesa:

  - Pending: Seguimos esperando la resolución
  - Settled: Ya sabemos que ocurrio con la promesa
    - Fulfill: Resolvio con exito.
    - Rejected: Resolvio sin exito, falló.

- Asíncronia: Desfases temporales

- Métodos de promesas:
  - .then()
  - .catch()

/\*
// Ejemplo de una promesa:
const functionPromise = new Promise((resolve, reject) => {
// Código de la promesa
if (condicionQueDecidiraSiLaPromesaSeCumpleONo) {
// Si se cumple
resolve("Valor que se devulve si la promesa se cumple");
} else {
// No se cumple
reject("Error que hizo que la promesa fallara");
}
});

// Para Utilizar la promesa:
promesa
.then((res) => {
// El then se ejecuta cuando la promesa es resuelta con exito
console.log(res); // "valor que se ejecuta de la promesa al cumplirse."
})
.catch((err) => {
// El catch se ejecutara cuando la promesa es rechazada.
console.log(err); // Error que hizo que la promesa fallara.
});
\*/
