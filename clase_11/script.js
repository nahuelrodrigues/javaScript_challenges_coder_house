/* console.log('run...');
console.log($);

const listaPaises = $("#listaPaises");

const paises = $(".paises");

const li = $("li");

console.log('li.lista #caja: ' , $("li.lista #caja")); */

// const productos = [
//     { id: 1,  nombre: "Arroz", precio: 125 },
//     {  id: 2,  nombre: "Fideo", precio: 70 },
//     {  id: 3,  nombre: "Pan"  , precio: 50},
//     {  id: 4,  nombre: "Flan" , precio: 100}
//   ];

// localStorage.setItem('lista', JSON.stringify(productos));

//   for (const producto of productos) {
//     $("#app").append(`<div><h3> ID: ${producto.id}</h3>
//     <p>  Producto: ${producto.nombre}</p>
//     <b> $ ${producto.precio}</b></div>`);
//   }

let productos = JSON.parse(localStorage.getItem('lista'));
console.log(productos);

for ( const producto of productos){
    $("#lista").append(`<div><h3> ID: ${producto.id}</h3>
        <p>  Producto: ${producto.nombre}</p>
        <b> $ ${producto.precio}</b></div>`);

}

