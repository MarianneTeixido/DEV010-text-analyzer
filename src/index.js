import analyzer from './analyzer.js';

//Redondear numeros decimales buscar math js

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//inicial info
document.querySelector('[data-testing="word-count"]').textContent = "Recuento de palabras: 0" ;
document.querySelector('[data-testing="character-count"]').textContent = "Recuento de caracteres: 0" ;
document.querySelector('[data-testing="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: 0" ;
document.querySelector('[data-testing="number-count"]').textContent = "Recuento de números: 0" ;
document.querySelector('[data-testing="number-sum"]').textContent = "Suma total de números: 0" ;
document.querySelector('[data-testing="word-length-average"]').textContent = "Longitud media de palabras: 0" ;

//textarea strings
const text = document.getElementsByName("user-input")[0];
text.addEventListener("keyup", () => {
  const wordCount = analyzer.getWordCount(text); // invocacion
  const chatCount = analyzer.getCharacterCount(text);
  const charCountWoutSpace = analyzer.getCharacterCountExcludingSpaces(text);
  const wordLength = analyzer.getAverageWordLength(text);
  const numCount = analyzer.getNumberCount(text);
  const numSum = analyzer.getNumberSum(text);

  document.querySelector('[data-testing="word-count"]').textContent = "Recuento de palabras: "+ wordCount;
  document.querySelector('[data-testing="character-count"]').textContent = "Recuento de caracteres: "+ chatCount.toString();
  document.querySelector('[data-testing="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: "+ charCountWoutSpace.toString();
  document.querySelector('[data-testing="word-length-average"]').textContent = "Longitud media de palabras: "+ wordLength.toString();

  if(numCount !== null){
    document.querySelector('[data-testing="number-count"]').textContent = "Recuento de números: "+ numCount;
    document.querySelector('[data-testing="number-sum"]').textContent = "Suma total de números: "+ numSum;

  }
});


//reset button
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick() {
  text.value = '';
  document.querySelector('[data-testing="word-count"]').textContent = "Recuento de palabras: 0";
  document.querySelector('[data-testing="character-count"]').textContent = "Recuento de caracteres: 0";
  document.querySelector('[data-testing="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: 0";
  document.querySelector('[data-testing="number-count"]').textContent = "Recuento de números: 0";
  document.querySelector('[data-testing="number-sum"]').textContent = "Suma total de números: 0";
  document.querySelector('[data-testing="word-length-average"]').textContent = "Longitud media de palabras: 0";

});

  //console.log(wordCount);

