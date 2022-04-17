//Excercises 2-a

var struppercase = 'My Name Is Evelin';

console.log('ex02-Strings-A:', struppercase.toUpperCase() );

//Excercise 2-b

var strsubstring = 'My Name Is Evelin';
var first5 = strsubstring.substring(0,5);

console.log('ex02-Strings-B:', first5);

//Excercise 2-c

var strlast3 = 'My Name Is Evelin';
var last3 = strlast3.substring(14,17);

console.log('ex02-Strings-C:', last3);

//Excercise 2-d

var txt = 'My Name Is Evelin';
var strapplowcase = (txt.substring(0,1).toUpperCase()) + (txt.substring(1,17).toLowerCase())

console.log('ex02-Strings-D:', strapplowcase);

//Excercise 2-e

var strspace = 'My name is Evelin';
var whiteSpace = strspace.indexOf(' ');

console.log('ex02-Strings-E:', whiteSpace)

//Excercise 2-f

var twoLongWords = 'gutierrez pradolini';
var space = twoLongWords.indexOf(' ');
var twoLongWordsexcersice = 
    twoLongWords.substring(0,1).toUpperCase() +
    twoLongWords.substring(1,9).toLowerCase() + ' ' +
    twoLongWords.substring(10,11).toUpperCase() +
    twoLongWords.substring(11,19).toLowerCase();

console.log('ex02-Strings-F:',twoLongWordsexcersice);
