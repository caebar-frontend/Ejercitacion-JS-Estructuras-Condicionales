// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.
function VerTipoTriangulo() {
const AngA = document.getElementById('Angulo1').value
const AngB = document.getElementById('Angulo2').value
const AngC = document.getElementById('Angulo3').value


const InfoConsola = document.getElementById('lblconsola')

let Ang1 = Number.parseInt(AngA)
let Ang2 = Number.parseInt(AngB)
let Ang3 = Number.parseInt(AngC)
let AngulosTodos = Ang1 + Ang2 + Ang3




       if (AngulosTodos === 0) {
            console.error('En un triángulo los 3 ángulos son diferentes, revisar los datos ingresados.')
            InfoConsola.innerHTML = `Atención ---> En un triángulo los 3 ángulos son diferentes, revisar los datos ingresados.`
        }
       else if (Ang1 && Ang2 && Ang3 === 60) {
       console.log('El triángulo es equilátero.')
        InfoConsola.innerHTML = `Atención ---> El triángulo es equilátero.`
        } 
        else if (AngulosTodos > 180) {
        console.error('En un triángulo los 3 ángulos suman 180°, revisá los números tipeados.')
         InfoConsola.innerHTML = `Atención ---> En un triángulo los 3 ángulos suman 180°, revisá los números tipeados.`
        }
        else if (AngulosTodos < 180) {
          console.error('En un triángulo los 3 ángulos suman en total 180°, inspeccionar los datos ingresados.')
            InfoConsola.innerHTML = `Atención ---> En un triángulo los 3 ángulos suman en total 180°, inspeccionar los datos ingresados.`
        }
        else if (Ang1 === Ang2 || Ang1 === Ang3 || Ang2 === Ang3 && AngulosTodos === 180) {
           console.warn('El triángulo es isósceles.')
            InfoConsola.innerHTML = `Atención ---> El triángulo es isósceles.`
        }
        else if (Ang1 !== Ang2 || Ang1 !== Ang3 || Ang2 !== Ang3 && AngulosTodos === 180) {
           console.info('El triángulo es escaleno')
            InfoConsola.innerHTML = `Atención ---> El triángulo es escaleno`
        }
        
        else {
          console.warn('¡¡Prueba con nuevos valores!!')
            InfoConsola.innerHTML = `Atención ---> ¡¡Prueba con nuevos valores!!`
        }

}