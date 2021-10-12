//import App from '/components/App.js';
import shuffle from "./shuffle.js";
import simpson from '../data/simpson/simpson.js';



const outCards = () => {

    let table = document.createElement('div');
    //return node;
    let images = simpson.items;
    let totalImages = images.concat(images);
    let randomImages = shuffle(totalImages);
    //console.log(randomImages);

    table = document.getElementById('boardGame');
    
    table.innerHTML = '';

    const myFunction = (element) => {
    
        let card = document.createElement('div');

        card.innerHTML =

    `<div class="area-tarjeta">
    <div class="tarjeta">
    <div class="cara-trasera"> <img src = "${element.imageUrl} class="imagesSimpsons"/> </div>
    <div class="cara-superior">
    </div>
    </div>
    </div>`
    
    table.appendChild(card);
    }
    
    randomImages.forEach(myFunction);
  //  return node;

  //outCards();

  const myFunction2 = (element) => {    
    element.addEventListener("click", (e) => { //el que escucho el evento

    const tarjetasDescubiertas = document.querySelectorAll(".descubierta:not(.ganadora)");
    //console.log(tarjetasDescubiertas);

        if(tarjetasDescubiertas.length > 1) {
        return;
        }
    e.currentTarget.classList.add("descubierta");

    let numeroDescubiertas = document.querySelectorAll(".descubierta:not(.ganadora)"); //El método querySelectorAll() de un Element devuelve una NodeList estática. Un NodeListobjeto es una lista (colección) de nodos extraídos de un documento.
    //console.log(numeroDescubiertas);

        if(numeroDescubiertas.length < 2) {
        return;
        }

    estados(numeroDescubiertas);
    
    });

    let estados = (tarjetasComparadas) => {

        let firstOption = tarjetasComparadas[0].dataset.imagen;
        let secondOption = tarjetasComparadas[1].dataset.imagen;

        if(firstOption === secondOption) { 

            ganador(tarjetasComparadas);

        } else if (firstOption !== secondOption ) {

            perdedor(tarjetasComparadas);
        }
    }
    let ganador = (lasTarjetas) => {
        console.log("ganadora");
        lasTarjetas.forEach((elemento)=>{
            elemento.classList.add("ganadora")
        })
    }
    let perdedor = (lasTarjetas) => {
        console.log("perdedora");
        lasTarjetas.forEach((elemento)=>{
        elemento.classList.remove("ganadora");
        })

        setTimeout( () => {
            lasTarjetas.forEach((elemento) => {
            elemento.classList.remove("descubierta");
            });
        }, 1000);
    }

    }

document.querySelectorAll(".tarjeta").forEach(myFunction2);

}
export default outCards;



