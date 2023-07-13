import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const text = document.getElementById('mensaje');
text.value = '';
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
//  console.log(textarea.value);
  text.value = '';
});


