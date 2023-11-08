//criei a finção tocaSomAplausos
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play(); 
}  

//criei constante listaDeTeclas e busquei a classe coletiva tecla
const listaDeTeclas = document.querySelectorAll(".tecla");


//criei a varialvel contador
let contador = 0;

//criei o laço de repetição white
//trocado o while pelo for
for(let contador = 0; contador < listaDeTeclas.length; contador = contador + 1){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
   tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    
} 


