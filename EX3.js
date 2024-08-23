// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
var pointsDolphins = (96 + 108 + 89) / 3;
var pointsKoalas = (88 + 91 + 110) / 3;
if (pointsDolphins > pointsKoalas) 
    console.log('Dolphins win the trophy');
else if (pointsDolphins < pointsKoalas)
    console.log('Koalas win the trophy');
else if (pointsDolphins === pointsKoalas)
    console.log('Both win the trophy');
else if (pointsDolphins ==100 && pointsKoalas == 100)
    console.log('Both win the trophy');
else
    console.log('No one win the trophy');

