// CONSIGNA 1
let contador = parseInt(prompt("Ingrese un numero"));
for (let i = 1; i <= 5; i++) {
  let resultado = contador + i;
  console.log(contador + " + " + i + " = " + resultado);
}

//CONSIGNA 2
alert("Vamos a pedirle unos datos, si quiere salir escriba 'ESC'");

while (true) {
  let nombre = prompt("ingrese su nombre: ");
  if (nombre == "ESC") {
    break;
  }
  let apellido = prompt("ingrese su apellido");
  if (apellido == "ESC") {
    break;
  }
  let ciudad = prompt("ingrese su ciudad");
  if (ciudad == "ESC") {
    break;
  }
  let resultado = nombre + " " + apellido + " " + ciudad;
  alert(
    "Su nombre es: " +
      nombre +
      ", su apellido: " +
      apellido +
      ", y su ciudad es: " +
      ciudad
  );
  console.log(resultado);
}

//CONSIGNA 3
let numero = parseInt(prompt("Ingrese otro número: "));
let hola = "Hola";
for (let i = 1; i <= numero; i++) {
  alert("Hola");
  console.log(hola);
}
