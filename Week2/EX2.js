// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
var bill ,tip;
var bills =[125,555,44];
var tips= [];
var total =[];
function billduocboa (bill){
    if (bill >=50 && bill <=300){
        return bill*0.2;
    } else {
        return bill*0.15;
    }
}
 for (let i=0;i<bills.length;i++){
        tip=billduocboa(bills[i]);
        tips.push(tip);
        total.push(tip+bills[i]);
 }
  console.log(bills);
  console.log(tips);
  console.log(total);
