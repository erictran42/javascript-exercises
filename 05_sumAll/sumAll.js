const sumAll = function (integer1, integer2) {
    let sum = 0;
    if (Number.isInteger(integer1) && Number.isInteger(integer2)) {
        if ((integer1 < 0) || (integer2 < 0)) {
            return 'ERROR'
        }
        if (integer1 > integer2) {
            small = integer2;
            big = integer1;
        } else {
            small = integer1;
            big = integer2;
        }
        for (let i = small; i <= big; i++) {
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
