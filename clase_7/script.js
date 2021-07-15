/* //STRINGIFY

const producto1 = { id: 2, producto: "Arroz" };
const enJSON = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON); // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"} */

//////////////////////////////////////////////////

//PARSE

/* const enJSON = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON); // string
console.log(typeof producto1); // object
console.log(producto1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id); // 2
 */

//////////////////////////////////////////////////
/* 
//EJEMPLO APLICADO: ALMACENAR ARRAY DE OBJETOS
const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//Almacenar producto por producto
for (const producto of productos) {
  guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

//////////////////////////////////////////////////
console.log(guardarLocal);
*/
//// PRA BORRAR EL STORAGE
/* localStorage.clear();
sessionStorage.clear();
 */
/* Obtener nombre y apellido por prompt y guardarlos en localstorage y pedir ademas la fecha de hoy y guardarla en el sessionStorage */

// EJERCICIO DEL RECREO ;)
/* localStorage.setItem("nombre", prompt("indique su nombre"));
let nombre = localStorage.getItem("nombre");
localStorage.setItem("apellido", prompt("indique su apellido"));
let apellido = localStorage.getItem("apellido");

sessionStorage.setItem("fecha", prompt("ingrese la fecha de hoy"));
let fecha = sessionStorage.getItem("fecha");

console.log(nombre, apellido, fecha);
 */
/* Consigna de hoy
Obtener nombre y apellido por prompt crear un objeto persona y guardarlos en localstorage y pedir ademas la 3 gustos de helado y guardarlos en array y guardarlos en el sessionStorage
Y después mostrar esos datos con console.log */






///AFTER ////
//////////// LISTADO DE ALUMNOS PRESENTES ////////////

// El sistema de permitir:
//  1 Ingresar la cantidad de alumnos presentes
//  2 Ingresar nombre, apellido y edad de cada uno
//  3 Preguntar si desea guardar los datos
//  4 Mostrar el listado de alumnos presentes ordenados por edad
//  5 Mostrar el listado de alumnos presentes ordenados alfabeticamente

let alumnosPresentes = parseInt(prompt('Ingresar la cantidad de alumnos presentes'));

const alumnos = [
  {  nombre: "Nahuel", apellido: "rodrigues", edad: 23 },
  {  nombre: "Jose", apellido: "gonzalez", edad: 32 },
  { nombre: "Fede", apellido: "fernandez", edad: 20 },
  { nombre: "Ernesto", apellido: "hesse", edad: 35 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

for (const nombre of alumnos) {
  guardarLocal(alumnos.nombre, JSON.stringify(nombre));
}

ArrayPersonasOrdenado = [];
ArrayPersonasOrdenadoPorNombre = [];

ArrayPersonasOrdenado = alumnos.sort(function (a, b) {
  return b.edad - a.edad;
  return a.apellido - b.apelido;
});



console.log(ArrayPersonasOrdenado);
console.log(ArrayPersonasOrdenadoPorNombre);
