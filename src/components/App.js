// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//import simpson from '../data/simpson/simpson.js';
//import random from "../javascrip/random.js";
//import outCards from 'outCards.js';
//console.log(simpson);

// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import intro from './intro.js';

const App = () => {

    const content = document.createElement('div');
    content.className = 'container';
    const header = document.createElement('header');
    header.className = 'header';
    header.id = 'header';
    content.appendChild(header);
    
    return intro();
    
};

export default App;
/*export const section2;*/

/*let audio = document.createElement('audio');
    audio.className = 'audio';
    audio.setAttribute = 'controls';
    section1.appendChild(audio);
    let audioElement = document.createElement('source');
    audioElement.setAttribute('src', 'musica/audio-intro.mp3'); 
    audioElement.setAttribute('type', 'autoplay');
    audio.appendChild(audioElement);*/



/*const el = document.createElement('div');

el.className = 'App';
el.textContent = '';

return el;
};*/
