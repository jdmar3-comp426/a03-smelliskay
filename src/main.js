import {removeKeys} from "./mild/mild_2.js";
var obj = {type: 3, poop: 4, caca: 5};
var stringArray = ['type', 'poop'];
removeKeys(obj, stringArray)
console.log(obj);