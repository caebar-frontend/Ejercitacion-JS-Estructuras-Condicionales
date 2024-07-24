// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

function ordenarvalores() {
  const A = document.getElementById("numero_uno").value;
  const B = document.getElementById("numero_dos").value;
  const C = document.getElementById("numero_tres").value;
  const InfoConsola = document.getElementById("infoconsola");

  let numA = Number.parseInt(A);
  let numB = Number.parseInt(B);
  let numC = Number.parseInt(C);

  let variables = new Array();
  variables.push(numA, numB, numC);

  if (variables[0] > variables[1] && variables[1] > variables[2]) {
    console.warn(
      "Primer Número: " +
        variables[2] +
        ", Segundo Número: " +
        variables[1] +
        ", Tercer Número: " +
        variables[0]
    );
    console.warn(
      "------------------------------------------------------------------------------------------"
    );
    InfoConsola.innerHTML =
      "Primer Número: " +
      variables[2] +
      ", Segundo Número: " +
      variables[1] +
      ", Tercer Número: " +
      variables[0];
  } else if (variables[0] > variables[2] && variables[2] > variables[1]) {
    console.warn(
      "Primer Número: " +
        variables[1] +
        ", Segundo Número: " +
        variables[2] +
        ", Tercer Número: " +
        variables[0]
    );
    console.warn(
      "------------------------------------------------------------------------------------------"
    );
    InfoConsola.innerHTML =
      "Primer Número: " +
      variables[1] +
      ", Segundo Número: " +
      variables[2] +
      ", Tercer Número: " +
      variables[0];
  } else if (variables[1] > variables[2] && variables[0] < variables[2]) {
    console.log(
      "Primer Número: " +
        variables[0] +
        ", Segundo Número: " +
        variables[2] +
        ", Tercer Número: " +
        variables[1]
    );
    console.log(
      "-------------------------------------------------------------------------------------------"
    );
    InfoConsola.innerHTML =
      "Primer Número: " +
      variables[0] +
      ", Segundo Número: " +
      variables[2] +
      ", Tercer Número: " +
      variables[1];
  } else if (variables[1] > variables[0] && variables[0] > variables[2]) {
    console.log(
      "Primer Número: " +
        variables[2] +
        ", Segundo Número: " +
        variables[0] +
        ", Tercer Número: " +
        variables[1]
    );
    console.log(
      "-------------------------------------------------------------------------------------------"
    );
    InfoConsola.innerHTML =
      "Primer Número: " +
      variables[2] +
      ", Segundo Número: " +
      variables[0] +
      ", Tercer Número: " +
      variables[1];
  } else if (variables[2] > variables[0] && variables[0] > variables[1]) {
    console.info(
      "Primer Número: " +
        variables[1] +
        ", Segundo Número: " +
        variables[0] +
        ", Tercer Número: " +
        variables[2]
    );
    console.info(
      "------------------------------------------------------------------------------------------"
    );
    InfoConsola.innerHTML =
      "Primer Número: " +
      variables[1] +
      ", Segundo Número: " +
      variables[0] +
      ", Tercer Número: " +
      variables[2];
  } else if (variables[2] > variables[0] && variables[0] < variables[1]) {
    console.info(
      "Primer Número: " +
        variables[0] +
        ", Segundo Número: " +
        variables[1] +
        ", Tercer Número: " +
        variables[2]
    );
    console.info(
      "------------------------------------------------------------------------------------------"
    );
    InfoConsola.innerHTML =
      "Primer Número: " +
      variables[0] +
      ", Segundo Número: " +
      variables[1] +
      ", Tercer Número: " +
      variables[2];
  } else if (variables[0] == variables[1]) {
    console.error("¡Números iguales en casillas no se procesan!");
    console.error("--------------------------------------------");
    InfoConsola.innerHTML = "¡Números iguales en casillas no se procesan!";
  } else if (variables[0] == variables[2]) {
    console.error("¡Númeración similar no se analiza!");
    console.error("----------------------------------");
    InfoConsola.innerHTML = "¡Númeración similar no se analiza!";
  } else if (variables[1] == variables[2]) {
    console.error("En las casillas hay números iguales, cambie la numeración!");
    console.error("----------------------------------------------------------");
    InfoConsola.innerHTML =
      "En las casillas hay números iguales, cambie la numeración!";
  } else {
    console.error(
      "¡Error!: Debe ingresar tres números enteros, en cada casilla digitos diferentes tipear."
    );
    console.error(
      "---------------------------------------------------------------------------------------"
    );
    InfoConsola.innerHTML =
      "¡Error!: Debe ingresar tres números enteros, en cada casilla digitos diferentes tipear.";
  }
}
