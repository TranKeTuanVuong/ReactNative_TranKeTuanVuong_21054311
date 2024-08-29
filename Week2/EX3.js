// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
var doituong1 ={"name":"Mark","mass":78,"height":1.69};  
var doituong2 ={"name":"John","mass":92,"height":1.95};
var BMIjohn,BMImark;
function calcBMI (doituong){
   return doituong.mass / (doituong.height * doituong.height);
}
function sosanhBMI(BMIjohn,BMImark){
    if (BMIjohn > BMImark){
        console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})`);
    } else if (BMImark > BMIjohn){
        console.log(`Mark's BMI (${BMImark}) is higher than John's (${BMIjohn})`);
    } else {
        console.log(`John's BMI (${BMIjohn}) is equal to Mark's (${BMImark})`);
    }
}

BMIjohn=calcBMI(doituong1);
BMImark=calcBMI(doituong2);
sosanhBMI(BMIjohn,BMImark);

