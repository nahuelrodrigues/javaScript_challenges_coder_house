let listaDeProductos = [];

const handleClick = (evento) => console.log(evento.target);

const eventButtonClick = (padre, callback) => {
  $(padre).click(callback);
};

const mostrarLista = (productos) => {
  for (const producto of listaDeProductos) {
    $("body").append(
      `<div style="border: 1px solid black">
            <p>id : ${producto.id}</p>
            <h3>id : ${producto.nombre}</h3>
            <h4>id : ${producto.precio}</h4>
            <button>Mostrar</button>
            </div>`
    );
  }
};
const mostrarProductos = () => {
  $.getJSON("productos.json", (productosJSON) => {
    console.log(productosJSON);
    listaDeProductos = productosJSON;
    mostrarLista(productosJSON);
    eventButtonClick("button", handleClick);
  });
};

mostrarProductos();

$("button").click((event) => {
  console.log(event.target);
});
