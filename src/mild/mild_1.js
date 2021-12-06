/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    var returner = `${a} + ${b} = ${a+b}`;
    return returner;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    var returnerArray = [startNumber];
    for (let i = 1; startNumber+i != endNumber; i++) {
        returnerArray.push(startNumber+i)
    }
    returnerArray.push(endNumber);
    return returnerArray;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    var min = Infinity;
    var max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return {max:max, min:min}
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    var uniqueEntries = [];
    var noOccur = [];
    for (let i = 0; i < array.length; i++) {
        var uniqueFlag = true;
        for (let k = 0; k < uniqueEntries.length; k++) {
            if (array[i] == uniqueEntries[k]) {
                noOccur[k]++;
                uniqueFlag = false;
                break;
            }
        }
        if (uniqueFlag) {
            uniqueEntries.push(array[i]);
            noOccur.push(1);
        }
    }
    var properties = new Map([]);
    for (let i = 0; i < uniqueEntries.length; i++) {
        properties.set(uniqueEntries[i], noOccur[i]);
    }
    var returner = Object.fromEntries(properties);
    return returner;
}
