function add(number){
    if(number == 0)
    return 0;

    if(number.startsWith("//")){
        return new_delimiter(number);
    }

    if(number.includes("-")){
        var stringNumbers = number.split(/[\n,]+/);
        var en = negativeNumbersCheck(stringNumbers);
        var bool = negativec(en);
        if(bool == false){
            throw "Negatives not allowed" + en;
        }
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
        throw "Negatives not allowed: " + errorNumbers;
    }
}

function negativec(en){
    if(en == ""){
        return true;
    }
    else{
        return false;
    }
}


function new_delimiter(number){
    var nl_index = number.indexOf("\n");
    var delimiter = number.substring(2, nl_index);
    var foo = new RegExp("["+delimiter+"\n,]+","g");
    var numberArray = number.substring(nl_index).split(foo);
    var total = 0;
    for(var i = 0; i < numberArray.length; i++){
        if(parseInt(numberArray[i]) < 1000){
            total += parseInt(numberArray[i]);
        }
    }
        return total;
}
module.exports = add;