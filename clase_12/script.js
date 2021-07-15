/* window.addEventListener('DOMContentLoaded', function () {
    console.log('El DOM esta listo');
});


$( document ).ready(function() 
{
   console.log( "El DOM esta listo2" );
});

 */

/*  //Forma explicita
$( document ).ready(function() {
    console.log('El DOM esta listo');
});
//Forma corta de ready()
$(function() {
    console.log('El DOM esta listo');
});
//Forma corta con arrow function
$(() => {
    console.log('El DOM esta listo');
}); */

/* 

$( document ).ready(function() {
    console.log('El DOM esta listo');
});

window.addEventListener('load', function() {
    console.log( 'Todos los elementos de la ventana están cargados' );
});
 */
/* 
//Agregamos un botón al body como primer elemento
$("body").prepend('<button id="btnjQuery">CLICK</button>');

//Asociamos el evento click al botón creado
$('#btnjQuery').on("click", function () {
  console.log("Respuesta a un click");
});


//Asociamos el evento doble click al botón creado
$("#btnjQuery")
  .$("#btnjQuery")
  .on("dblclick", () => {
    console.log("Respuesta al doble click");
  });
 */

// Array de objetos para agregar información al DOM.
const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];
// Recorremos el array con for..of
for (const producto of productos) {
  //Por cada producto además de los datos agregamos un botón
  $("#app").append(`<div>
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button id="btn${producto.id}">Comprar</button>
                        </div>`);
  //Asociamos el evento a botón recién creado.
  $(`#btn${producto.id}`).on("click", function () {
    console.log(`Compraste ${producto.nombre}`);
  });
}
