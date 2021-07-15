let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
const listaAlumnos = [];

function validarFormulario(evento) {
  evento.preventDefault();

  class Alumno {
    constructor(nombre, apellido, edad) {
      (this.nombre = nombre),
        (this.apellido = apellido),
        (this.edad = parseInt(edad));
    }
  }

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = parseInt(document.getElementById("edad").value);

  const alumnoPresente = new Alumno(nombre, apellido, edad);

  listaAlumnos.push(alumnoPresente);

  console.log(listaAlumnos);

  const section = document.querySelector(".contenedor");
  const ul = document.createElement("ul");

  let div = document.createElement("div");
  div.innerHTML = `<div class = "container border border-primary text-center"
            <p>Nombre: ${formulario.children[1].value}</p>
            <p>Apellido: ${formulario.children[3].value}</p>
            <p>Edad: ${formulario.children[5].value}</p>
            <p>Fecha de nacimiento: ${2021 - formulario.children[5].value} </p>
           </div> <hr>`;

  ul.appendChild(div);
  section.appendChild(ul);
}
