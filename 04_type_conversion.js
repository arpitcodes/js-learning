let stringNumber = "42";
let convertedNumber = Number(stringNumber);
console.log("Converted String number is: ", convertedNumber)


let numericalValue = 99;
let convertedString = String(numericalValue);
let isSunny = true;
let convertedBoolToString = String(isSunny);
console.log("Converted String: ", convertedString);
console.log("Converted boolean value to string: ", convertedBoolToString)

/**
 * non-zero value if converted to bool then it would result in true.
 * and if it is 0 then it would be false.
 */

let num =0

let numIntoBool = Boolean(num)
console.log(numIntoBool)