// Excercise 5-A

var paises = ['argentina', 'brasil', 'uruguay', 'peru', 'chile'];
for (i = 0; i < paises.length; i++){
    console.log("ex05-For-A: paises ", i, ":", paises[i]);
}

// Excercise 5-B

for (i = 0; i < paises.length; i++){
    paises[i]= paises[i] .substring(0,1).toUpperCase()+paises[i].substring(1);
    console.log('ex05-For-B: ', i, ':', paises[i]);
}

// Excersise 5-C

var sentence = '';
for (var i = 0; i < paises.length; i++) {
    sentence += paises[i] + ' ';
}

console.log('ex05-For-C:', sentence);

// Excercise 5-D

var numbers = [];
for (var i = 0; i < 10; i++){
    numbers[i] = i;
}

console.log('ex05-For-D: ',numbers);


// Excercise A
//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una 
//alerta utilizando cada una de las palabras.

var palabras = ["auto", "moto", "barco", "avion", "bicicleta"];
for (var index = 0; index < palabras.length; index++) {
    console.log("ex05-For-A: palabra ", index, ":", palabras[index]);
}

// Excercise B
//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
//modificada.

for (var index = 0; index < palabras.length; index++) {
    palabras[index] = palabras[index].substring(0, 1).toUpperCase() + palabras[index].substring(1);
    console.log("ex05-For-B: palabra modificada", index, ":", palabras[index]);
}

// Excercise C
//Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle 
//for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena 
//completa.

var sentence = "";
for (var index = 0; index < palabras.length; index++) {
    var sentence = sentence + " " + palabras[index];
}
console.log("ex05-For-C: sentence:", sentence);

// Escercise D
//Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir 
//que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al 
//número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

var arrayVacio = [];
for (let index = 0; index < 10; index++) {
    arrayVacio[index] = index;
}
console.log("ex05-For-D: array completo: ",arrayVacio)