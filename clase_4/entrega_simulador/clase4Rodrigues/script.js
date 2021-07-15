//CLASE 4 : por lo menos un prompt y un alert
//SALUDAR al cliente con una función
function saludar() {
  alert("Bienvenidx a la demo de mi proyecto");
}

function solicitarNombre() {
  let nombre = prompt("Ingresar nombre");
  let apellido = prompt("Ingrese su apellido");
  let direccion = prompt("Ingrese su dirección");

  alert(`Hola ${nombre} ${apellido} su pedido será enviado a ${direccion}`);
}

setTimeout(() => {
  saludar();
  solicitarNombre();
}, 1000);
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

//inicializando
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
