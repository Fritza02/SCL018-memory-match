import timeStart from './cronometro.js';
import outCards from './outCards.js';

const Intro = () => {

    //Página principal

    const firstPage = document.createElement('div');
    firstPage.className = 'firstPage';
    firstPage.id = 'firstPage'

    //Encabezado

    const header = document.createElement('header');
    header.className = 'container-title1';
    header.id = 'container-title1';
    firstPage.appendChild(header);

    const title1 = document.createElement('img');
    title1.className = 'title1';
    title1.src ='imagenes/titulo1.png';
    header.appendChild(title1);

    //Instrucciones del juego

    const section1 = document.createElement('section');
    section1.className = 'instructions';
    section1.innerHTML = `<p>instrucciones:</p>
    <p>1.Tienes 5 segundos para memorizar</p>
    <p>/+la mayor cantidad de personajes</p>
    <p>2.Tienes 50 segundos para completar el juego</p>`; 
    firstPage.appendChild(section1);

    //Audio introducción 

    let audioElement = document.createElement('audio');
    audioElement.className = 'audioIntro';
    audioElement.id = 'audioIntro';
    audioElement.setAttribute('src', 'musica/audio-intro.mp3'); 
    audioElement.setAttribute('controls', 'autoplay');
    section1.appendChild(audioElement);

    //Botón comenzar

    const gif = document.createElement('img');
    gif.className = 'gif';
    gif.src = 'gif/TWJE2.gif';
    gif.addEventListener('click',() => {
    section1.style.display = 'none' ;
    section2.style.display = 'block' ;
    timeStart(0,50);
    });
    section1.appendChild(gif);

    //Pie de Página

    const musicIntro = document.createElement('footer');
    musicIntro.className = 'musicIntro';
    musicIntro.innerHTML = ' <p class = p1>All rights reserved 2021 - Developers: Fritza Veliz  - Visnupriya Amstein</p>'
    section1.appendChild(musicIntro);
    musicIntro.appendChild(audioElement);

    //sección 2

    const section2 = document.createElement('section');
    section2.className = 'pageTwo';
    section2.id = 'pageTwo';
    firstPage.appendChild(section2);

    //cronometro

    const chronometer = document.createElement('nav');
    chronometer.id = 'cronometro';
    chronometer.className = 'cronometro';
    section2.appendChild(chronometer);

    const tv = document.createElement('img');
    tv.className = 'tv';
    tv.src = 'imagenes/tvSimpsons.png';
    chronometer.appendChild(tv);

    const minute = document.createElement('span');
    minute.id = 'minutos';
    minute.className = 'minutos';
    chronometer.appendChild(minute);

    const second = document.createElement('span');
    second.id = 'segundos';
    second.className = 'segundos';
    chronometer.appendChild(second);

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

    const winner = document.createElement ('div');        
    winner.className = 'finalGanador';
    winner.id = 'finalGanador';
    winner.style.display = 'none'; 
    finalGame.appendChild(winner);

    let audioElement1 = document.createElement('audio');
    audioElement1.className ='audioGanador';
    audioElement1.id ='audioGanador';
    audioElement1.setAttribute('src', 'musica/maggieGanadora.mp3'); 
    audioElement1.setAttribute('autoplay', 'autoplay');
    winner.appendChild(audioElement1);

    const finalMsn1 = document.createElement ('h1');
    finalMsn1. className = 'finalMsn1';                         
    finalMsn1.textContent = '¡Felicitaciones! Has ganado ';
    winner.appendChild(finalMsn1);

    const celebration = document.createElement('img');
    celebration.className = 'celebracion';                     
    celebration.src = 'gif/simpsons-maggie.gif';
    winner.appendChild(celebration);

    //Botón Puerco Potter

    const pig = document.createElement('img');
    pig.className = 'puerco';                    
    pig.src = 'imagenes/puerco.png';
    pig.addEventListener('click',() => {
    winner.style.display = 'none' ;
    outCards();
    timeStart(0,50);
    audioElement1.pause();
    });
    winner.appendChild(pig);

    //Pantalla Perdedor

    const loser = document.createElement ('div');        
    loser.className = 'finalPerdedor';
    loser.id = 'finalPerdedor';
    loser.style.display = 'none'; 
    finalGame.appendChild(loser);

    let audioElement2 = document.createElement('audio');
    audioElement2.className = 'audioPerdedor';
    audioElement2.id = 'audioPerdedor';
    audioElement2.setAttribute('src', 'musica/nelsonBurlandose.mp3'); 
    audioElement2.setAttribute('autoplay', 'autoplay');
    loser.appendChild(audioElement2);

    const finalMsn2 = document.createElement ('h1');
    finalMsn2. className = 'finalMsn2';                        
    finalMsn2.textContent = '¡Perdiste!';
    loser.appendChild(finalMsn2);

    const noCelebration = document.createElement('img');
    noCelebration.className = 'celebracion';                    
    noCelebration.src = 'gif/ha-ha-nelson.gif';
    loser.appendChild(noCelebration);

    //Botón Señor Burns

    const burns = document.createElement('img');
    burns.className = 'burns';                    
    burns.src = 'imagenes/senor-burns.jpg';
    burns.addEventListener('click',() => {
    loser.style.display = 'none' ;
    outCards();
    timeStart(0,50);
    audioElement2.pause();
    });
    loser.appendChild(burns);

    return firstPage;
}
export default Intro;
