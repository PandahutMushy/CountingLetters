function countLetters(inputStr) 
{
    var inputLwr = inputStr.toLowerCase().split(' ').join('');
    var uniqueChar = {};

    for (var i = 0; i < inputLwr.length; i++) 
    {        
        if (uniqueChar[inputLwr.charAt(i)] !== undefined)
            uniqueChar[inputLwr.charAt(i)] += 1;
        else
            uniqueChar[inputLwr.charAt(i)] = 1;
    }
    return uniqueChar;
}

console.log(countLetters("lighthouse in the house"));
