function add(number){
    if(number == 0)
    return 0;
    if(number.includes("-")){
        negativeNumbersCheck(number);
    }

    if(number.includes(",") || number.includes("\n")){
        var numberArray = number.split(/[\n,]+/);
        return sum(numberArray);
    }
    else
        return parseInt(number);
}


function sum(numberArray){
    var total = 0;
    for(var i = 0; i < numberArray.length; i++){
        total += parseInt(numberArray[i]);
    }
    return total;
}

function negativeNumbersCheck(number){
        var stringNumbers = number.split(/[\n,]+/);
        var errorNumbers = "";
        for(var i = 0; i < stringNumbers.length; i++){
            if(stringNumbers[i].includes("-")){
                if(errorNumbers == ""){
                    errorNumbers += stringNumbers[i];
                }
                else{
                    errorNumbers += (", " + stringNumbers[i]);
                }
        }
        throw "Numbers not allowed:" + errorNumbers;
    }
}
module.exports = add;