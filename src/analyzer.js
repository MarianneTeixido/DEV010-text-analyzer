

const analyzer = {  
  
  getWordCount: (text) => {

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(" ");
    return words.length; 
  },
    
  getCharacterCount: (text) => {

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const charC =  text;
    return charC.length;
  },

  getCharacterCountExcludingSpaces: (text) => {

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charCS = text.replace(/[\s.,#!$¡%&;:{}=\-+_`~()¿?']/g, '').length;
    return charCS;
  },

  getAverageWordLength: (text) => {  

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*const wordL = text.trim().split(" ");
    let str = 0;
    for (let i = 0; i < wordL.length; i++){
      str = str + wordL[i].length
    }
    const averageWL = (str/wordL.length).toFixed(2);
    return averageWL;
    */
    const wordL = text.trim().split(/\s+/).length;
    const totalCharacters = text.replace(/\s+/g, '').length;

    const averageWL = (totalCharacters / wordL).toFixed(2);
    return Number(averageWL);
  },

  getNumberCount: (text) => {

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const regex = /\b\d+(?:[.,]\d+)?\b/g ;
    const numC = text.match(regex);
    if(!numC){
      return 0;
    }else{
      return numC.length;
    }
  },

  getNumberSum: (text) => {
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const regex2 = /\b\d+(?:[.,]\d+)?\b/g;
    const numS = text.match(regex2);
    let str3 = 0; 
    if(numS !== null){
      for(let i = 0; i <numS.length; i++){
        str3 = str3 + parseFloat(numS[i]);
      }
      return str3;
    } else
    {
      return 0 ;
    }
  },
};


export default analyzer;
