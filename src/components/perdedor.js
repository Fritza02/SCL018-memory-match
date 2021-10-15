//import comienzaTiempo from "./cronometro.js";
//let matchQuantity = [];

let perdedor = (lasTarjetas) => {
    console.log("perdedora");
    lasTarjetas.forEach((elemento)=>{
    elemento.classList.remove("ganadora");

    /*if(matchQuantity !== 4) {
        document.getElementById("pageTwo").style.display = "block";
        document.getElementById("finalPerdedor").style.display = "block";
        var audio = document.getElementById("audioPerdedor");
        audio.play();
        }*/

    })
    
    setTimeout( () => {
        lasTarjetas.forEach((elemento) => {
        elemento.classList.remove("descubierta");
        });
    }, 1000);

}

export default perdedor;



/*cronometro(minutosTexto,segundosTexto)

if(minutosTexto===0 && segundosTexto===0){

    console.log("perdisteeee");

}*/
