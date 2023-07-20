import analyzer from './analyzer.js';

//Redondear numeros decimales buscar math js

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//inicial info
document.querySelector('[data-testid="word-count"]').textContent = "Recuento de palabras: 0" ;
document.querySelector('[data-testid="character-count"]').textContent = "Recuento de caracteres: 0" ;
document.querySelector('[data-testid="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: 0" ;
document.querySelector('[data-testid="number-count"]').textContent = "Recuento de números: 0" ;
document.querySelector('[data-testid="number-sum"]').textContent = "Suma total de números: 0" ;
document.querySelector('[data-testid="word-length-average"]').textContent = "Longitud media de palabras: 0" ;

//textarea strings
const inputext = document.getElementsByName("user-input")[0];
inputext.addEventListener("keyup", () => {
  const wordCount = analyzer.getWordCount(inputext.value); // invocacion
  const chatCount = analyzer.getCharacterCount(inputext.value);
  const charCountWoutSpace = analyzer.getCharacterCountExcludingSpaces(inputext.value);
  const wordLength = analyzer.getAverageWordLength(inputext.value);
  const numCount = analyzer.getNumberCount(inputext.value);
  const numSum = analyzer.getNumberSum(inputext.value);

  document.querySelector('[data-testid="word-count"]').textContent = "Recuento de palabras: "+ wordCount;
  document.querySelector('[data-testid="character-count"]').textContent = "Recuento de caracteres: "+ chatCount.toString();
  document.querySelector('[data-testid="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: "+ charCountWoutSpace.toString();
  document.querySelector('[data-testid="word-length-average"]').textContent = "Longitud media de palabras: "+ wordLength.toString();

  if(numCount !== null){
    document.querySelector('[data-testid="number-count"]').textContent = "Recuento de números: "+ numCount;
    document.querySelector('[data-testid="number-sum"]').textContent = "Suma total de números: "+ numSum;

  }
});

//reset button
const btn = document.getElementById("reset-button");
btn.addEventListener('click', function handleClick() {
  inputext.value = '';
  document.querySelector('[data-testid="word-count"]').textContent = "Recuento de palabras: 0";
  document.querySelector('[data-testid="character-count"]').textContent = "Recuento de caracteres: 0";
  document.querySelector('[data-testid="character-no-spaces-count"]').textContent = "Recuento de caracteres sin espacios: 0";
  document.querySelector('[data-testid="number-count"]').textContent = "Recuento de números: 0";
  document.querySelector('[data-testid="number-sum"]').textContent = "Suma total de números: 0";
  document.querySelector('[data-testid="word-length-average"]').textContent = "Longitud media de palabras: 0";
});
