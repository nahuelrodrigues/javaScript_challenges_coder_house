// //EJERCICIO 1

// /* let titulo = document.getElementById("titulo");
// console.log(titulo);

// let lista = document.getElementsByTagName("ul");
// console.log(lista);

// let items = document.getElementsByClassName("precio");
// console.log(items);

// let parrafo = document.createElement("p");

// let precios = document.getElementsByClassName("precio");

// const precioTotal =
//   parseInt(precios[0].innerHTML) +
//   parseInt(precios[1].innerHTML) +
//   parseInt(precios[2].innerHTML);
// console.log("Precio total: ", precioTotal);
//  */

// // let parrafo = document.getElementsByTagName("p");
// // parrafo.innerHTML = "su precio ";

// // document.body.appendChild(parrafo);

// //EJERCICIO 2

// // // Crear nodo de tipo Elemento, etiqueta p
// // let parrafo = document.createElement("p");
// // // Insertar HTML interno
// // parrafo.innerHTML =
// //   "<h2>¡Hola Coder! como va? estoy agregando un hijo con appenChild con javascript</h2>";
// // // Añadir el nodo Element como hijo de body
// // document.body.appendChild(parrafo);

// //PALABRAS RESERVADAS

// // console.log(document);
// // console.log(document.head);
// // console.log(document.body);

// // //CODIGO HTML DE REFERENCIA
// // <div id="app">
// //   <p id="parrafo1">Hola Mundo</p>
// // </div>;

// //CODIGO JS
// // let div = document.getElementById("app");
// // let parrafo = document.getElementById("parrafo1");
// // console.log(div.innerHTML);
// // console.log(parrafo.innerHTML);

// //CLASSNAME CLASSNAWEEE
// // let paises = document.getElementsByClassName("paises");
// // console.log(paises[0].innerHTML);
// // console.log(paises[1].innerHTML);
// // console.log(paises[2].innerHTML);

// // let parrafo = document.getElementsByTagName("p");
// // console.log(parrafo);
// // console.log(paises);

// // let contenedores = document.getElementsByTagName("div");
// // // console.log(contenedores[0].innerHTML);
// // // console.log(contenedores[1].innerHTML);
// // // console.log(contenedores[2].innerHTML);

// // for (const div of contenedores) {
// //   console.log(div.innerHTML);
// // }

// // for (const pais of paises) {
// //   console.log(pais.innerHTML);
// // }
// // // Crear nodo de tipo Elemento, etiqueta p
// // let parrafo = document.createElement("p");
// // // Insertar HTML interno
// // parrafo.innerHTML = "<h2>¡Hola Coder!</h2>";
// // // Añadir el nodo Element como hijo de body
// // document.body.appendChild(parrafo);

// // // //CODIGO HTML DE REFERENCIA

// // //CODIGO JS
// // let paises = document.getElementsByClassName("paises");
// // console.log(paises[0].innerHTML);
// // console.log(paises[1].innerHTML);
// // console.log(paises[2].innerHTML);

// // //CODIGO JS
// // let contenedores = document.getElementsByTagName("div");
// // console.log(contenedores[0].innerHTML);
// // console.log(contenedores[1].innerHTML);
// // console.log(contenedores[2].innerHTML);

// // let paises = document.getElementsByClassName("paises");
// // let contenedores = document.getElementsByTagName("div");

// // for (const pais of paises) {
// //   console.log(pais.innerHTML);
// // }

// // for (const div of contenedores) {
// //   console.log(div.innerHTML);
// // }

// // // Crear nodo de tipo Elemento, etiqueta p
// // let parrafo = document.createElement("p");
// // // Insertar HTML interno
// // parrafo.innerHTML = "<h2>¡Hola Coder!</h2>";
// // // Añadir el nodo Element como hijo de body
// // document.body.appendChild(parrafo);

// // let parrafo      = document.getElementById("parrafo1");
// // //Elminando el propio elemento, referenciando al padre
// // parrafo.parentNode.removeChild(parrafo);

// // let paises       = document.getElementsByClassName("paises");
// // //Eliminando el primer elemento de clase paises
// // paises[0].parentNode.removeChild(paises[0])

// // //CODIGO HTML DE REFERENCIA
// // //<input id = "nombre" type="text">
// // // //<input id = "edad"   type="number">

// // document.getElementById("nombre").value = "HOMERO";
// // document.getElementById("edad").value = 39;
// // let producto = { id: 1, nombre: "Arroz", precio: 125 };
// // let contenedor = document.createElement("div");
// // //Definimos el innerHTML del elemento con una plantilla de texto
// // contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
// //                         <p>  Producto: ${producto.nombre}</p>
// //                         <b> $ ${producto.precio}</b>`;
// // //Agregamos el contenedor creado al body
// // document.body.appendChild(contenedor);

// // let producto = { id: 1,  nombre: "Arroz", precio: 125 };
// // let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
// // let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
// // //El valor es idéntico pero la construcción de la plantilla es màs sencilla
// // console.log(concatenado);
// // console.log(plantilla);

// // let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
// // let contenedor = document.createElement("div");
// // //Definimos el innerHTML del elemento con una plantilla de texto
// // contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
// //                         <p>  Producto: ${producto.nombre}</p>
// //                         <b> $ ${producto.precio}</b>`;
// //Agregamos el contenedor creado al body
// // document.body.appendChild(contenedor);

// // const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
// //                   {  id: 2,  nombre: "Fideo", precio: 70 },
// //                   {  id: 3,  nombre: "Pan"  , precio: 50},
// //                   {  id: 4,  nombre: "Flan" , precio: 100}];

// // for (const producto of productos) {
// //     let contenedor = document.createElement("div");
// //     //Definimos el innerHTML del elemento con una plantilla de texto
// //     contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
// //                             <p>  Producto: ${producto.nombre}</p>
// //                             <b> $ ${producto.precio}</b>`;
// //     document.body.appendChild(contenedor);
// const productos = [
//   { id: 1, nombre: "Arroz", precio: 125 },
//   { id: 2, nombre: "Fideo", precio: 70 },
//   { id: 3, nombre: "Pan", precio: 50 },
//   { id: 4, nombre: "Flan", precio: 100 },
// ];

// for (const producto of productos) {
//   let contenedor = document.createElement("div");
//   //Definimos el innerHTML del elemento con una plantilla de texto
//   contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                             <p>  Producto: ${producto.nombre}</p>
//                             <b> $ ${producto.precio}</b>`;
//   document.body.appendChild(contenedor);
// }

// // //Consigna:  Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. En función del tipo de simulador que hayas elegido, deberás:
// // Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.
// // Modificar etiquetas existentes en función del resultado de operaciones.

// AFTER CLASSSS

const listaAlumnos = [];

let condicion = true;

class Alumnos {
  constructor(nombre, apellido, edad) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = parseInt(edad));
  }
}

do {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let edad = prompt("Ingrese su edad");

  let AlumnoPresente = new Alumnos(nombre, apellido, edad);

  listaAlumnos.push(AlumnoPresente);

  condicion = confirm("quieres seguir agregando alumnos?");
} while (condicion != false);

const section = document.querySelector(".contenedor");
listaAlumnos.forEach((element) => {});
const ul = document.createElement("ul");

for (let element of listaAlumnos) {
  let li = document.createElement("li");
  li.innerHTML = `<p>${element.nombre}</p><br>
  <p>${element.apellido}</p><br>
  <p>${element.edad}</p><br>`;
  ul.appendChild(li);

  section.appendChild(ul);
}
