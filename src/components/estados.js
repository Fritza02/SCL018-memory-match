import ganador from './ganador.js';
import perdedor from './perdedor.js';

let estados = (tarjetasComparadas) => {
      
    let firstOption = tarjetasComparadas[0].dataset.imagen;
    let secondOption = tarjetasComparadas[1].dataset.imagen;

    if (firstOption===secondOption){

        ganador(tarjetasComparadas);
    }
    else {

        perdedor(tarjetasComparadas);
    }

}

export default estados;

