import estados from "./estados.js";
import ganador from "./ganador.js";
import perdedor from "./perdedor.js";

const myFunction2 = (element) => {    
    element.addEventListener("click", (e) => { //el que escucho el evento

    const tarjetasDescubiertas = document.querySelectorAll(".descubierta:not(.ganadora)");
    //console.log(tarjetasDescubiertas);

        if(tarjetasDescubiertas.length > 1) {
        return;
        }

    e.currentTarget.classList.add("descubierta");

    let numeroDescubiertas = document.querySelectorAll(".descubierta:not(.ganadora)"); 

    //console.log(numeroDescubiertas);

        if(numeroDescubiertas.length < 2) {
        return;
        }

    if (estados(numeroDescubiertas)) {

        ganador(numeroDescubiertas);
    }

    else {

        perdedor(numeroDescubiertas);
    }

    });
  
    }

    export default myFunction2;

