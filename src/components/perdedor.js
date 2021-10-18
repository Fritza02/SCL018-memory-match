let perdedor = (lasTarjetas) => {
    console.log("perdedora");
    lasTarjetas.forEach((elemento)=>{
    elemento.classList.remove("ganadora");
    
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
