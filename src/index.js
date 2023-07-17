import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const text = document.getElementById('mensaje');
//text.value = '';
const btn = document.getElementById('btn');
let numeroCaracteres = text.length;

document.getElementById("msn1").textContent = "Recuento de palabras: 0" ;
document.getElementById("msn2").textContent = "Recuento de caracteres: 0" ;
document.getElementById("msn3").textContent = "Recuento de caracteres sin espacios: 0" ;
document.getElementById("msn4").textContent = "Recuento de números: 0" ;
document.getElementById("msn5").textContent = "Suma total de números: 0" ;
document.getElementById("msn6").textContent = "Longitud media de palabras: 0" ;


btn.addEventListener('click', function handleClick() {
// console.log(text.value);
//  analyzer.getWordCount(text); // invocacion

  text.value = '';
});

//Imprime en el DOM el recuento de palabras
text.addEventListener("keyup", (event) => {
  let wordCount = analyzer.getWordCount(text); // invocacion
  let chatCount = analyzer.getCharacterCount(text);
  let charCountWoutSpace = analyzer.getCharacterCountExcludingSpaces(text);
  let wordLength = analyzer.getAverageWordLength(text);
  let numCount = analyzer.getNumberCount(text);
  let numSum = analyzer.getNumberSum(text);
  //console.log(wordCount);
  document.getElementById("msn1").textContent = "Recuento de palabras: "+ wordCount.toString();
  document.getElementById("msn2").textContent = "Recuento de caracteres: "+ chatCount.toString();
  document.getElementById("msn3").textContent = "Recuento de caracteres sin espacios: "+ charCountWoutSpace.toString();
  document.getElementById("msn6").textContent = "Longitud media de palabras: "+ wordLength.toString();

  if(numCount != null){
    document.getElementById("msn4").textContent = "Recuento de números: "+ numCount.toString();
    document.getElementById("msn5").textContent = "Suma total de números: "+ numSum.toString();

  }
});
