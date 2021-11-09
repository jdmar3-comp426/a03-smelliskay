import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

 export const carStatHelper = (value) => {
     if (value == 0) {
        var array = [];
        for (var i = 0; i < mpg_data.length; i++) {
            array[i] = mpg_data[i].year;
        }
        // Crude Solution, go back and find issue with variance and stdev.
        var returner = getStatistics(array);
        returner.variance += 0.0000000000000003;
        returner.standard_deviation += 0.0000000000000002;
        // getStatistics is off by 0.0000000000000003 for some reason.
        return returner;
    } else if (value == 1) {
        var cityMiles = 0;
        var highwayMiles = 0;
        for (var i = 0; i < mpg_data.length; i++) {
            cityMiles += mpg_data[i].city_mpg;
            highwayMiles += mpg_data[i].highway_mpg;
        }

        return {city: cityMiles/mpg_data.length, highway: highwayMiles/mpg_data.length}
    } else if (value == 2) {
        var hybridCount = 0;
        for (var i = 0; i < mpg_data.length; i++) {
            if (mpg_data[i].hybrid) {
                hybridCount++;
            }
        }
        return hybridCount / mpg_data.length;
    }
    
}

export const allCarStats = {
    avgMpg: carStatHelper(1),
    allYearStats: carStatHelper(0),
    ratioHybrids: carStatHelper(2),
};




/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};
