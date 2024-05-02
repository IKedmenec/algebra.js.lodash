// Load the full build.
var _ = require('lodash');

// 1. 
var dobro = "a1234567890";
var lose = "1123456";
var jedinstevniZnakovi = function (password) {
    // vas kod
    for (let i = 0; i <= password.length; i++) {
        var numToCheck = password.charAt(i);
        //console.log (numToCheck + " is integer = " + isBroj(numToCheck));
        if (isBroj(numToCheck) == false) {
            console.log(numToCheck + " nije broj");
            break;
        }
    }
};

function isBroj(broj) {
    return !isNaN(broj);

    /* console.log("Za broj: " +  broj + " tip podatka je: " + typeof broj);
    if(typeof broj == 'number') {
        return true;
    }
    return false; */
}

jedinstevniZnakovi(dobro); 
jedinstevniZnakovi(lose);