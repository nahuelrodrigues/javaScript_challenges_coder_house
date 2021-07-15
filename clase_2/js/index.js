//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
var num1 = prompt('Ingrese un número:');
if (parseInt(num1) < 1000){
   // alert('su número : ' + num1 + ' es menor a 1000');
} else {
    alert('su número : ' + num1 + ' es mayor a 1000');
}
//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
var texto = prompt('Ingrese texto:');
if (texto == 'Hola'){
    console.log('el usuario escribió: ' + texto)
} else {
    console.log("el usuario no ingresó 'Hola', ingresó: " + texto)
}
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
var num2 = prompt('Ingrese un nuevo número');
if (num2 > 10 && num2 < 50){
    alert('Su número se encuentra entre 10 y 50');
}else {
    console.log('el número que ingresó no se encuntra entre el rango de 10 y 50');
}