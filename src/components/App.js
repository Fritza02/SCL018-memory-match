//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
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



const App = () => {

  const firstPage = document.createElement('main');
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

    /*const bloque = document.createElement('div');
    bloque.className = 'instructions2'*/
    const section1 = document.createElement('section');
    section1.className = "instructions";
    firstPage.appendChild(section1);

    const explicacion = document.createElement('div');
    explicacion.classNam = 'explicacion';
    explicacion.textContent = 'INSTRUCIONES: Tienes 5 segundos para memorizar la mayor cantidad de imagenes, antes de que comience el juego .Tendras SOLO 60 segundos para completar'
    section1.appendChild(explicacion);

    const gif = document.createElement('img');
    gif.className = 'gif';
    gif.src = 'gif/TWJE2.gif';
    gif.addEventListener('click',() => {
    section1.style.display = 'none' ;
    section2.style.display = 'block' ;
    });
    section1.appendChild(gif);

    const section2 = document.createElement('section');
    section2.className = "pageTwo";
    firstPage.appendChild(section2);

    const boardGame = document.createElement('div');
    boardGame.classNam = 'boardGame';
    boardGame.id = 'boardGame';
    section2.appendChild(boardGame);

    /*let images = simpson.items;
    let totalImages = images.concat(images);
    let randomImages = random(totalImages);
    console.log(randomImages);*/

    return firstPage;
};

export default App;

/*let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'musica/audio-intro.mp3'); 
    audioElement.setAttribute('autoplay', 'autoplay');
    section.appendChild(audioElement);*/



  /*const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  return el;
  };*/


