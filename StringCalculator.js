function add(number){
    if(number == 0)
    return 0;

    if(number.startsWith("//")){
        return new_delimiter(number);
    }

    if(number.includes("-")){
        var stringNumbers = number.split(/[\n,]+/);
        negativeNumbersCheck(stringNumbers);
    }

    if(number.includes(",") || number.includes("\n")){
        var numberArray = number.split(/[\n,]+/);
        return sum(numberArray);
    }
    else
        return parseInt(number);
}

function sum(number){
    var total = 0;
    for(var i = 0; i < number.length; i++){
        if(parseInt(number[i]) <= 1000){
        total += parseInt(number[i]);
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

function new_delimiter(number){
    var nl_index = number.indexOf("\n");
    var delimiter = number.substring(2, nl_index);
    var foo = new RegExp("["+delimiter+"\n,]+","g");
    var numberArray = number.substring(nl_index).split(foo);
    return sum(numberArray);
}
module.exports = add;