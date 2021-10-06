//import App from '/components/App.js';
import random from "./shuffle.js";
import simpson from '../data/simpson/simpson.js';



const outCards = () => {

    let table = document.createElement('div');
    //return node;
    let images = simpson.items;
    let totalImages = images.concat(images);
    let randomImages = random(totalImages);
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

    const tarjetasDescubiertas = document.querySelectorAll(".descubierta");

    if(tarjetasDescubiertas.length > 1){
        return;
    }

    e.currentTarget.classList.add("descubierta")

    });
    }

    document.querySelectorAll(".tarjeta").forEach(myFunction2);

}
    export default outCards;

