// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
var forecast = [17, 21, 23];


function printforecast(arr){
    let str="";
    for (let i=0;i<arr.length;i++){
        str+='...'+ arr[i]+'oC in '+(i+1)+' days ';
    }
    console.log(str);
    
}

printforecast(forecast);
printforecast([12,5,-5,0,4]);