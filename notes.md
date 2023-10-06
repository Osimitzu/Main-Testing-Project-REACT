# Notas de Clase 3 React

¿Cual es la diferencia entre propiedades y estado?
Props --> Información que viene desde el padre.
Estado --> Información / logica interna y propia del componente.

useState --> Hook de estado.

hooks --> Son funciones, tienen valor de retorno. Se ejecutan.
crear variable/s y almacenar valor de retorno del hook.

useState devuelve un state y una función seteadora del state, ejemplo:
const [state, setState] = useState(valorInicial);
setState(nuevoValor);
