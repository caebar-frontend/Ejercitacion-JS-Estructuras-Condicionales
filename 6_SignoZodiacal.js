// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.

/*
-Aries: 21 de marzo al 19 de abril
-Tauro: 20 de abril y al 20 de mayo
-Géminis: 21 de mayo al 20 de junio
-Cáncer: 21 de junio al 22 de julio
-Leo: 23 de julio al 22 de agosto
-Virgo: 23 de agosto al 22 de septiembre
-Libra: 23 de septiembre al 22 de octubre
-Escorpio: 23 de octubre al 21 de noviembre
-Sagitario: 22 de noviembre al 21 de diciembre
-Capricornio: 22 de diciembre al 19 de enero
-Acuario: 20 de enero al 18 de febrero
-Piscis: 19 de febrero al 20 de marzo
*/

console.log("Inicio de la aplicacion-----------");

function procesar() {
  const Mes = document.getElementById("mes");
  const Dia = document.getElementById("dia");
  const Ano = document.getElementById("ano");
  const lblinfoconsola = document.getElementById("label_info_consola");

  let mes_elegido = Mes.value;
  let dia_elegido = parseInt(Dia.value);
  let ano_elegido = parseInt(Ano.value);

  if (isNaN(ano_elegido) || isNaN(dia_elegido)) {
    console.warn(
      "Falta seleccionar datos, o ingresar el día, el mes, u el año de nacimiento para procesar la información."
    );
    lblinfoconsola.innerHTML =
      "Falta seleccionar datos, o ingresar el día, el mes, u el año de nacimiento para procesar la información.";
    return;
  } else if (mes_elegido === "enero" && dia_elegido >= 20) {
    console.log("Usted es del Signo de Acuario");
    lblinfoconsola.innerHTML = "Usted es del Signo de Acuario";
  } else if (mes_elegido === "febrero" && dia_elegido <= 18) {
    console.log("Usted es del Signo de Acuario");
    lblinfoconsola.innerHTML = "Usted es del Signo de Acuario";
  } else if (mes_elegido === "diciembre" && dia_elegido >= 22) {
    console.log("Usted es del Signo de Capricornio");
    lblinfoconsola.innerHTML = "Usted es del Signo de Capricornio";
  } else if (mes_elegido === "enero" && dia_elegido <= 19) {
    console.log("Usted es del Signo de Capricornio");
    lblinfoconsola.innerHTML = "Usted es del Signo de Capricornio";
  } else if (mes_elegido === "febrero" && dia_elegido >= 19) {
    console.log("Usted es del Signo de Piscis");
    lblinfoconsola.innerHTML = "Usted es del Signo de Piscis";
  } else if (mes_elegido === "marzo" && dia_elegido <= 20) {
    console.log("Usted es del Signo de Piscis");
    lblinfoconsola.innerHTML = "Usted es del Signo de Piscis";
  } else if (mes_elegido === "marzo" && dia_elegido >= 21) {
    console.log("Usted es del Signo de Aries");
    lblinfoconsola.innerHTML = "Usted es del Signo de Aries";
  } else if (mes_elegido === "abril" && dia_elegido <= 19) {
    console.log("Usted es del Signo de Aries");
    lblinfoconsola.innerHTML = "Usted es del Signo de Aries";
  } else if (mes_elegido === "abril" && dia_elegido >= 20) {
    console.log("Usted es del Signo de Tauro");
    lblinfoconsola.innerHTML = "Usted es del Signo de Tauro";
  } else if (mes_elegido === "mayo" && dia_elegido <= 20) {
    console.log("Usted es del Signo de Tauro");
    lblinfoconsola.innerHTML = "Usted es del Signo de Tauro";
  } else if (mes_elegido === "mayo" && dia_elegido >= 21) {
    console.log("Usted es del signo de Géminis");
    lblinfoconsola.innerHTML = "Usted es del Signo de Géminis";
  } else if (mes_elegido === "junio" && dia_elegido <= 20) {
    console.log("Usted es del signo de Géminis");
    lblinfoconsola.innerHTML = "Usted es del Signo de Géminis";
  } else if (mes_elegido === "junio" && dia_elegido >= 21) {
    console.log("Usted es del Signo de Cáncer");
    lblinfoconsola.innerHTML = "Usted es del Signo de Cáncer";
  } else if (mes_elegido === "julio" && dia_elegido <= 22) {
    console.log("Usted es del Signo de Cáncer");
    lblinfoconsola.innerHTML = "Usted es del Signo de Cáncer";
  } else if (mes_elegido === "julio" && dia_elegido >= 23) {
    console.log("Usted es del Signo de Leo");
    lblinfoconsola.innerHTML = "Usted es del Signo de Leo";
  } else if (mes_elegido === "agosto" && dia_elegido <= 22) {
    console.log("Usted es del Signo de Leo");
    lblinfoconsola.innerHTML = "Usted es del Signo de Leo.";
  } else if (mes_elegido === "agosto" && dia_elegido >= 21) {
    console.log("Usted es del Signo de Virgo.");
    lblinfoconsola.innerHTML = "Usted es del Signo de Virgo.";
  } else if (mes_elegido == "septiembre" && dia_elegido <= 22) {
    console.log("Usted es del signo de Virgo");
    lblinfoconsola.innerHTML = "Usted es del Signo de Virgo";
  } else if (mes_elegido === "septiembre" && dia_elegido >= 23) {
    console.log("Usted es del signo de Libra");
    lblinfoconsola.innerHTML = "Usted es del Signo de Libra";
  } else if (mes_elegido === "octubre" && dia_elegido <= 22) {
    console.log("Usted es del Signo de Libra");
    lblinfoconsola.innerHTML = "Usted es del Signo de Libra";
  } else if (mes_elegido === "octubre" && dia_elegido >= 23) {
    console.log("Usted es del signo de Escorpio");
    lblinfoconsola.innerHTML = "Usted es del Signo de Escorpio";
  } else if (mes_elegido === "noviembre" && dia_elegido <= 21) {
    console.log("Usted es del Signo de Escorpio");
    lblinfoconsola.innerHTML = "Usted es del Signo de Escorpio";
  } else if (mes_elegido === "noviembre" && dia_elegido >= 22) {
    console.log("Usted es del Signo de Sagitario");
    lblinfoconsola.innerHTML = "Usted es del Signo de Sagitario";
  } else if (mes_elegido === "diciembre" && dia_elegido <= 21) {
    console.log("Usted es del Signo de Sagitario");
    lblinfoconsola.innerHTML = "Usted es del Signo de Sagitario";
  } else {
    console.warn(
      "Falta seleccionar datos para poder ser ejecutada completamente esta aplicación."
    );
    lblinfoconsola.innerHTML =
      "Falta seleccionar datos para poder ser ejecutada completamente esta aplicación.";
  }
}
