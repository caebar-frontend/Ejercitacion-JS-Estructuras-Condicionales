// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003).
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error.
// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.

function coger_fecha() {
  let date_control_dos = document.getElementById("Aaaa_Mm_Dd").value;

  let cadenafecha = date_control_dos.toString();
  const ano = cadenafecha.slice(0, 4);
  const mes = cadenafecha.slice(5, 7);
  const dia = cadenafecha.slice(8, 10);
  const labelfecha = document.getElementById("Etiqueta_Fecha_Uno");

  if (cadenafecha < "1500-01-01" || cadenafecha > "4000-12-31") {
    console.error(
      `----------------------------------------------------------------`
    );
    console.error(`La fecha ingresada no es válida.`);
    console.error(
      `----------------------------------------------------------------`
    );
    labelfecha.innerHTML = `La fecha ingresada no es válida.`;
  } else {
    console.warn(
      `----------------------------------------------------------------`
    );
    console.warn(`La fecha elegida: ${date_control_dos.toString()}`);
    labelfecha.innerHTML = `La fecha completa: ${date_control_dos.toString()}, día: ${dia}, mes: ${mes}, año: ${ano}`;
    console.log(`El día elegido es: ${dia}`);

    console.log(`El mes seleccionado: ${mes}`);

    console.log(`El año indicado: ${ano}`);

    console.warn(
      `----------------------------------------------------------------`
    );
  }
}

function Tomar_Fecha() {
  const dia = document.getElementById("dia");
  const mes = document.getElementById("listado");
  const mes2 = document.getElementById("mes2");
  const ano = document.getElementById("ano");
  const lblinfoconsola = document.getElementById("Etiqueta_Tipo_Consola_Demo");

  let day = dia.value;
  let month = mes.value;
  let year = ano.value;
  let month2 = mes2.value;

  console.warn("-------------------------------------------------------------");
  console.warn(`La fecha completa ingresada es: ${day}-${month}-${year}`);
  console.warn(
    `EL plazo del calendario ingresado numericamente es: ${day}-${month2}-${year}`
  );

  switch (day) {
    case "1":
      day = "1";
      console.log("El día ingresado en formato número fue: 1.");
      break;

    case "2":
      day = "2";
      console.log("El día ingresado en formato número fue: 2.");
      break;

    case "3":
      day = "3";
      console.log("El día ingresado en formato número fue: 3.");
      break;

    case "4":
      day = "4";
      console.log("El día ingresado en formato número fue: 4.");
      break;

    case "5":
      day = "5";
      console.log("El día ingresado en formato número fue: 5.");
      break;

    case "6":
      day = "6";
      console.log("El día ingresado en formato número fue: 6.");
      break;

    case "7":
      day = "7";
      console.log("El día ingresado en formato número fue: 7.");
      break;

    case "8":
      day = "8";
      console.log("El día ingresado en formato número fue: 8.");
      break;

    case "9":
      day = "9";
      console.log("El día ingresado en formato número fue: 9.");
      break;

    case "10":
      day = "10";
      console.log("El día ingresado en formato número fue: 10.");
      break;

    case "11":
      day = "11";
      console.log("El día ingresado en formato número fue: 11.");
      break;

    case "12":
      day = "12";
      console.log("El día ingresado en formato número fue: 12.");
      break;

    case "13":
      day = "13";
      console.log("El día ingresado en formato número fue: 13.");
      break;

    case "14":
      day = "14";
      console.log("El día ingresado en formato número fue: 14.");
      break;

    case "15":
      day = "15";
      console.log("El día ingresado en formato número fue: 15.");
      break;

    case "16":
      day = "16";
      console.log("El día ingresado en formato número fue: 16.");
      break;

    case "17":
      day = "17";
      console.log("El día ingresado en formato número fue: 17.");
      break;

    case "18":
      day = "18";
      console.log("El día ingresado en formato número fue: 18.");
      break;

    case "19":
      day = "19";
      console.log("El día ingresado en formato número fue: 19.");
      break;

    case "20":
      day = "20";
      console.log("El día ingresado en formato número fue: 20.");
      break;

    case "21":
      day = "21";
      console.log("El día ingresado en formato número fue: 21.");
      break;

    case "22":
      day = "22";
      console.log("El día ingresado en formato número fue: 22.");
      break;

    case "23":
      day = "23";
      console.log("El día ingresado en formato número fue: 23.");
      break;

    case "24":
      day = "24";
      console.log("El día ingresado en formato número fue: 24.");
      break;

    case "25":
      day = "25";
      console.log("El día ingresado en formato número fue: 25.");
      break;

    case "26":
      day = "26";
      console.log("El día ingresado en formato número fue: 26.");
      break;

    case "27":
      day = "27";
      console.log("El día ingresado en formato número fue: 27.");
      break;

    case "28":
      day = "28";
      console.log("El día ingresado en formato número fue: 28.");
      break;

    case "29":
      day = "29";
      console.log("El día ingresado en formato número fue: 29.");
      break;

    case "30":
      day = "30";
      console.log("El día ingresado en formato número fue: 30.");
      break;

    case "31":
      day = "31";
      console.log("El día ingresado en formato número fue: 31.");
      break;

    default:
      console.error("El día ingresado no corresponde a un día válido.");
      break;
  }

  switch (month2) {
    case "1":
      month2 = "1";
      console.log("El mes ingresado en formato número fue: Enero.");
      month3 = "Enero";

      break;

    case "2":
      month2 = "2";
      console.log("El mes ingresado en formato número fue: Febrero.");
      month3 = "Febrero";
      break;

    case "3":
      month2 = "3";
      console.log("El mes ingresado en formato número fue: Marzo.");
      month3 = "Marzo";
      break;

    case "4":
      month2 = "4";
      console.log("El mes ingresado en formato número fue: Abril.");
      month3 = "Abril";
      break;

    case "5":
      month2 = "5";
      console.log("El mes ingresado en formato número fue: Mayo.");
      month3 = "Mayo";
      break;
    case "6":
      month2 = "6";
      console.log("El mes ingresado en formato número fue: Junio.");
      month3 = "Junio";
      break;

    case "7":
      month2 = "7";
      console.log("El mes ingresado en formato número fue: Julio.");
      month3 = "Julio";
      break;

    case "8":
      month2 = "8";
      console.log("El mes ingresado en formato número fue: Agosto.");
      month3 = "Agosto";
      break;

    case "9":
      month2 = "9";
      console.log("El mes ingresado en formato número fue: Septiembre.");
      month3 = "Septiembre";
      break;

    case "10":
      month2 = "10";
      console.log("El mes ingresado en formato número fue: Octubre.");
      month3 = "Octubre";
      break;

    case "11":
      month2 = "11";
      console.log("El mes ingresado en formato número fue: Noviembre.");
      month3 = "Noviembre";
      break;

    case "12":
      month2 = "12";
      console.log("El mes ingresado en formato número fue: Diciembre.");
      month3 = "Diciembre";
      break;

    default:
      console.error(
        "El mes en formato número ingresado no corresponde a un mes válido."
      );
      break;
  }

  let day3;

  if (month2 == "1" && day > "31") {
    console.error("El mes de Enero no tiene más de 31 días.");
  } else if (month2 == "2" && day > "29") {
    console.error("El mes de Febrero tiene como máximo 29 días.");
  } else if (month2 == "3" && day > "31") {
    console.error("El mes de Marzo no tiene más de 31 días.");
  } else if (month2 == "4" && day > "30") {
    console.error("El mes de Abril no tienen más de 30 días.");
  } else if (month2 == "5" && day > "31") {
    console.error("El mes de Mayo contempla hasta 31 días.");
  } else if (month2 == "6" && day > "30") {
    console.error("El mes de Junio ostenta hasta 30 días.");
  } else if (month2 == "7" && day > "31") {
    console.error("El mes de Julio solo concede hasta 31 días.");
  } else if (month2 == "8" && day > "31") {
    console.error("El mes de Agosto muestra en el calendario hasta 31 días.");
  } else if (month2 == "9" && day > "30") {
    console.error(
      "El mes de Septiembre solo permite contabilizar en su momento hasta 30 días."
    );
  } else if (month2 == "10" && day > "31") {
    console.error("El mes de Octubre tiene en su estancia hasta 31 días.");
  } else if (month2 == "11" && day > "30") {
    console.error("El mes de Noviembre tiene como máximo 30 días.");
  } else if (month2 == "12" && day > "31") {
    console.error("El mes de Diciembre tiene en sus semanas hasta 31 días.");
  }

  month == month3
    ? console.log("Los meses coinciden en las dos entradas.")
    : console.error(
        "No hay coincidencia en los meses indicados en ambos campos de entrada."
      );

  year > "2000" && year < "4000"
    ? console.log("El año tipeado es correcto.")
    : console.error("El año digitado no está permitido en este código.");

  console.warn(
    "------------------------------------------------------------------------"
  );
}
