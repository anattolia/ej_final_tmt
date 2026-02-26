const titulo = document.getElementById("titulo");
const imagen = document.getElementById("imagen");
const boton = document.getElementById("boton");

const titulos = ["gato", "llama", "vaca", "pato"];
const imagenes = ["assets/gato.jpg", "assets/llama.webp", "assets/vaca.webp", "assets/pato.jpeg"];

boton.addEventListener( "click", () => {
let i = numeroAleatorio(0, titulos.length);
titulo.innerText = titulos[i];
imagen.src = imagenes[i];
})

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

///////////////
const contenedor = document.getElementById("contenedorPaja");

for(let i = 0; i < 1000; i++) {
  const paja = document.createElement("div");
    paja.classList.add("paja");
    paja.style.left = `${numeroAleatorio(0, 100)}%`;
    paja.style.top =  `${numeroAleatorio(0, 90)}%`;
   // listaPaja.push
   paja.onmouseenter = function() {mover(paja)};
   //paja.onmouseleave = function() {volver(paja)};
   contenedor.appendChild(paja);
}

var direccion = "",
    oldx = 0,
    mousemovemethod = function (e) {

        if (e.pageX < oldx) {
            direction = "izq"
        } else if (e.pageX > oldx) {
            direction = "der"
        }

        oldx = e.pageX;

}

function mover(element) {
    //element.style.transform = "rotate(25deg) translateX(-50px)";
   // element.style.transform = "";
   if(direccion === 'left') {
    element.style.animation="mover 0.2s linear forwards 1"
    }
    console.log(element);
  }

function volver(element) {
    element.style.transform = "rotate(0deg)";
  }



