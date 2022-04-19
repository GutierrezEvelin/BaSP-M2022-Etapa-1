// Excercise 3-a

var monthsExerciseA = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October',
     'November', 'December'];

console.log('ex03-Arrays-A',monthsExerciseA[4] + ' ' + monthsExerciseA[10]);

// Excercise 3-b

var monthsExerciseB = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
monthsExerciseB.sort();

console.log('ex03-Arrays-B:',monthsExerciseB);

// Excercise 3-c

var monthsExerciseC = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
monthsExerciseC.unshift('Months');
monthsExerciseC.push('alphabetically arranged');

console.log('ex03-Arrays-C:',monthsExerciseC);

// Excercise 3-d

var monthsExerciseD = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
monthsExerciseD.shift();
monthsExerciseD.pop();

console.log('ex03-Arrays-D:',monthsExerciseD);

// Excercise 3-e

var monthsExerciseE = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
monthsExerciseE.reverse();

console.log('ex03-Arrays-E:',monthsExerciseE);

// Excercise 3-f

var monthsExerciseF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
var monthsSeparated = monthsExerciseF.join(' - ');

console.log('ex03-Arrays-F:',monthsSeparated);

// Excercise 3-g

var monthsExerciseG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
     'November', 'December'];
var usingSlice = monthsExerciseG.slice(4, 11);

console.log('ex03-Arrays-G:',usingSlice);