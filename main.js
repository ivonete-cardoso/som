//criei a finção tocaSomAplausos
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play(); 
}  

//criei constante listaDeTeclas e busquei a classe coletiva tecla
const listaDeTeclas = document.querySelectorAll(".tecla");


//criei a varialvel contador
let contador = 0;

//criei o laço de repetição white
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1;
    console.log(contador);
} 


