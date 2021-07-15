//Declaramos la url que vamos a usar para el GET
const URLGET = "http://hp-api.herokuapp.com/api/characters"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => {
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.name}</h3>
                                   <p> ${dato.human}</p>
                                  </div>`);
            }
          }
    });
});

//Declaramos la url que vamos a usar para el GET
const URLGET   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  { nombre: "Ana", profesion: "Programadora" }
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">POST</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => {
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
Guardado:${respuesta.nombre}
</div>`);
        }
    });
});

/* //Declaramos la url del archivo JSON local
const URLJSON = "data/datos.json"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      const hijos = $('.dato');
      console.log(hijos);
      for (const hijo of hijos) {
        hijo.remove();
      }

      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.nombre}</h3>
                                <p>${dato.precio}</p>
                            </div>`)
      }
    }
  });
});
 */