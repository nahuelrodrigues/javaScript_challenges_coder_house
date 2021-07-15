// Importo la funcion hacerTareas para poder utilizarla
import { hacerTareas } from "./functions.js";

// const obj = {
//   propiedades: "valores",
//   metodos: () => {},
// };

// Funcion constructora

// function Perfil(nombre, apellido, fechaDeNacimiento) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.fechaDeNacimiento = fechaDeNacimiento;
// }

// Clase

// class Perfil {
//   constructor(nombre, apellido, fechaDeNacimiento) {
//     this.nombre = nombre;
//     this.nombre = apellido;
//     this.fechaDeNacimiento = fechaDeNacimiento;
//   }
// }

// // Creo una clase a partir de una FUNCION CONSTRUCTORA que me va a crear las tareas que voy a guardar
// function NuevaTarea(fecha, horario, nombreDeLaTarea) {
//   // Defino propiedades, fecha, horario, nombreDeLaTarea, estadoDeLaTarea;
//   // y sus respectivos valores que se determinan por los parametros,
//   // salvo por el estado que ya tiene valor por default
//   this.fecha = fecha;
//   this.horario = horario;
//   this.nombreDeLaTarea = nombreDeLaTarea;
//   this.estado = "pendiente";
//   // // Creo metodo para cambiar el estado de la tarea
//   // this.cambioEstado = function (estado) {
//   //   this.estado = estado;
//   //   return alert("Cambio su estado exitosamente, su estado es: " + this.estado);
//   // };
//   // // Creo metodo para cambiar la fecha y hora de la tarea
//   // this.cambiofechayhora = function (fechaNueva, horarioNuevo) {
//   //   this.fecha = fechaNueva;
//   //   this.horario = horarioNuevo;
//   //   return alert(
//   //     "Cambio existoso, la nueva fecha y horario es: " +
//   //       this.fecha +
//   //       this.horario
//   //   );
//   // };
// }

// // Esta es otra forma de definir los metodos del objeto, al crearlo de esta manera el objeto ocupa
// // menos espacio de memoria

// NuevaTarea.prototype.cambioEstado = function (estado) {
//   this.estado = estado;
//   return alert("Cambio su estado exitosamente, su estado es: " + this.estado);
// };

// NuevaTarea.prototype.cambioFecha = function (fechaNueva, horarioNuevo) {
//   this.fecha = fechaNueva;
//   this.horario = horarioNuevo;
//   return alert(
//     "Cambio existoso, la nueva fecha y horario es: " + this.fecha + this.horario
//   );
// };

// String.prototype.repetir = function (numero) {
//   let concat = "";
//   for (let i = 0; i < numero; i++) {
//     concat = concat + this;
//   }
//   return concat;
// };

// let string = "hola".repetir(3);

// console.log(string);

// // Creo una clase una clase usando la otra sintaxix
// // class NuevaTarea {
// //   constructor(fecha, horario, nombreDeLaTarea) {
// //     this.fecha = fecha;
// //     this.horario = horario;
// //     this.nombreDeLaTarea = nombreDeLaTarea;
// //     this.estado = "pendiente";
// //   }

// //   cambioFecha(fechaNueva, horarioNuevo) {
// //     this.fecha = fechaNueva;
// //     this.horario = horarioNuevo;
// //     return alert(
// //       "Cambio existoso, la nueva fecha y horario es: " +
// //         this.fecha +
// //         this.horario
// //     );
// //   }

// //   cambioEstado(estado) {
// //     this.estado = estado;
// //     return alert("Cambio su estado exitosamente, su estado es: " + this.estado);
// //   }
// // }

// function hacerTareas() {
//   // Pido los valores que necesito para crear el objeto
//   var fecha = prompt("Ingresa la fecha en la que quieres agendar tu tarea");
//   var horario = prompt(
//     "Ingresa el horario en el que quieres realizar la tarea"
//   );
//   var nombre = prompt(
//     "Ingresa el nombre con el que quieres reconocer la tarea"
//   );
//   // Con los datos creo un nuevo objeto y lo devuelvo
//   var obj = new NuevaTarea(fecha, horario, nombre);
//   return obj;
// }

// Variable para guardar la cantidad de tareas que voy a crear
var cantidadDeTareas = parseInt(
  prompt("Ingresa la cantidad de tareas que quieres crear")
);

console.log(cantidadDeTareas);

// Creo un objeto donde voy a guardar los nuevos objetos
var tareas = {};
console.log(tareas);

// Creo un bucle donde en cada vuelta creo un nuevo objeto y lo agrego
// a mi objeto contenedor tareas
for (var i = 0; i < cantidadDeTareas; i++) {
  var aux = hacerTareas();
  tareas[i] = aux;
}

console.log(tareas);

// Con este for puedo recorrer cada propiedad en el objeto
for (var prop in tareas) {
  // Puedo ver los objetos que se crearon y guardaron
  console.log(tareas[prop]);
  // Puedo cambiar el estado de todos los objetos creados
  tareas[prop].cambioEstado("completo");
}

console.log(tareas);
