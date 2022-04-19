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

var palabras = ["auto", "moto", "barco", "avion", "bicicleta"];
for (var index = 0; index < palabras.length; index++) {
    console.log("ex05-For-A: palabra ", index, ":", palabras[index]);
}

// Excercise B

for (var index = 0; index < palabras.length; index++) {
    palabras[index] = palabras[index].substring(0, 1).toUpperCase() + palabras[index].substring(1);
    console.log("ex05-For-B: palabra modificada", index, ":", palabras[index]);
}

// Excercise C

var sentence = "";
for (var index = 0; index < palabras.length; index++) {
    var sentence = sentence + " " + palabras[index];
}
console.log("ex05-For-C: sentence:", sentence);

// Escercise D

var arrayVacio = [];
for (let index = 0; index < 10; index++) {
    arrayVacio[index] = index;
}
console.log("ex05-For-D: array completo: ",arrayVacio)