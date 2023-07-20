# Text Analyzer

## Resumen

Este proyecto consiste en un analizador de texto que recibe en una caja de texto un input por parte del usuario. Está desarrollado usando HTML, CSS y vanilla JavaScript.

Cuando la usuaria ingresa texto, en tiempo real el programa calcula y muestra las siguientes métricas. 


- **Recuento de palabras**: cuenta el número de palabras en el texto de entrada.
- **Recuento de caracteres**: cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación.
- **Recuento de caracteres excluyendo espacios y signos de puntuación**: cuenta el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación.  
- **Recuento de números**: cuenta cúantos números hay en el texto de entrada.
- **Suma total de números**: suma todos los números que hay en el texto de entrada.
- **Longitud media de las palabras**: calcula la longitud media de las palabras en el texto de entrada.

## Estructura del código

Para la realización de este programa se tomó como referencia el boilerplate facilitado por [Laboratoria](https://www.laboratoria.la/). El cual contiene la siguiente estructura: 

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js
```

Dentro de la carpeta src se encuentran los archivos HTML, CSS y JS con los que se trabajaron. 

* [`src/index.html`](./src/index.html): Contiene la estructura del DOM y es la donde entra la información del texto
* [`src/style.css`](./src/style.css): contiene las reglas de estilo. No usa frameworks externos. 
* [`src/index.js`](./src/index.js): Escucha los eventos del DOM e invoca
los métodos del objeto `analyzer`. Contiene una función para limpiar las métricas y actualiza el resultado en la UI.
* [`src/analyzer.js`](./src/analyzer.js): se implementa el objeto `analyzer`,que toma del  _boilerplate_. Este objeto
  (`analyzer`) contiene seis métodos:
  - `analyzer.getWordCount(text)`:  Retorna el recuento de
  palabras que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCount(text)`: Retorna el recuento
  de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: Retorna
  el recuento de caracteres excluyendo espacios y signos de puntuación que se
  encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberCount(text)`: Retorna cúantos números
  se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberSum(text)`: Retorna la suma de todos
  los números que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getAverageWordLength(text)`: Retorna la longitud
  media de palabras que se encuentran en el parámetro `text` de tipo `string`. Usa 2 dígitos decimales.

  ## Diseño UI 
  El diseño es minimalista y monocromático. 
  Está pensado para que le pueda ser incorporado un sketch de Hydra interactivo como background. 

  Muestra las métricas arriba de la caja de texto y el botón de limpiar debajo. 


