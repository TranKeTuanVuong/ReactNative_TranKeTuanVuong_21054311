// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
var tip
function tipCalculator(bill){
    if(bill >= 50 && bill <= 300){
        tip = bill * 0.15
    } else {
        tip = bill * 0.2
    }
    return tip
}
var bill
bill = 275
tip=tipCalculator(bill)
total = bill + tip
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)
bill = 40
tip=tipCalculator(bill)
total = bill + tip
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)
bill = 430
tip=tipCalculator(bill)
total = bill + tip
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)