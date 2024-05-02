// Load the full build.
var _ = require('lodash');

// 1. 
// var dobro = "1234567890";
var dobro = "123456789012324";
var lose = "1123456";
var jedinstevniZnakovi = function (password) {
    // vas kod

    var mojNiz = [];
console.log("password.length=" + password.length);
    for (let i = 0; i <= password.length; i++) {
        var numToCheck = password.charAt(i);
        //console.log (numToCheck + " is integer = " + isBroj(numToCheck));
        
        if (isBroj(numToCheck) == false) {
            console.log(numToCheck + " nije broj");
            // break;
            return false;
        }

        if (mojNiz.includes(numToCheck)) {
            console.log(numToCheck + " vec postoji u nasem nizu");
            // break;
            return false;
        } 
        
        else {
            console.log(numToCheck + " Ne postoji u nasem nizu");
            mojNiz.push(numToCheck);
        }
    }
    return true;
};

function isBroj(broj) {
    return !isNaN(broj);

    /* console.log("Za broj: " +  broj + " tip podatka je: " + typeof broj);
    if(typeof broj == 'number') {
        return true;
    }
    return false; */
}

function isMoreThan10(password){
    if(password.length > 10) {
        return true;
    }
    return false;
}

function skratiNa10(password){
   /* if ( password.length <= 10) return password;
    var tmpPassword = "";
    for (let i = 0; i < 10; i++) {
        var charAtIndex = password.charAt(i);
        tmpPassword += charAtIndex;
    }
   
    return tmpPassword;*/
    return password.substring(0, 10);

}

console.log("Password je ispravan: " + jedinstevniZnakovi(dobro));
//jedinstevniZnakovi(dobro); 
console.log("--------");
jedinstevniZnakovi(lose);
console.log("Password je ispravan: " + jedinstevniZnakovi(lose));

console.log("Password ima vise od 10 znakova: " + isMoreThan10(dobro));
console.log("Password ima vise od 10 znakova: " + isMoreThan10(lose));

console.log("Password nakon skracivanja: " + skratiNa10(dobro));
console.log("Password nakon skracivanja: " + skratiNa10(lose));