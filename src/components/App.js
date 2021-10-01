//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import simpson from '../data/simpson/simpson.js';
//console.log(simpson);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {

  const firstPage = document.getElementById("firstPage");
  const secondPage = document.getElementById("secondPage");
  
  const cambioPagina = document.getElementById("gif");
  
  cambioPagina.addEventListener("click", () => {
    /*ocultar página 1*/
    firstPage.style.display = "none";
    /*mostrar página 2*/
    secondPage.style.display = "block";
});

  //1) Crear una variable que contenga las imágenes a utilizar en las tarjetas, llamandolas desde el objeto en main.js.

  let images = simpson.items; /*estamos al objeto simpson pero solo al array items*/ 
  //console.log(imagenes);

  //2) Duplicar estas imágenes con la método concat() para que queden en pares.

  let totalImages = images.concat(images);
  
  totalImages.sort(() => Math.random() - 0.5)

  //3) Crear una función que reparta las tarjetas en un html dinámico.

  function outCards() {

    let table = document.getElementById("boardGame");

    table.innerHTML = " ";

    totalImages.forEach(myFunction);

    function myFunction(element) {
    
      let card = document.createElement("div");

      card.innerHTML = 
     
      `<div class="area-tarjeta">
      <div class="tarjeta">
      <div class="cara-trasera"> <img src = "${element.imageUrl} class="imagesSimpsons"/> </div>
      <div class="cara-superior">
      </div>
      </div>
      </div>`
      
      table.appendChild(card);
    }  
    
    }
    function descubrir() {
      //alert('hola');
      this.classList.add("cara-trasera");
    }
    outCards();

    document.querySelectorAll(".area-tarjeta").forEach(myFunction2);

    function myFunction2(element) {    

    element.addEventListener("click", descubrir);
    }
  } 
  //funcion para revolver 
  // 1


  /*const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  return el;
  };*/

export default App;
