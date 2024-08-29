// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
var calcAvverage, avgdolphins,avgkoalas; 
function calcAverage(point1, point2, point3){
    return (point1 + point2 + point3) / 3;
}
function checkWinner(avgdolphins, avgkoalas){
    if (avgdolphins >= 2 * avgkoalas){
        console.log(`Dolphins win (${avgdolphins} vs. ${avgkoalas})`);
    } else if (avgkoalas >= 2 * avgdolphins){
        console.log(`Koalas win (${avgkoalas} vs. ${avgdolphins})`);
    } else {
        console.log("No team wins");
    }
}
avgdolphins=calcAverage(44, 23, 71);
avgkoalas=calcAverage(65, 54, 49);
checkWinner(avgdolphins, avgkoalas);

avgdolphins=calcAverage(85,54,41);
avgkoalas=calcAverage(23,34,27);
checkWinner(avgdolphins, avgkoalas);