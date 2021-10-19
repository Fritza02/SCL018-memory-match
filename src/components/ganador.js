import {stopTime} from "./cronometro.js";

let matchQuantity = [];
let ganador = (lasTarjetas) => {
    console.log('ganadora');
    lasTarjetas.forEach((elemento)=>{
        elemento.classList.add('ganadora');
        
        matchQuantity++;
        
        if(matchQuantity === 16) {

        document.getElementById('pageTwo').style.display = 'block';
        document.getElementById('finalGanador').style.display = 'block';
        var audio = document.getElementById('audioGanador');
        audio.play();

        stopTime();
        }
    })

}

export default ganador; 
