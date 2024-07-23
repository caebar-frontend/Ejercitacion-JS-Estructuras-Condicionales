// 7. En un hospital se ha hecho un estudio sobre los pacientes registrados durante los últimos 10 años, con el objeto de hacer una aproximación de los costos de internación por paciente.
// Se obtuvo un costo promedio diario según el tipo de enfermedad que aqueja al paciente.
// La siguiente tabla expresa los costos diarios, según el tipo de enfermedad:
//
// | Tipo de Enfermedad | Costo/Paciente/Día |
// |--------------------|--------------------|
// | 1                  | 125                |
// | 2                  | 116                |
// | 3                  | 120                |
// | 4                  | 132                |
// | 5                  | 138                |
//
// Construya un algoritmo que calcule e imprima el costo total que representa un paciente.


function calcular() {
    const afeccion = document.getElementById('afeccion').value;
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const lbl = document.getElementById('labelconsola');
    
    let enfermedad = parseInt(afeccion);
    let dias = parseInt(dia);
    let meses = parseInt(mes);
    let resultado;
    
    
    if (isNaN(enfermedad)) {
      console.warn('Es obligatorio seleccionar una Afección para el cálculo.');
      lbl.innerHTML = "Es obligatorio seleccionar una Afección para el cálculo."
      return;
    }

    else if (isNaN(dias) && isNaN(meses)) {
        console.warn('Seleccionar una de las opciones (días o meses).');
        lbl.innerHTML = "Seleccionar una de las opciones (días o meses)."
        return;
    }
    
    else if ( (enfermedad !== " ") && (dias !== " ") && (isNaN(meses)) ) {
        resultado = enfermedad * dias 
        console.log(`El costo de Internación es: $${resultado} pesos argentinos.`);
         lbl.innerHTML = `El costo de Internación es: $${resultado} pesos argentinos.`
    }

    else if ((enfermedad !== " ") && (meses !== " ") && (isNaN(dias))) {
        resultado = enfermedad * meses
        console.log(`El costo de Internación es: $${resultado} pesos argentinos.`);
         lbl.innerHTML = `El costo de Internación es: $${resultado} pesos argentinos.`
    }

    else if ((enfermedad !== "") && (dias !== "") && (meses !== "") ) {
        console.log(`Solamente elegir una de las dos opciones (días o meses).`);
         lbl.innerHTML = `Solamente elegir una de las dos opciones (días o meses).`
    }
    else {
       
        console.log(`Falla en la operación, vuelva a reintentar.`);
        lbl.innerHTML = `Falla en la operación, vuelva a reintentar.`
    }

}