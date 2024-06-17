const palindromes = function (string) {
    let arr = Array.from(string);
    arr = arr.filter(isAlphaNumeric);
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return arr.toString().toLowerCase() === newArr.toString().toLowerCase();
};

function isAlphaNumeric(str) {
    var code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
