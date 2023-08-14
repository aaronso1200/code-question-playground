/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let magazineMap = new Map()
    magazine.split('').forEach((char) => {
            if (magazineMap.get(char) == null) {
                magazineMap.set(char, 1)
            } else {
                let value = magazineMap.get(char)
                magazineMap.set(char, ++value)
            }
        }
    )

    for(let i = 0; i< ransomNote.length; i++) {
        let currentChar = ransomNote[i]
        if (magazineMap.get(currentChar)== null || magazineMap.get(currentChar) === 0){
            return false
        } else {
            let value = magazineMap.get(currentChar)
            magazineMap.set(currentChar,--value)
        }
    }
    return true

};

module.exports = {
    canConstruct
}