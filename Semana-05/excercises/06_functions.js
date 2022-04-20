// Excercise 6-A
//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
//resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function totalNr(nr1, nr2) {
    return nr1 + nr2;
}
var result = totalNr(5,15);

console.log('ex06-Functions-A',result);

// Excercise 6-B
//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
//mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function totalNr2(nr1, nr2) {
    if (isNaN(nr1) || isNaN(nr2)) {
        console.log('Error');
        return NaN;
    } else {
        return nr1 + nr2;
    }
}
var result1 = totalNr2(7,23);

console.log('ex06-Functions-B',result1);

// Excercise 6-C
//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(nr) {
    return Number.isInteger(nr);
}

console.log('ex06-Functions-C',validateInteger(7));

// Excercise 6-D
//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya 
//decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function totalNr3(nr1, nr2) {
    if (isNaN(nr1) || isNaN(nr2)) {
        console.log('Error');
        return NaN;
    } else {
        if (Number.isInteger(nr1) && Number.isInteger(nr2)) {
            return nr1 + nr2;
        } else {
            console.log('Error');
            if (!Number.isInteger(nr1)) {
                return Math.round(nr1)
            } else {
                if (!Number.isInteger(nr2)) {
                    return Math.round(nr2)
                }
            }
        }
    }
}

console.log('ex06-Functions-D',totalNr3(7, 16.7));

// Excercise 6-E
//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que 
//todo siga funcionando igual.

function validate(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        console.log('Error');
        if(!Number.isInteger(a)){
            return Math.round(a)
        } else {
            if (!Number.isInteger(b)) {
                return Math.round(b)
            }
        }
    }
}
function totalNr4(nr1, nr2) {
    if (isNaN(nr1) || isNaN(nr2)) {
        console.log('Error');
        return NaN;
    } else {
        return validate(nr1, nr2);
    }
}

console.log('ex06-Functions-E',totalNr4(10, 25));