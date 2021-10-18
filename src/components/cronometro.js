var segundosTexto;
var minutosTexto;
var cronometro;

const comienzaTiempo = (minutos,segundos) => {
    /*let segundos = 10;
    let minutos = 0;*/
    const actualizaTiempo = () => {
        segundos--;
        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }
        if (minutos < 0) {
            segundos = 0;
            minutos = 0;
            console.log('segundos');
            clearInterval(cronometro);
    
            document.getElementById('pageTwo').style.display = 'block';
            document.getElementById('finalPerdedor').style.display = 'block';
            const audio = document.getElementById('audioPerdedor');
            audio.play();
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        if (segundos < 10) {
            segundosTexto = '0' + segundos;
        }
        if (minutos < 10) {
            minutosTexto = '0' + minutos;
        }
        document.getElementById('minutos').innerText = minutosTexto;
        document.getElementById('segundos').innerText = segundosTexto;
        }
    cronometro = setInterval(actualizaTiempo, 1000);
}
const stopTime = () => {

    clearInterval(cronometro);
}


export default comienzaTiempo;
export {stopTime};
