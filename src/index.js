import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const text = document.getElementById('mensaje');
//text.value = '';
const btn = document.getElementById('btn');
//const numeroCaracteres = text.length;

document.getElementById("msn1").textContent = "Recuento de palabras: 0" ;
document.getElementById("msn2").textContent = "Recuento de caracteres: 0" ;
document.getElementById("msn3").textContent = "Recuento de caracteres sin espacios: 0" ;
document.getElementById("msn4").textContent = "Recuento de números: 0" ;
document.getElementById("msn5").textContent = "Suma total de números: 0" ;
document.getElementById("msn6").textContent = "Longitud media de palabras: 0" ;


btn.addEventListener('click', function handleClick() {
  text.value = '';
  document.querySelector('[data-testing="word-count"]').textContent = "Recuento de palabras: 0";
  document.querySelector('[data-testing="character-count"]').textContent = "Recuento de caracteres: 0";
  document.querySelector('[data-testing="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: 0";
  document.querySelector('[data-testing="number-count"]').textContent = "Recuento de números: 0";
  document.querySelector('[data-testing="number-sum"]').textContent = "Suma total de números: 0";
  document.querySelector('[data-testing="word-length-average"]').textContent = "Longitud media de palabras: 0";

});

//Imprime en el DOM el recuento de palabras
text.addEventListener("keyup", () => {
  const wordCount = analyzer.getWordCount(text); // invocacion
  const chatCount = analyzer.getCharacterCount(text);
  const charCountWoutSpace = analyzer.getCharacterCountExcludingSpaces(text);
  const wordLength = analyzer.getAverageWordLength(text);
  const numCount = analyzer.getNumberCount(text);
  const numSum = analyzer.getNumberSum(text);
  //console.log(wordCount);
  document.getElementById('[data-testing="word-count"]').textContent = "Recuento de palabras: "+ wordCount.toString();
  document.getElementById('[data-testing="character-count"]').textContent = "Recuento de caracteres: "+ chatCount.toString();
  document.getElementById('[data-testing="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: "+ charCountWoutSpace.toString();
  document.getElementById('[data-testing="word-length-average"]').textContent = "Longitud media de palabras: "+ wordLength.toString();

  if(numCount !== null){
    document.getElementById('[data-testing="number-count"]').textContent = "Recuento de números: "+ numCount.toString();
    document.getElementById('[data-testing="number-sum"]').textContent = "Suma total de números: "+ numSum.toString();

  }
});
