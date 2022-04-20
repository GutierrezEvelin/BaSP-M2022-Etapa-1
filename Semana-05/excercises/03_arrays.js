// Excercise 3-a
//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
//"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var monthsExerciseA = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October',
     'November', 'December'];

console.log('ex03-Arrays-A',monthsExerciseA[4] + ' ' + monthsExerciseA[10]);

// Excercise 3-b
//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var monthsExerciseB = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
monthsExerciseB.sort();

console.log('ex03-Arrays-B:',monthsExerciseB);

// Excercise 3-c
//Agregar un elemento al principio y al final del array (utilizar unshift y push).

var monthsExerciseC = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
monthsExerciseC.unshift('Months');
monthsExerciseC.push('alphabetically arranged');

console.log('ex03-Arrays-C:',monthsExerciseC);

// Excercise 3-d
//Quitar un elemento del principio y del final del array (utilizar shift y pop).

var monthsExerciseD = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
monthsExerciseD.shift();
monthsExerciseD.pop();

console.log('ex03-Arrays-D:',monthsExerciseD);

// Excercise 3-e
//Invertir el orden del array (utilizar reverse).

var monthsExerciseE = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
monthsExerciseE.reverse();

console.log('ex03-Arrays-E:',monthsExerciseE);

// Excercise 3-f
//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var monthsExerciseF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
var monthsSeparated = monthsExerciseF.join(' - ');

console.log('ex03-Arrays-F:',monthsSeparated);

// Excercise 3-g
//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var monthsExerciseG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
var usingSlice = monthsExerciseG.slice(4, 11);

console.log('ex03-Arrays-G:',usingSlice);