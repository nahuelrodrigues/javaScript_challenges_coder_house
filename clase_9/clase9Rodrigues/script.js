////////////////////////////////////////////////////////////////////////////////////////

//Saludo
alert(
  "Bienvenido a mi Proyecto\nMi idea en este proyecto es simular una tienda de una dietética.\nEspere unos segundos a que termine de cargar la página."
);

//declaro variable del precio del envio
let precioEnvio = 100;

//clase Producto
class Producto {
  constructor(id, nombre, precio, categoria, estrellas) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.categoria = categoria;
    this.estrellas = estrellas;
  }
  //calcula iva
  sumaIva() {
    return this.precio * 1.21;
  }
  //calcula iva + envío
  sumaEnvio() {
    return this.precio * 1.21 + precioEnvio;
  }
}
//Declaramos un array de productos para almacenar nuestros objetos
const productos = [];
//Y otro para realizar operaciones
const productosConImpuestos = [];
//Declaro un array de productos para almacenar objetos indexados por el usuario.
const productosIndexados = [];
//Y otro para realizar operaciones
const productosIndexadosConImpuestos = [];
//usamos el método push para agregar productos al array, sin orden alguno.
//y determinamos nosotros mismos sus valores
productos.push(new Producto(0, "arroz", 100, "legumbres", 5));
productos.push(new Producto(1, "lenteja", 150, "legumbres", 3));
productos.push(new Producto(2, "granola", 350, "cereal", 4));
productos.push(new Producto(3, "maní con cáscara", 175, "legumbres", 4));
productos.push(new Producto(4, "poroto aduki", 170, "legumbres", 2));
productos.push(new Producto(5, "garbanzo", 135, "legumbres", 5));
//Iteramos el array con for...of para sumarles impuestos de iva + envío
for (const producto of productos) {
  productosConImpuestos.push({
    nombre: producto.nombre,
    precioConIva: producto.sumaIva(),
    precioConIvaYEnvio: producto.sumaEnvio(),
  });
}
////////////////////////////////////// DESAFIO COMPLEMENTARIO //////////////////////////////////////
// ASIGNO UNA VARIABLE AL CONTENEDOR POR ID
var contenedorProductos = document.getElementById("contenedorProductos");
// CREO UN FOR...OF PARA RECORRER EL ARRAY DE PRODUCTO
for (const producto of productos) {
  // CREO UNA VARIABLE Y LE ASIGNO LO QUE ANTES ERA ERA EL CONTENIDO HTML DE LA CARD, Y AHORA VA A SER GENERADO POR JS
  var card =
    '<div id="caja" class="box"><span class="discount">-20%</span><div class="icons"><a href="#" class="fas fa-heart"></a><a href="#" class="fas fa-share"></a><a href="#" class="fas fa-eye"></a></div><img src="images/product' +
    producto.id +
    '.jpg" alt="" /><h3 id="titulo1">' +
    producto.nombre +
    '</h3><div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><div class="quantity"><span> Cantidad : </span><input id="cantidad1" type="number" min="1" max="100" value="1" /></div><div id="precio1" class="price">$' +
    producto.precio +
    '<span></span></div><a href="#" id="boton1" class="btn">Agregar al carrito</a></div>';
  contenedorProductos.innerHTML += card;
}
////////////////////////////////////// DESAFIO COMPLEMENTARIO //////////////////////////////////////

//ordeno los productos por 'estrellas'
//en mi caso sería --> 5 estrellas : muy vendido, 1 estrella: poco vendido]
const productosOrdenados = [
  ...productos.sort(function (a, b) {
    // invierto a y b para mostrar de más vendido a menos vendido
    return b.estrellas - a.estrellas;
  }),
];
//muestro por consola los productos ordenados de más vendido a menos vendido
console.log(productosOrdenados);
//muestro por consola los productos con impuestos
console.log(productosConImpuestos);

//Ahora indexa el usuario
//Registro un evento
window.addEventListener("load", function (event) {
  //le doy 1000ms con 'setTimeout' de tiempo para poder cargar la página completa antes de pedir algo por prompt al usuario (sin esto, no podía mostrar correctamente y se me crasheaba)
  setTimeout(() => {
    alert(
      "Vamos a ingresar manualmente un producto a nuestra tienda.\nPresione cancelar cuando quiera dejar de indexar productos."
    );
    //creo un do-while para que ingrese cuantos productos quiera.
    do {
      productosIndexados.push(
        new Producto(
          Number(prompt("Ingrese ID (número) del producto para identificarlo")),
          prompt("Ingrese nombre de producto"),
          prompt("Ingrese precio del producto"),
          prompt("Ingrese categoria de producto"),
          Number(
            prompt(
              "Ingrese estrellas del 1 al 5 del producto\n(para identificar como más y menos vendido)"
            )
          )
        )
      );

      //Pregunto si quiere seguir indexando productos
      ok = confirm("Seguir agregando más productos?");
    } while (ok != false);
    {
    }
    ///Iteramos el array con for...of para sumarles impuestos de iva + envío
    for (const producto of productosIndexados) {
      productosIndexadosConImpuestos.push({
        nombre: producto.nombre,
        precioOriginal: producto.precio,
        precioConIva: producto.sumaIva(),
        precioConIvaYEnvio: producto.sumaEnvio(),
      });
    }
    //ORDENO los productos indexados con impuestos de menor a mayor
    const productosIndexadosConImpuestosOrdenados = [
      ...productosIndexadosConImpuestos.sort(function (a, b) {
        return a.precioConIvaYEnvio - b.precioConIvaYEnvio;
      }),
    ];
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // CLASE 8 - DOM
    // ACÁ EL USUARIO MODIFICA EL HTML CON EL PRODUCTO INDEXADO
    // EL USUARIO INDEXA UN NOMBRE Y UN PRECIO
    // EL PROGRAMA SOBRESCRIBE EL NOMBRE DEL PRODUCTO DEL HTML Y CAMBIA EL PRECIO SUMANDO IVA Y ENVIO

    // let titulo1 = document.getElementById("titulo1");
    // titulo1.innerHTML = productosIndexadosConImpuestos[0].nombre;
    // let precio1 = document.getElementById("precio1");
    // precio1.innerHTML = `$${productosIndexadosConImpuestos[0].precioOriginal}`;
    //LO SIGUIENTE LO COMENTO PARA NO TENER QUE INDEXAR A MANO TANTOS PRODUCTOS
    //DEJO SÓLO EL PRIMERO

    // let titulo2 = document.getElementById("titulo2");
    // titulo2.innerHTML = `${productosIndexadosConImpuestos[1].nombre}`;
    // let precio2 = document.getElementById("precio2");
    // precio2.innerHTML = `$${productosIndexadosConImpuestos[1].precioConIvaYEnvio}`;

    // let titulo3 = document.getElementById("titulo3");
    // titulo3.innerHTML = `${productosIndexadosConImpuestos[2].nombre}`;
    // let precio3 = document.getElementById("precio3");
    // precio3.innerHTML = `$${productosIndexadosConImpuestos[2].precioConIvaYEnvio}`;

    // let titulo4 = document.getElementById("titulo4");
    // titulo4.innerHTML = `${productosIndexadosConImpuestos[3].nombre}`;
    // let precio4 = document.getElementById("precio4");
    // precio4.innerHTML = `$${productosIndexadosConImpuestos[3].precioConIvaYEnvio}`;

    // let titulo5 = document.getElementById("titulo5");
    // titulo5.innerHTML = `${productosIndexadosConImpuestos[4].nombre}`;
    // let precio5 = document.getElementById("precio5");
    // precio5.innerHTML = `$${productosIndexadosConImpuestos[4].precioConIvaYEnvio}`;

    // let titulo6 = document.getElementById("titulo6");
    // titulo6.innerHTML = `${productosIndexadosConImpuestos[5].nombre}`;
    // let precio6 = document.getElementById("precio6");
    // precio6.innerHTML = `$${productosIndexadosConImpuestos[5].precioConIvaYEnvio}`;

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////

    //muestro por consola los productos indexados
    console.log(productosIndexados);

    //muestro por consola los productos indexados con impuestos, ordenados de menor a mayor
    console.log(productosIndexadosConImpuestosOrdenados);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////

    ///// CLASE 9 - EVENTOS////////////////////////////////////
    //ESCUCHANDO ENTRADA DE INPUT Y CLICK EN EL BOTON DEL PRIMER PRODUCTO
    let boton1 = document.getElementById("boton1");
    let cantidad1 = document.getElementById("cantidad1");
    const evento = "click";
    boton1.addEventListener(evento, respuestaClick);
    // CALCULAR CANTIDAD KG X PRECIO
    function respuestaClick() {
      calculo =
        parseInt(cantidad1.value) *
        productosIndexadosConImpuestos[0].precioOriginal;
      //CREAR UN ELEMENTO AL DOM MEDIANTE JS dentro de la SECTION -> contenedorProductos
      //Que diga qué produto eligió, cuantos kilos, y cual es el precio total
      let carrito = document.createElement("div");
      carrito.innerHTML =
        " Usted seleccionó " +
        cantidad1.value +
        "kg de " +
        productosIndexadosConImpuestos[0].nombre +
        ", y el costo es total es de $ " +
        calculo;
      carrito.id = "carrito";
      contenedorProductos.appendChild(carrito);
      //MUESTRO EN CONSOLA TAMBIÉN
      console.log(
        "Usted seleccionó " +
          cantidad1.value +
          " kg de " +
          productosIndexadosConImpuestos[0].nombre +
          ", y el costo es total es de $ " +
          calculo
      );
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
  }, 1000);
});
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//CLASE 9 - EVENTOS

//FORMULARIO
const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  const formulario = e.target;
  //MUESTRO EN CONSOLA LO INGRESADO
  console.log(formulario.input1.value);
  console.log(formulario.input2.value);
  console.log(formulario.input3.value);
  console.log(formulario.input4.value);
  console.log("Formulario Enviado");
}
//CAPTURAR TECLA ENTER EN LA BARRA DE BÚSQUEDA DEL HEADER2, Y MOSTRAR QUÉ ES LO ESCRIBÍ
let buscar = document.getElementById("buscar");
//CONDICIONAL PARA DETECTAR LA TECLA ENTER '13'
function enter(e) {
  tecla = document.all ? e.keyCode : e.which;
  if (tecla == 13) alert("Has buscado : " + buscar.children[0].value);
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//declarando variables
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header-3");
let scrollTop = document.querySelector(".scroll-top");

//Si el usuario hace click en #menu-bar(icono de menu fa-bars )
menu.addEventListener("click", () => {
  // que cambie a fa-times (icono crucecita de salida)
  menu.classList.toggle("fa-times");
  //y despliegue el navbar
  navbar.classList.toggle("active");
});

//Si el usuario scrollea
window.onscroll = () => {
  //quita fa-times
  menu.classList.remove("fa-times");
  //quita el navbar desplegable
  navbar.classList.remove("active");

  //Si el usuario scrollea + de 250px en el eje Y
  if (window.scrollY > 250) {
    //agrega el header 3
    header.classList.add("active");
  } else {
    //quita el header 3
    header.classList.remove("active");
  }

  //Si el usuario scrollea + de 250px en el eje Y
  if (window.scrollY > 250) {
    //fija al inicio
    scrollTop.style.display = "initial";
  } else {
    //nada
    scrollTop.style.display = "none";
  }
};

// Swiperv6.6.2 - Most Modern Mobile Touch Slider
// MANUAL : https://swiperjs.com/get-started

//inicializando swiper
var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //autoplay cada 3000ms
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  //loopeo
  loop: true,
});
