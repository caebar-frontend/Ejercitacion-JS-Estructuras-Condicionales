// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero).
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|

alert(
  "A continuacion ingrese los datos solicitados x las ventanas prompt para realizar la operación."
);
const denominacion_estudiante = prompt("Ingrese Nombre del Estudiante");
const nota_estudiante = prompt("Ahora Ingrese La nota obtenida en el examen");

switch (nota_estudiante) {
  case "0":
  case "0.1":
  case "0.2":
  case "0.3":
  case "0.4":
  case "0.5":
  case "0.6":
  case "0.7":
  case "0.8":
  case "0.9":

  case "1":
  case "1.1":
  case "1.2":
  case "1.3":
  case "1.4":
  case "1.5":
  case "1.6":
  case "1.7":
  case "1.8":
  case "1.9":
  case "2":
  case "2.1":
  case "2.2":
  case "2.3":
  case "2.4":
  case "2.5":
  case "2.6":
  case "2.7":
  case "2.8":

  case "2.9":
    alert(`${denominacion_estudiante}, su calificación es Desaprobado.`);
    console.log(
      `${denominacion_estudiante}, super calificación es Desaprobado`
    );
    break;
  case "3":
  case "3.1":
  case "3.2":
  case "3.3":
  case "3.4":
  case "3.5":
  case "3.6":
  case "3.7":
  case "3.8":
  case "3.9":
  case "4":
  case "4.1":
  case "4.2":
  case "4.3":
  case "4.4":
  case "4.5":
  case "4.6":
  case "4.7":
  case "4.8":
  case "4.9":
  case "5":
  case "5.1":
  case "5.2":
  case "5.3":
  case "5.4":
  case "5.5":
  case "5.6":
  case "5.7":
  case "5.8":
  case "5.9":
    alert(`${denominacion_estudiante}, su calificación es Aprobado.`);
    console.log(`${denominacion_estudiante}, su calificación es Aprobado.`);
    break;
  case "6":
  case "6.1":
  case "6.2":
  case "6.3":
  case "6.4":
  case "6.5":
  case "6.6":
  case "6.7":
  case "6.8":
  case "6.9":
  case "7":
  case "7.1":
  case "7.2":
  case "7.3":
  case "7.4":
  case "7.5":
  case "7.6":
  case "7.7":
  case "7.8":
  case "7.9":
  case "8":
  case "8.1":
  case "8.2":
  case "8.3":
  case "8.4":
  case "8.5":
  case "8.6":
  case "8.7":
  case "8.8":
  case "8.9":
    alert(`${denominacion_estudiante}, su calificación es Notable.`);
    console.log(`${denominacion_estudiante}, su calificación es Notable.`);
    break;

  case "9":
  case "9.1":
  case "9.2":
  case "9.3":
  case "9.4":
  case "9.5":
  case "9.6":
  case "9.7":
  case "9.8":
  case "9.9":
  case "10":
    alert(`${denominacion_estudiante}, su calificación es Sobresaliente.`);
    console.log(
      `${denominacion_estudiante}, su calificación es Sobresaliente.`
    );
    break;
  default:
    alert(`Faltan ingresar datos para llegar al resultado de la operacion.`);
    console.error(
      `Faltan ingresar datos para llegar al resultado de la operacion.`
    );
    break;
}
