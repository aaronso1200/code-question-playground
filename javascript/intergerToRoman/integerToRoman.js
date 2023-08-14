const romanMap = {
    1000 : 'M',
    900 : 'CM',
    500 : 'D',
    400 : 'CD',
    100 :'C',
    90 :'XC',
    50 : 'L',
    40 : 'XL',
    10 :'X',
    9 : 'IX',
    5 : 'V',
    4 : 'IV',
    1 : 'I'
}


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = ''
    Object.keys(romanMap).sort((a,b) => b-a).forEach((key) => {
        while (num >= key) {
            result = result.concat(romanMap[key])
            num = num - key
        }
    })
    return result
};

module.exports = {
    intToRoman
}