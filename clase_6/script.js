/* /////////////////////////////////////////////////////////////////////////////

//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do {
  let entrada = prompt("Ingresar nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log(listaNombres.length);
} while (listaNombres.length != cantidad);
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

console.log(listaNombres);

/////////////////////////////////////////////////////////////////////////////

//Esto me sirve para mi proyecto
// array de OBJETOS
const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];
//buscar producto especifico
const buscarPan = productos.find((producto) => producto.id === 3);
console.log(buscarPan); //{id: 3, producto: "Pan", precio: 50}
//filtrar por baratos, podría ser por, categoria, más vendido(estrellas), más barato, más caro,
const baratos = productos.filter((producto) => producto.precio < 100);
console.log(baratos); //

/////////////////////////////////////////////////////////////////////////////

//esta también me sirve

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  //en vez del IVA sería el costo de envío.
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos) producto.sumaIva();

/////////////////////////////////////////////////////////////////////////////
 */











////////////////////////////////////////////////////////////////////////
//AFTERCLASS con el pibisss
//PRE ENTREGA PROYECTO FINAL

// va a funcionar como mi base de datos
/* const ArrayProductos = [];

//Clase constructora de mi producto
class Producto {
  constructor(titulo, descripcion, precio) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = parseFloat(precio);
  }

  precioConIva() {
    return (this.precio * 21) / 100 + this.precio;
  }
}

//let producto1 = new Producto("Remera", "Remera con dibujos", 100);

do {
  let nombre = prompt("ingrese nombre del producto");
  let descripcion = prompt("ingrese descripcion");
  let precio = prompt("ingrese el precio");
  let remeras = new Producto(nombre, descripcion, precio);
  ArrayProductos.push(remeras);
  console.log(remeras.precioConIva);
  condicion = confirm("quieres seguir agregando productos?");
} while (condicion != false);

console.log(ArrayProductos);
 */

//Desafio COMPLEMENTARIOOOOO!!!!!

const ArrayPersonas = [];
let ArrayPersonasOrdenado = [];

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

let persona1 = new Persona("Homero", "Simpson", 37);
let persona2 = new Persona("Marge", "Simpson", 32);
let persona3 = new Persona("Bart", "Simpson", 15);
let persona4 = new Persona("Ned", "Flanders", 30);

ArrayPersonas.push(persona1);
ArrayPersonas.push(persona2);
ArrayPersonas.push(persona3);
ArrayPersonas.push(persona4);

ArrayPersonasOrdenado = ArrayPersonas.sort(function (a, b) {
  return a.edad - b.edad;
});

console.log(ArrayPersonasOrdenado);
