// Excercise 6-A

function totalNr(nr1, nr2) {
    return nr1 + nr2;
}
var result = totalNr(5,15);

console.log('ex06-Functions-A',result);

// Excercise 6-B

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

function validateInteger(nr) {
    return Number.isInteger(nr);
}

console.log('ex06-Functions-C',validateInteger(7));

// Excercise 6-D

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