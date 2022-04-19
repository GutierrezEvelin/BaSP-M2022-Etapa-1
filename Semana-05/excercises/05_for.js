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