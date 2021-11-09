import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum= 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {

    array.sort( function(a,b) {return a - b;} );

    var median = 0;
    var middleIndex = Math.floor(array.length / 2);
    if (array.length%2 == 0) {
        median = ((array[middleIndex] + array[middleIndex - 1]) / 2);
    } else {
        median = array[middleIndex];
    }
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var length = array.length;
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var mean = 0;
    for (let i = 0; i < array.length; i++) {
        mean += array[i];
    }
    mean = mean / array.length;
    var median = 0;
    var middleIndex = Math.floor(array.length / 2);
    if (array.length%2 == 0) {
        median = ((array[middleIndex] + array[middleIndex + 1]) / 2);
    } else {
        median = array[middleIndex];
    }
    var min = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    var max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    var varianceT = variance(array, mean);
    var stdDev = Math.sqrt(varianceT);
    return {length: length,   sum: sum,  mean: mean, median: median, min: min,  max: max, variance: varianceT, standard_deviation: stdDev}
}

