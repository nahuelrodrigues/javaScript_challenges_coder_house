//SALUDO
alert("Hola!, vamos a crear un nuevo Objeto llamado producto en nuestro sitio");
//Creo objeto Producto
function Producto(nombre, categoria, precio, estrellas) {
  //Acá el VSCode me sugiere que sea una clase, ¿por qué?, ¿qué cambiaría?
  this.nombre = nombre;
  this.categoria = categoria;
  this.precio = precio;
  this.estrellas = estrellas;
}
//Agrego nuevos objetos
const arroz = new Producto("Arroz", "cereal", 130, 5);
const lenteja = new Producto("Lenteja", "legumbre", 240, 5);
const granola = new Producto("Granola", "cereal", 315, 4);
const garbanzo = new Producto("Garbanzo", "legumbre", 135, 3);
const porotoAduki = new Producto("Poroto Aduki", "legumbre", 170, 2);
const maniConCascara = new Producto("Maní con cáscara", "legumbre", 175, 5);
//El usuario indexa un objeto
const indexUsuario = new Producto(
  prompt("indexe aqui el nombre"),
  prompt("indexe aqui la categoría"),
  parseInt(prompt("ingrese aquí el precio")),
  parseInt(prompt("ingrese aquí las estrellas"))
);
//Se muestra en pantalla
alert(
  `Tu nuevo objeto-producto tiene las siguientes propiedades y valores:\nnombre: ${indexUsuario.nombre}\ncategoría: ${indexUsuario.categoria}\nprecio: ${indexUsuario.precio}\nestrellas: ${indexUsuario.estrellas}\nTambién lo podés ver en consola.`
);
//Se muestra en consola
console.log(arroz);
console.log(lenteja);
console.log(granola);
console.log(garbanzo);
console.log(porotoAduki);
console.log(maniConCascara);
console.log(indexUsuario);
