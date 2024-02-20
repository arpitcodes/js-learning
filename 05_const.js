/**
 * The const keyword was introduced in ES6 (2015)
 * variable defined with const can not be declared again and they are also can not be reassigned
 * variables defined with const have block scope
 */


const gravityOnEarth = 9.8;
const daysInAWeek = 7;

const time = 20;

const distanceFallen = 0.5 * gravityOnEarth * time

console.log(`The object fell ${distanceFallen} meters under gravity in ${time} seconds.`)


const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const weekendDays = ["Saturday","Sunday"];

weekdays.push("ExtraDay")

console.log(weekdays)


const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022
}

car.year = 2023

console.log("Updated Car: ",car)


/**
 * const keyword does not create immutable objects but it creates immutable bindings.
 * 
 */