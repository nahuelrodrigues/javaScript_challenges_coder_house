////////////////////////////////////////////////////////////////////////////////////////
//Primera entrega del Proyecto Final
//Saludo
alert(
  "Bienvenido a mi primer entrega de Proyecto Final.\nMi idea en este proyecto es simular una tienda de una dietética.\nEspere unos segundos a que termine de cargar la página."
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

    //muestro por consola los productos indexados
    console.log(productosIndexados);
    //muestro por consola los productos indexados con impuestos, ordenados de menor a mayor
    console.log(productosIndexadosConImpuestosOrdenados);
  }, 1000);
});

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//Dinamismo - Interacción

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
