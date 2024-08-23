// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
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
    if (Tinh_BMI(massMark, heightMark) > Tinh_BMI(massJohn, heightJohn)){
         markHigherBMI =false
    }
    if (markHigherBMI) 
        console.log("Mark co chi so BMI cao hon John")
    else
        console.log("John co chi so BMI cao hon Mark")