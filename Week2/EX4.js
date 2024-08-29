// Let's improve Steven's tip calculator even more, this time using loops!
var bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
var tips= [];
var total =[];
function billduocboa (bill){
    if (bill >=50 && bill <=300){
        return bill*0.2;
    } else {
        return bill*0.15;
    }
}
function calcAverage(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum/arr.length;
}
 for (let i=0;i<bills.length;i++){
        tip=billduocboa(bills[i]);
        tips.push(tip);
        total.push(tip+bills[i]);
 }
  console.log(bills);
  console.log(tips);
  console.log(total);
  console.log(calcAverage(total));
