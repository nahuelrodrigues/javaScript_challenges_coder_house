//https://api.whatsapp.com/send?phone=34123456789&text=hola,%20qué%20tal?
//https://api.mercadolibre.com/sites/MLA/search?q=autos

const jsonLocal = './json/data.json';
const urlMl= 'https://api.mercadolibre.com/sites/MLA/search?dietetica=12'

class Producto{
    constructor(id,titulo,img,precio){
        this.id = id,
        this.titulo = titulo,
        this.img = img,
        this.precio = precio
    }
}

$.getJSON(jsonLocal,function(data,status){
    let misDatos = data;
    pintarCards(misDatos)
}) 


let misDatos = [];
$.get(jsonLocal,function(data,status){
    console.log(data.results)
    for(const dato of data.results){
        let product = new Producto(dato.titulo,dato.title,dato.thumbnail,dato.price);
        misDatos.push(product)
    }
pintarCards(misDatos)
}) 

// $.get(urlSpotify,function(data,status){
//     console.log(data)
// })


/////////////////////////////// FUNCTION PARA PINTAR CARDS////////////////////////////////////////////////

const section = document.querySelector('.contenedor');

function pintarCards(array){

    for(let element of array){
        
        let div = document.createElement('div');
        
        div.className = 'card'
        
        div.innerHTML = `
        <img class="img-fluid center" src=${element.img}>
        <h2>${element.titulo}</h2>
        <p>$${element.precio}</p>
        <button class="btn btn-danger">Agregar al carrito</button>
        <button onclick="wsp('${element.titulo}',${element.precio})" class="btn btn-success">Consultar </button>`
        
    
        
        section.appendChild(div);
        
    }
    
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


function wsp(string,numero){
    window.open(`https://api.whatsapp.com/send?phone=34123456789&text=Hola, estoy interesado en tu producto. Su codigo es : ${string}, su precio es : $${numero}`,'_blank')
}