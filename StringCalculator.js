function add(number){
    if(number == 0)
    return 0;

    if(number.startsWith("//")){
        return new_delimiter(number);
    }

    if(number.includes("-")){
        negativeNumbersCheck(number);
    }

    if(number.includes(",") || number.includes("\n")){
        return sum(number);
    }
    else
        return parseInt(number);
}


function sum(number){
    var numberArray = number.split(/[\n,]+/);
    var total = 0;
    for(var i = 0; i < numberArray.length; i++){
        if(parseInt(numberArray[i]) < 1000){
        total += parseInt(numberArray[i]);
    }
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
        throw "Negatives not allowed:" + errorNumbers;
    }
}

function new_delimiter(number){
    var del_index = number.indexOf("\n");
    var delimiter = number.substring(2, del_index);
    var foo = number.substring(del_index);
    var numberArray = number.split(delimiter);
    var total = 0;
    for(var i = 0; i < numberArray.length; i++){
        if(parseInt(numberArray[i]) < 1000){
        total += parseInt(numberArray[i]);
        }
    }
        return total;
}
module.exports = add;