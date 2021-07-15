// $("body").prepend('<h3  style="display: none" >¡Hola Coder!</h3>');

// $("h3").fadeOut("slow", function () {
//   $("h3").fadeIn(5000);
// });

// console.log("tiempo muerto");

//Agregamos un botón y un div con jQuery
// $("body").prepend('<button id="btn1">Mostrar</button>');
// $("body").prepend(`<div id="div1" style="display: none; height: 120px">
//                         <h3>¡Hola Coder!</h3>
//                         <h4>Sorpresa 2</h4>
//                     </div>`);
// //Usamos slideDown sobre div1 en respuesta al click del boton btn1
// $("#btn1").click(() => {
//   $("#div1").toggle("slow");

// });

// //Agregamos un parrafo con jQuery
// $("body").prepend('<p class="titulo">Coder House</p>');
// //Modificamos las reglas CSS desde jQuery
// $("p").css("background-color", "black");
// $("p").css("width", "50%");
// $(".titulo").css({  "color": "#ccc",
//                     "font-size": "40px",
//                     "borderLeft": "5px solid red" });

// $("p").fadeOut("slow", function () {
//   $("p").fadeIn(5000);
// });

// //Agregamos un parrafo con jQuery
// $("body").prepend('<p style="background-color: red";class="titulo">Code House</p>');
// //Animamos sus propiedades CSS con animate
// $(".titulo").animate({  left:'250px',
//                         opacity:'0.2',
//                         height:'150px',
//                         width:'150px'   }, //1er parámetro propiedades
//                         5000,            //2do parámetro duración
//                         function(){        //3er parámetro callback
//                             console.log("final de animación");
//                         });

//Agregamos una estructura con jQuery
// $("body").prepend(`</div>
//                         <a>Ir a contacto</a>
//                         <p style="height: 800px"></p>
//                         <section id="seccionContacto">
//                            <h4>¡Somos Coders!</h4>
//                         </section>
//                    </div>`);
// // Asociamos la animación al click en un elemento <a>
// $("a").click(function (e) {
//     // usamos preventDeafult por que es un <a> y queremos que solamente haga lo que declaramos más abajo.
//   e.preventDefault();

//   console.log($("#seccionContacto").offset().top);
//   //Animamos sus propiedades CSS con animate
//   $("html, body").animate(
//     {
//       scrollTop: $("#seccionContacto").offset().top,
//     },
//     2000
//   );
// });

// //Agreguemos un párrafo con jQuery
// $("body").prepend('<p id="p1">Coder House</p>');
// //Declaración de métodos encadenados
// $("#p1").css("color", "red")
//         .slideUp(2000)
//         .slideDown(2000);
// Array de objetos para agregar información al DOM.
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];
// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function () {
    $(".btnComprar").click(function (e) { 
        //Obtenemos hijos del padre <div> desde el target
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
        //Animaciòn de respuesta de compra
        $(e.target).parent().slideUp("slow");
    });
});
// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto ademas de los datos agregamos un botón 
    $("#app").append(`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`);
}








