/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    let mask = generateBitmasks(n*2)
    return mask.map(value => value.replace(/0/g,'(').replace(/1/g,')')).filter((value) => {
        return isValid(value)
    })
};

function range(til) {
    var x = 0, xs = [];
    while (x < til) xs.push(x++);
    return xs;
}

function replicate(n, x) {
    var i = 0, xs = [];
    while(i++ < n) xs.push(x);
    return xs;
}

function generateBitmasks(n) {
    var padding = replicate(n, '0').join('');

    return range(Math.pow(2, n)).map(function (x) {
        return (padding + x.toString(2)).slice(-n);
    });
}

const isValid = function(s) {
    let tempQueue = []
    let result = true;
    const chars = s.split('')
    for (let i = 0 ; i < chars.length ; i++) {
        let char = chars[i]
        switch (char) {
            case '(':
                tempQueue.push(char)
                break;
            case ')':
                if (tempQueue[tempQueue.length -1] === '(') {
                    tempQueue.pop()
                } else {
                    return false
                }
                break;
        }
    }
    return tempQueue.length === 0
};

module.exports = {
    generateParenthesis
}