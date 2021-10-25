import  state from './estados.js';
import winner from './ganador.js';
import loser from './perdedor.js';

const myFunction2 = (element) => {    
    element.addEventListener('click', (e) => { //el que escucho el evento

    const uncoveredCards = document.querySelectorAll('.descubierta:not(.ganadora)'); //tarjetas descubiertas
    
        if(uncoveredCards.length > 1) {
        return;
        }

    e.currentTarget.classList.add('descubierta');

    const discoveredNumbers = document.querySelectorAll('.descubierta:not(.ganadora)'); //numero descubiertas

        if(discoveredNumbers.length < 2) { //reconoce que son 2 tarjetas
        return;
        }

        if (state(discoveredNumbers)) { //true

        winner(discoveredNumbers);
        }

        else { //false

        loser(discoveredNumbers);
        }

    });
    
    }

    export default myFunction2;

