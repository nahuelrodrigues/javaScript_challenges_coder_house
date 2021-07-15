// Armo una funcion constructora que me va a crear las tareas que voy a guardar
// La exporto para poder usarla en otros archivos donde la necesite
export default function NuevaTarea(fecha, horario, nombreDeLaTarea) {
  // Defino propiedades, fecha, horario, nombreDeLaTarea, estadoDeLaTarea; y sus respectivos
  // valores que se determinan por los parametros, salvo por el estado que ya tiene valor por default
  this.fecha = fecha;
  this.horario = horario;
  this.nombreDeLaTarea = nombreDeLaTarea;
  this.estado = "pendiente";
  // Creo metodo para cambiar el estado de la tarea
  this.cambioEstado = (estado) => {
    this.estado = estado;
    return alert("Cambio su estado exitosamente, su estado es: " + this.estado);
  };
  // Creo metodo para cambiar la fecha y hora de la tarea
  this.cambiofechayhora = (fechaNueva, horarioNuevo) => {
    this.fecha = fechaNueva;
    this.horario = horarioNuevo;
    return alert(
      "Cambio existoso, la nueva fecha y horario es: " +
        this.fecha +
        this.horario
    );
  };
}

// Esta es otra forma de definir los metodos del objeto, al crearlo de esta manera el objeto ocupa
// menos espacio de memoria

// NuevaTarea.prototype.cambioEstado = (estado) => {
//   this.estado = estado;
// return alert("Cambio su estado exitosamente, su estado es: " + this.estado);
// };

// NuevaTarea.prototype.cambioFecha = (fechaNueva, horarioNuevo) => {
//   this.fecha = fechaNueva;
//   this.horario = horarioNuevo;
//   return alert(
//     "Cambio existoso, la nueva fecha y horario es: " + this.fecha + this.horario
//   );
// };

// Aca creo tambien una clase usando la otra sintaxix
// class NuevaTarea {
//   constructor(fecha, horario, nombreDeLaTarea) {
//     this.id = (function () {
//       this.id = this.id + 1;
//     })();
//     this.fecha = fecha;
//     this.horario = horario;
//     this.nombreDeLaTarea = nombreDeLaTarea;
//     this.estado = "pendiente";
//   }

//   cambioFecha(fechaNueva, horarioNuevo) {
//     this.fecha = fechaNueva;
//     this.horario = horarioNuevo;
//     return alert(
//       "Cambio existoso, la nueva fecha y horario es: " +
//         this.fecha +
//         this.horario
//     );
//   }

//   cambioEstado(estado) {
//     this.estado = estado;
//     return alert("Cambio su estado exitosamente, su estado es: " + this.estado);
//   }
// }
