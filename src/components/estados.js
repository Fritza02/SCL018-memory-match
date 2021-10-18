let estados = (tarjetasComparadas) => {
      
    let firstOption = tarjetasComparadas[0].dataset.imagen;
    let secondOption = tarjetasComparadas[1].dataset.imagen;

    if (firstOption===secondOption){

        return true;
    }
    else {

        return false;
    }

}

export default estados;

