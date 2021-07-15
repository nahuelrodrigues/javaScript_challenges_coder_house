// Importo la clase para poder usarla en mi funcion que crea tareas
import NuevaTarea from "./objects.js";

export function hacerTareas() {
  // Pido los valores que necesito para crear el objeto
  var fecha = prompt("Ingresa la fecha en la que quieres agendar tu tarea");
  var horario = prompt(
    "Ingresa el horario en el que quieres realizar la tarea"
  );
  var nombre = prompt(
    "Ingresa el nombre con el que quieres reconocer la tarea"
  );
  // Con los datos creo un nuevo objeto y lo devuelvo
  var obj = new NuevaTarea(fecha, horario, nombre);
  return obj;
}
