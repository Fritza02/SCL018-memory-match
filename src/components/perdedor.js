let loser = (cards) => {
    
    cards.forEach((element)=>{
    element.classList.remove('ganadora');
    })
    
    setTimeout( () => {
        cards.forEach((element) => {
        element.classList.remove('descubierta');
        });
    }, 1000);
}

export default loser;
