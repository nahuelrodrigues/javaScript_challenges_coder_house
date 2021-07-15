//SALUDO
alert("Hola! vamos a calcular el IVA de un producto");
// función CALCULAR IVA
const precioCosto = parseInt(prompt("Ingrese el precio del producto"));

const impuesto = (precio) => {
  const IVA = 0.21;
  return precio * IVA + precio;
};

const precioCalculado = impuesto(precioCosto);

alert("El precio del producto sumado con el IVA es de $ " + precioCalculado);

// DETERMINAR SI UN NUMERO ES MULTIPLO DE 2 3 5
const numero = parseInt(
  prompt("Vamos a evaluar si el número que ingresa es múltiplo de 2, 3, o 5")
);

if (esMultiplo(numero)) {
  alert("Tu número ingresado " + numero + ", es multiplo.");
} else {
  alert("Tu número ingresado " + numero + ", no es multiplo.");
}

function esMultiplo(numero) {
  if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

// función CALCULAR DESCUENTO DE UN PRODUCTO
alert("Bien, ahora vamos a calcular el %50 de descuento sobre su producto.");

const precioProducto = parseInt(prompt("Ingrese el precio de su producto"));

const descuento = (precio) => {
  const OFF = 50;
  return (precio * OFF) / 100;
};

const precioTotal = descuento(precioProducto);

alert(
  "El precio total de su producto con el %50 de descuento es de $ " +
    precioTotal
);
