//Excercises 2-a
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//(utilizar toUpperCase).


var struppercase = 'My Name Is Evelin';

console.log('ex02-Strings-A:', struppercase.toUpperCase() );

//Excercise 2-b
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres 
//guardando el resultado en una nueva variable (utilizar substring).


var strsubstring = 'My Name Is Evelin';
var first5 = strsubstring.substring(0,5);

console.log('ex02-Strings-B:', first5);

//Excercise 2-c
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
//guardando el resultado en una nueva variable (utilizar substring).


var strlast3 = 'My Name Is Evelin';
var last3 = strlast3.substring(14,17);

console.log('ex02-Strings-C:', last3);

//Excercise 2-d
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
//mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
//toLowerCase y el operador +).


var txt = 'My Name Is Evelin';
var strapplowcase = (txt.substring(0,1).toUpperCase()) + (txt.substring(1,17).toLowerCase())

console.log('ex02-Strings-D:', strapplowcase);

//Excercise 2-e
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
//primer espacio en blanco y guardarla en una variable (utilizar indexOf).


var strspace = 'My name is Evelin';
var whiteSpace = strspace.indexOf(' ');

console.log('ex02-Strings-E:', whiteSpace)

//Excercise 2-f
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
//palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y 
//el operador +).


var twoLongWords = 'gutierrez pradolini';
var space = twoLongWords.indexOf(' ');
var twoLongWordsexcersice = 
    twoLongWords.substring(0,1).toUpperCase() +
    twoLongWords.substring(1,9).toLowerCase() + ' ' +
    twoLongWords.substring(10,11).toUpperCase() +
    twoLongWords.substring(11,19).toLowerCase();

console.log('ex02-Strings-F:',twoLongWordsexcersice);
