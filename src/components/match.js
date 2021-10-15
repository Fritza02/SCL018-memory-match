import estados from './estados.js';

const myFunction2 = (element) => {    
    element.addEventListener('click', (e) => { //el que escucho el evento

    const tarjetasDescubiertas = document.querySelectorAll('.descubierta:not(.ganadora)');
    //console.log(tarjetasDescubiertas);

        if(tarjetasDescubiertas.length > 1) {
        return;
        }
    e.currentTarget.classList.add('descubierta');

    let numeroDescubiertas = document.querySelectorAll('.descubierta:not(.ganadora)'); //El método querySelectorAll() de un Element devuelve una NodeList estática. Un NodeListobjeto es una lista (colección) de nodos extraídos de un documento.
    //console.log(numeroDescubiertas);

        if(numeroDescubiertas.length < 2) {
        return;
        }

    estados(numeroDescubiertas);
    
    });

    
    
}
    
    export default myFunction2 ;