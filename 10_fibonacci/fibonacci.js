const fibonacci = function(term) {
    let previous = 1;
    let current = 1;
    for (let i = 2; i < term; i++) {
        current += previous;
        previous = current - previous;
    }
    if (term === 0 || term === '0') { 
        current = 0;
    } else if (term < 0) {
        current = "OOPS"
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
