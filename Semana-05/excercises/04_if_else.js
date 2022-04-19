// Excercise 4-a
console.log('ex04-If Else-A');

var numberRandom = Math.random();
if(numberRandom > 0.5) {
    alert('Greather than 0,5');
} else {
    alert('Lower than 0,5');
}

// Excercise 4-b
console.log('ex04-If Else-B');

var age = Math.floor(Math.random()*100);

if (age <= 2) {
    alert('Bebe');
} else if (age <= 12) {
        alert('Niño');
    } else if (age <= 19) {
            alert('Adolescente');
        } else if (age <= 30) {
                alert('Joven');
            } else if (age <= 60) {
                    alert('Adulto');
                } else if (age <= 75) {
                        alert('Adulto mayor');
                    } else if (age > 75) {
                            alert('Anciano');
                        }