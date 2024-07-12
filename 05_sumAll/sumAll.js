const sumAll = function() {
    if (arguments.length != 2 || typeof arguments[0] != 'number' || typeof arguments[1] != 'number' || arguments[0] < 0 || arguments[1] < 0) {
        return 'ERROR';
    }
    let output = 0;
    for (let i = Math.min(arguments[0],arguments[1]); i <= Math.max(arguments[0],arguments[1]); i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
