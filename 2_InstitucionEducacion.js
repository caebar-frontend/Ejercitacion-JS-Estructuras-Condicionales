// 2. Una institución de educación, con carreras tanto diurnas como vespertinas, considera lo siguiente en su proceso académico:
// si un estudiante de carrera vespertina tiene una nota de presentación mayor o igual a 6, se exime, y si no alcanza el 6 pero tiene una nota de presentación igual o mayor a 3.5, rinde examen. 
// Si el estudiante es de carrera diurna y si su nota de presentación es mayor o igual a 3.5, rinde examen (no hay posibilidad de eximirse). 
// En ambos regímenes, si la nota de presentación es menor que 3.5, reprueba. 
// Hacer la tabla de decisión y escribir el algoritmo correspondiente.
function ProcesamientoDatosIngresados() {
const tpdcarrera = document.getElementById("tipodecarrera").value;
const ntobtenida = document.getElementById("notaobtenida").value;
const nombre = document.getElementById("nombre").value; 
const apellido = document.getElementById("apellido").value;
const dni = document.getElementById("dni").value; 

const n1 = 6
const n2 = 3.50
const n3 = 10
const n4 = 0




tpdcarrera == "vespertina" && ntobtenida >= n1 && ntobtenida <= n3 ? console.warn("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Carrera Vespertina: Sr. / Sra. estudiante, ¡Felicitaciones!, ¡Te eximiste!") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Vespertina: Sr. / Sra. estudiante, ¡Felicitaciones!, ¡Te eximiste!") : ("") ;

tpdcarrera == "vespertina" && ntobtenida >= n2 && ntobtenida < n1 ? console.log("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n","Carrera Vespertina: Sr. / Sra. estudiante, Rendir Nuevamente Examen!") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Vespertina: Sr. / Sra. estudiante, Rendir Nuevamente Examen!") : ("");

tpdcarrera == "diurna" && ntobtenida >= n1 && ntobtenida <= n3 ? console.error("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Carrera Diurna: Sr./Sra. estudiante, ¿No fue asignado a la consigna?") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Diurna: Sr./Sra. estudiante, ¿No fue asignado a la consigna?") : ("");

tpdcarrera == "diurna" && ntobtenida >= n2 && ntobtenida < n1 ? console.info("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Carrera Diurna: Sr./Sra. estudiante, ¡debe rendir examen!") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Diurna: Sr./Sra. estudiante, ¡debe rendir examen!") : ("");

tpdcarrera == "vespertina" && ntobtenida >= n4 && ntobtenida < n2 ? console.warn("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Carrera Vespertina: Sr./Sra. estudiante, ¡Reprobó la evaluación tomada!") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Vespertina: Sr./Sra. estudiante, ¡Reprobó la evaluación tomada!"): ("");

tpdcarrera == "diurna" && ntobtenida >= n4 && ntobtenida < n2 ? console.log("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Carrera Diurna: Sr./Sra. estudiante, ¡Reprobó la evaluación solicitada!") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Diurna: Sr./Sra. estudiante, ¡Reprobó la evaluación solicitada!") : ("");

tpdcarrera == "" && ntobtenida == "" ? console.error("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Datos ingresados incorrectos.") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Datos ingresados incorrectos.") : ("");

tpdcarrera == "vespertina" && ntobtenida == "" ? console.info("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "¡Datos Incompletos para poder ser procesados correctamente!") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "¡Datos Incompletos para poder ser procesados correctamente!") : ("");

tpdcarrera == "diurna" && ntobtenida == "" ? console.warn("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "¡Datos Incompletos para poder ser evaluados satisfactoriamente!") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "¡Datos Incompletos para poder ser evaluados satisfactoriamente!") : ("");

tpdcarrera == "vespertina" && ntobtenida > n3 ? console.log("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Carrera Vespertina: Sr. / Sra. estudiante, ingrese un calificación entre 1 a 10") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Vespertina: Sr. / Sra. estudiante, ingrese un calificación entre 1 a 10") : ("") ;

tpdcarrera == "diurna" && ntobtenida > n3 ? console.error("\n", "Apellido: "+ apellido, "\n", "Nombre: " + nombre, "\n", "D.N.I. N°: " + dni, "\n", "Carrera Diurna: Sr. / Sra. estudiante, ingrese un calificación entre 1 a 10") - alert("\n" + "Apellido: "+ apellido + "\n" + "Nombre: " + nombre + "\n" + "D.N.I. N°: " + dni + "\n" + "Carrera Diurna: Sr. / Sra. estudiante, ingrese un calificación entre 1 a 10") : ("") ;

}