import {stopTime} from './cronometro.js';

let matchQuantity = [];
let winner = (cards) => {

    cards.forEach((element)=>{
        element.classList.add('ganadora');
        
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

export default winner; 
