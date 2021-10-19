var secondsText;
var minutesText;
var chronometer;

const timeStart = (minutos,segundos) => {

    const updateTime = () => {
        segundos--;
        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }
        if (minutos < 0) {
            segundos = 0;
            minutos = 0;
            clearInterval(chronometer);
            document.getElementById('pageTwo').style.display = 'block';
            document.getElementById('finalPerdedor').style.display = 'block';
            const audio = document.getElementById('audioPerdedor');
            audio.play();
        }
        secondsText = segundos;
        minutesText = minutos;
        if (segundos < 10) {
            secondsText = '0' + segundos;
        }
        if (minutos < 10) {
            minutesText =  '0' + minutos;
        }
        document.getElementById('minutos').innerText = minutesText;
        document.getElementById('segundos').innerText = secondsText;
        }
    chronometer = setInterval(updateTime, 1000);
}
const stopTime = () => {

    clearInterval(chronometer);
}

export default timeStart;
export {stopTime};
