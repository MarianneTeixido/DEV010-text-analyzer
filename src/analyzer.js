

const analyzer = {  
  
  getWordCount: (text) => {
//TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.value.trim().split(" ");

    //function totalWords (){
    return words.length; 
    //}
    //console.log("Palabras totales " + words.length);
  },
    

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const charC =  text.value;
    return charC.length;
    console.log("Caracteres totales" +  charC.length)
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charCS = text.value.split(" ");
    let str = 0;
    for(let i= 0; i<charCS.length; i++){
      str = str + charCS[i].length;
    }
    return str;
    //console.log(str)
    //return charCS.length;
  },
  getAverageWordLength: (text) => {   
    const wordL = text.value.trim().split(" ");
    let str2 = 0;
    for (let i = 0; i < wordL.length; i++){
      str2 = str2 + wordL[i].length
    } 
    return str2/wordL.length;
    //console.log(str2/wordL.length)
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const regex = /\d+/g;
    let numC = text.value.match(regex);
    if(numC != null ){
      return numC.length;
      //console.log(numC.length)
    }
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
