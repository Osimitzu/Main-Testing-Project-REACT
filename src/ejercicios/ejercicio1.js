/*
"Formatear Fecha"
  - Crear una función que formateara una fecha.
  - La función recibe como parametro "date", un string con la fecha en el siguiente formato: "day/month/year"
  - La función debera convertirla a el siguiente formato: "month/day/year" y además debera cambiar el numero del mes por el nombre del mes.
  - Ejemplo: "10/04/1998" --> "Abril 10, 1998"
*/

// const formatDate = (date) => {
//   // console.log("Nueva fecha");
//   let newFormat = "";

//   let month = date.substring(3, 5);
//   let day = date.substring(0, 2);
//   let year = date.substring(6, 10);

//   if (date.length < 10 || date.length > 10) {
//     throw new Error("Wrong format");
//   }

//   switch (month) {
//     case "1":
//     case "01":
//       month = "Enero";
//       break;
//     case "2":
//     case "02":
//       month = "Febrero";
//       break;
//     case "3":
//     case "03":
//       month = "Marzo";
//       break;
//     case "4":
//     case "04":
//       month = "Abril";
//       break;
//     case "5":
//     case "05":
//       month = "Mayo";
//       break;
//     case "6":
//     case "06":
//       month = "Junio";
//       break;
//     case "7":
//     case "07":
//       month = "Julio";
//       break;
//     case "8":
//     case "08":
//       month = "Agosto";
//       break;
//     case "9":
//     case "09":
//       month = "Septiembre";
//       break;
//     case "10":
//       month = "Octubre";
//       break;
//     case "11":
//       month = "Noviembre";
//       break;
//     case "12":
//       month = "Diciembre";
//       break;
//   }

//   newFormat = `${month} ${day}, ${year}`;

//   console.log(newFormat);
// };

// formatDate("15/10/1997");
// formatDate("30/12/2010");
// formatDate("03/04/2030");

/* Solución de la maestra:

// El parametro tiene 3 datos almacenados.
// Voy a dividir la cadena de texto en 3, guardar de forma individual cada dato.
// Convertir el mes de formato numerico al nombre correspondiente.
// Manipular los datos para darle el formato deseado.
*/

function formatDate(date) {
  const datos = date.split("/");
  console.log(datos);

  const monthsArray = [
    "",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const monthName = monthsArray[Number(datos[1])];

  console.log(`${monthName} ${datos[0]}, ${datos[2]}`);
  return `${monthName} ${datos[0]}, ${datos[2]}`;
}

formatDate("15/2/1997");
