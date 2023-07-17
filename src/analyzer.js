

const analyzer = {  
  
  getWordCount: (text) => {

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.value.trim().split(" ");
    return words.length; 
    //console.log("Palabras totales " + words.length);
  },
    

  getCharacterCount: (text) => {

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const charC =  text.value;
    return charC.length;
    //console.log("Caracteres totales" +  charC.length)
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
  },

  getAverageWordLength: (text) => {  

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordL = text.value.trim().split(" ");
    let str2 = 0;
    for (let i = 0; i < wordL.length; i++){
      str2 = str2 + wordL[i].length
    } 
    return str2/wordL.length;
    //console.log(str2/wordL.length)
  },

  getNumberCount: (text) => {

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const regex = /\d+/g;
    const numC = text.value.match(regex);
    if(numC !== null ){
      return numC.length;
      //console.log(numC.length)
    }
  },

  getNumberSum: (text) => {
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const regex2 = /\d+/g;
    const numS = text.value.match(regex2);
    let str3 = 0; 
    if(numS !== null){
      for(let i = 0; i <numS.length; i++){
        str3 = str3 + parseFloat(numS[i]);
      }
      return str3;
      //console.log(str3);
    }
  },
};


export default analyzer;
