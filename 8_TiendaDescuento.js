// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja.
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%.
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.

function recalculando() {
  const dinero_abonar = document.getElementById("montoapagar").value;
  const bolitas = document.getElementById("bolitascolores").value;
  const labelresultado = document.getElementById("labelresultado");
  const labelconsola = document.getElementById("labelconsola");

  let montoapagar = parseInt(dinero_abonar);
  let bolitascolores = parseInt(bolitas);
  let cuentafinal;
  let cuentafinaltotal;
  console.warn(
    `---------------------------------------------------------------------------`
  );
  console.warn("Iniciando aplicacion....");

  if (isNaN(montoapagar)) {
    console.warn("Es necesario ingresar un monto a abonar.");
    labelconsola.innerHTML = "Es necesario ingresar un monto a abonar.";
    labelresultado.innerHTML = `¡Faltan Datos: Monto de Dinero!`;
  } else if (isNaN(bolitascolores)) {
    console.warn("Es necesario seleccionar una bolita de color.");
    labelconsola.innerHTML = "Es necesario seleccionar una bolita de color.";
    labelresultado.innerHTML = `¡Faltan Datos: Seleccionar Bolita!`;
  } else if (bolitascolores === 0) {
    cuentafinal = montoapagar * 1;
    console.log(
      `La cuenta final a abonar por el cliente es: $${cuentafinal}. No obtiene descuento porque la bolita es de color blanco.`
    );
    labelconsola.innerHTML = `La cuenta final a abonar por el cliente es: $${cuentafinal}. No obtiene descuento porque la bolita es de color blanco.`;
    labelresultado.innerHTML = `$${cuentafinal}`;
  } else if (bolitascolores === 10) {
    cuentafinal = (montoapagar * 10) / 100;
    cuentafinaltotal = montoapagar - cuentafinal;
    console.log(
      `Descuento obtenido del 10%: $${cuentafinal}. La cuenta final a abonar por el cliente es: $${cuentafinaltotal}.`
    );
    labelconsola.innerHTML = `Descuento obtenido del 10%: $${cuentafinal}. La cuenta final a abonar por el cliente es: $${cuentafinaltotal}.`;
    labelresultado.innerHTML = `$${cuentafinaltotal}`;
  } else if (bolitascolores === 25) {
    cuentafinal = (montoapagar * 25) / 100;
    cuentafinaltotal = montoapagar - cuentafinal;
    console.log(
      `Descuento obtenido del 25%: $${cuentafinal}. La cuenta final a abonar por el cliente es: $${cuentafinaltotal}.`
    );
    labelconsola.innerHTML = `Descuento obtenido del 25%: $${cuentafinal}. La cuenta final a abonar por el cliente es: $${cuentafinaltotal}.`;
    labelresultado.innerHTML = `$${cuentafinaltotal}`;
  } else if (bolitascolores === 50) {
    cuentafinal = (montoapagar * 50) / 100;
    cuentafinaltotal = montoapagar - cuentafinal;
    console.log(
      `Descuento obtenido del 50%: $${cuentafinal}. La cuenta final a abonar por el cliente es: $${cuentafinaltotal}.`
    );
    labelconsola.innerHTML = `Descuento obtenido del 50%: $${cuentafinal}. La cuenta final a abonar por el cliente es: $${cuentafinaltotal}.`;
    labelresultado.innerHTML = `$${cuentafinaltotal}`;
  } else if (bolitascolores === 100) {
    cuentafinal = 0;
    console.log(
      `La cuenta final a abonar por el cliente es: $${cuentafinal}. Lleva gratis los productos elegidos.`
    );
    labelconsola.innerHTML = `La cuenta final a abonar por el cliente es: $${cuentafinal}. Lleva gratis los productos elegidos.`;
    labelresultado.innerHTML = `$${cuentafinal}`;
  } else {
    console.error(
      `Contactar al administrador del proyecto porque hay fallas en el sistema.`
    );
  }
}
