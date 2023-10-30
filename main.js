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
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+ efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    
    contador = contador + 1;
    
} 


