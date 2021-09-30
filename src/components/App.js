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

  //1) Crear una variable que contenga las imágenes a utilizar en las tarjetas, llamandolas desde el objeto en main.js.

  let imagenes = simpson.items; /*estamos al objeto simpson pero solo al array items*/ 
  //console.log(imagenes);

  //2) Duplicar estas imágenes con la método concat() para que queden en pares.

  let totalImagenes = imagenes.concat(imagenes);
  
  totalImagenes.sort(() => Math.random() - 0.5)

  //3) Crear una función que reparta las tarjetas en un html dinámico.

  function reparteTarjetas() {

    let mesa = document.getElementById("tablero");

    mesa.innerHTML = " ";

    totalImagenes.forEach(myFunction);

    function myFunction(elemento) {
    
      let tarjeta = document.createElement("div");

      tarjeta.innerHTML = 
      
      `<div class="area-tarjeta">
      <div class="tarjeta">
      <div class="cara-trasera"> <img src = "${elemento.imageUrl} class="imagenesSimpsons"/> </div>
      <div class="cara-superior">
      </div>
      </div>
      </div>`
      
      mesa.appendChild(tarjeta);
    }  
    
    }
    reparteTarjetas();
  } 
  //funcion para revolver 
  // 1 
  

  


  /*const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  return el;
  };*/

export default App;
