const removeFromArray = function () {
    let newArray = [];

    for (element of arguments[0]) {
        let truthValue = 0;
        for (let i = 1; i < arguments.length; i++) {
            if (element === arguments[i]) {
                truthValue += 1;
            }
        }
        if (truthValue == 0) {
            newArray.push(element);
        }
    };
    return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
