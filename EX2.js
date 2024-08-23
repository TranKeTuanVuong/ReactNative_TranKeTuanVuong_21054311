// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
var BMI
var  mass
var  height
    function Tinh_BMI(mass, height){
        BMI = mass / (height * height)
        return BMI
    }

heightMark = 1.69
massMark = 78
heightJohn = 1.95
massJohn = 92
var markHigherBMI =true
var BMI_Mark = Tinh_BMI(massMark, heightMark)
var BMI_John = Tinh_BMI(massJohn, heightJohn)
    if (Tinh_BMI(massMark, heightMark) > Tinh_BMI(massJohn, heightJohn)){
         markHigherBMI =false
    }
    if (markHigherBMI) 
        console.log("Mark's BMI"+BMI_Mark+" is higher than John's"+BMI_John+"!")
    else
        console.log("John's BMI"+BMI_John+" is higher than Mark's"+BMI_Mark+"!")