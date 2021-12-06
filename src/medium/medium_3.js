import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    var returner = [];
    for (var i = 0; i < car_data.length; i++) {
        if ((car_data[i].torque >= minTorque) && (car_data[i].horsepower >= minHorsepower)) {
            returner.push(car_data[i]);
        }
    }
    returner.sort(function compareFn(firstEl, secondEl) {
        if (firstEl.horsepower < secondEl.horsepower ) {
            return 1;
        } else if (firstEl.horsepower > secondEl.horsepower) {
            return -1;
        } else {
            return 0;
        }
    })
    return returner;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    var returner = [];
    for (var i = 0; i < car_data.length; i++) {
        if ((car_data[i].highway_mpg >= minHighway) && (car_data[i].city_mpg >= minCity)) {
            returner.push(car_data[i]);
        }
    }
    returner.sort(function compareFn(firstEl, secondEl) {
        if (firstEl.highway_mpg < secondEl.highway_mpg ) {
            return 1;
        } else if (firstEl.highway_mpg > secondEl.highway_mpg) {
            return -1;
        } else {
            return 0;
        }
    })
    return returner;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    var returner = [];
    for (var i = 0; i < car_data.length; i++) {
        if (car_data[i].id.search(searchTerm) != -1) {
            returner.push(car_data[i])
        }
    }

    returner.sort(function compareFn(firstEl, secondEl) {
        if (firstEl.id.search(searchTerm) > secondEl.id.search(searchTerm)) {
            return 1;
        } else if (firstEl.id.search(searchTerm) < secondEl.id.search(searchTerm)) {
            return -1;
        } else {
            return 0;
        }
    })

    return returner;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {

    var returner = [];
    for (var i = 0; i < car_data.length; i++) {
        for (var p = 0; p < years.length; p++) {
            if (car_data[i].year == years[p]) {
                returner.push(car_data[i]);
                break;
            }
        }
    }

    returner.sort(function compareFn(firstEl, secondEl) {
        if (firstEl.year < secondEl.year) {
            return 1;
        } else if (firstEl.year > secondEl.year) {
            return -1;
        } else {
            return 0;
        }
    })

    return returner;

}
