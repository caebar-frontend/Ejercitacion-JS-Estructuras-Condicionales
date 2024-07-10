
/**************************************************** */

// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. El número cero no es ni positivo ni negativo ni par ni impar.

  var onButtonClick = function () {
    
  var numero = document.getElementById("numero").value;
  if (numero === "") {
    alert("Usted no escribió ningun caracter en el input.");
    console.warn("Analizando dato ingresado...");
    console.log("Usted no escribió ningun caracter en el input.");
    console.error("----------------------------------------------");
  }
  else if (numero == 0) {
    alert("El número es cero. No es positivo, tampoco negativo, no es par o impar.");
    console.warn("Analizando dato ingresado...");
    console.log("El número es cero. No es positivo, tampoco negativo, no es par o impar.");
    console.error("----------------------------------------------");

  } else if (numero > 0 && numero % 2 == 0) {
    alert("El número es positivo y par. Deshace lo escrito y volvé a tipear otro dato.");
    console.warn("Analizando dato ingresado...");
    console.log("El número es positivo y par. Deshace lo escrito y volvé a tipear otro dato.");
    console.error("----------------------------------------------");

  } else if (numero > 0 && numero % 2 != 0) {
    alert("El número es positivo e impar. Suprimí el dato ingresado, y escribí otro número.");
    console.warn("Analizando dato ingresado...");
    console.log("El número es positivo e impar. Suprimí el dato ingresado, y escribí otro número.");
    console.error("----------------------------------------------");

  } else if (numero < 0 && numero % 2 != 0) {
    alert("El número es negativo, también impar. Eliminá el caracter e ingresá otro para seguir procesando datos.");
    console.warn("Analizando dato ingresado...");
    console.log("El número es negativo, también impar. Eliminá el caracter e ingresá otro para seguir procesando datos.");
    console.error("----------------------------------------------");

  } else if (numero < 0 && numero % 2 == 0) {
    alert("El número es negativo, y está en el grupo de los pares. Borrá el número e ingresá otro para seguir procesando datos.");
    console.warn("Analizando dato ingresado...");
    console.log("El número es negativo, y está en el grupo de los pares. Borrá el número e ingresá otro para seguir procesando datos.");
    console.error("----------------------------------------------");

  }
  else {
    alert("¡Ingresaste un caracter que No es Número!.");
    console.warn("Analizando dato ingresado...");
    console.log("¡Ingresaste un caracter que No es Número!.");
    console.error("----------------------------------------------");
  }

};



/***************************************************** */


function BorrarDatos() {
document.getElementById("numero").value ="";

}


