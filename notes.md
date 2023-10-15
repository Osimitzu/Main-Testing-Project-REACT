# Notas de la Clase 10

### && --> Operación de corto circuito

- Va a devolver el primer dato que sea falsy. En caso de que ninguno sea falsy, va a devolver el ultimovalor. Ejemplo:
  - 100 && null --> null
  - undefined && "Hola Mundo" --> undefined
  - 100 && 200 --> 200

### Renderizado condicional

- Funcional
  - if...else
- Visual
  - operadores ternarios (? :)
  - operación de corto circuito (&&)
