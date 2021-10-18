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
import comienzaTiempo from './cronometro.js';

const App = () => {

    const firstPage = document.createElement('div');
    firstPage.className = 'firstPage';
    firstPage.id = 'firstPage'
  
    const header = document.createElement('header');
    header.className = 'container-title1';
    header.id = 'container-title1';
    firstPage.appendChild(header);
  
    const titulo1 = document.createElement('img');
    titulo1.className = 'title1';
    titulo1.src ='imagenes/titulo1.png';
    header.appendChild(titulo1);
  
    const section1 = document.createElement('section');
    section1.className = 'instructions';
    section1.innerHTML = `<p>instrucciones:</p>
    <p>1.Tienes 5 segundos para memorizar</p>
    <p>/+la mayor cantidad de personajes</p>
    <p>2.Tienes 60 segundos para completar el juego</p>`; 
    firstPage.appendChild(section1);
  
    const gif = document.createElement('img');
    gif.className = 'gif';
    gif.src = 'gif/TWJE2.gif';
    gif.addEventListener('click',() => {
    section1.style.display = 'none' ;
    section2.style.display = 'block' ;
    comienzaTiempo(0,10);
    });
    section1.appendChild(gif);
  
    const section2 = document.createElement('section');
    section2.className = 'pageTwo';
    section2.id = 'pageTwo';
    firstPage.appendChild(section2);
    
    //cronometro
    
    const cronometro = document.createElement('nav');
    cronometro.id = 'cronometro';
    cronometro.className = 'cronometro';
    section2.appendChild(cronometro);
  
    const tv = document.createElement('img');
    tv.className = 'tv';
    tv.src = 'imagenes/tvSimpsons.png';
    cronometro.appendChild(tv);
  
    const minutos = document.createElement('span');
    minutos.id = 'minutos';
    minutos.className = 'minutos';
    cronometro.appendChild(minutos);
  
    const segundos = document.createElement('span');
    segundos.id = 'segundos';
    segundos.className = 'segundos';
    cronometro.appendChild(segundos);
  
    //Tablero
    
    const boardGame = document.createElement('div');
    boardGame.className = 'boardGame';
    boardGame.id = 'boardGame';
    section2.appendChild(boardGame);
  
    //Página Final 
  
    const finalGame = document.createElement ('div');        
    finalGame.className = 'finalGame';
    finalGame.id = 'finalGame';
    section2.appendChild(finalGame); 
  
    //Pantalla Ganador
  
    const finalGanador = document.createElement ('div');        
    finalGanador.className = 'finalGanador';
    finalGanador.id = 'finalGanador';
    finalGanador.style.display = 'none'; 
    finalGame.appendChild(finalGanador);
    
    let audioElement1 = document.createElement('audio');
    audioElement1.className ='audioGanador';
    audioElement1.id ='audioGanador';
    audioElement1.setAttribute('src', 'musica/maggieGanadora.mp3'); 
    audioElement1.setAttribute('autoplay', 'autoplay');
    finalGanador.appendChild(audioElement1);
  
    const finalMsn1 = document.createElement ('h1');
    finalMsn1. className = 'finalMsn1';                         
    finalMsn1.textContent = '¡Felicitaciones! Has ganado ';
    finalGanador.appendChild(finalMsn1);
  
    const celebracion = document.createElement('img');
    celebracion.className = 'celebracion';                     
    celebracion.src = 'gif/simpsons-maggie.gif';
    finalGanador.appendChild(celebracion);
  
    //Botón Puerco Potter
  
    const puerco = document.createElement('img');
    puerco.className = 'puerco';                    
    puerco.src = 'imagenes/puerco.png';
    puerco.addEventListener('click',() => {
    finalGanador.style.display = 'none' ;
    section1.style.display = 'block' ;
    });
    finalGanador.appendChild(puerco);
  
    //Pantalla Perdedor
  
    const finalPerdedor = document.createElement ('div');        
    finalPerdedor.className = 'finalPerdedor';
    finalPerdedor.id = 'finalPerdedor';
    finalPerdedor.style.display = 'none'; 
    finalGame.appendChild(finalPerdedor);
  
    let audioElement2 = document.createElement('audio');
    audioElement2.className = 'audioPerdedor';
    audioElement2.id = 'audioPerdedor';
    audioElement2.setAttribute('src', 'musica/Nelson burlándose de Bart - Los Simpson Película (Latino).mp3'); 
    audioElement2.setAttribute('autoplay', 'autoplay');
    finalPerdedor.appendChild(audioElement2);
  
    const finalMsn2 = document.createElement ('h1');
    finalMsn2. className = 'finalMsn2';                        
    finalMsn2.textContent = '¡Perdiste!';
    finalPerdedor.appendChild(finalMsn2);
  
    const noCelebracion = document.createElement('img');
    noCelebracion.className = 'celebracion';                    
    noCelebracion.src = 'gif/ha-ha-nelson.gif';
    finalPerdedor.appendChild(noCelebracion);
  
    return firstPage;
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
  
  