const originalString = "JS is amazing!";
const slicedSubstring = originalString.slice(0,10);
// console.log(`sliced substring ( From 0 to 10 ): ${slicedSubstring}`);

const endOfSentance = originalString.slice(-10);
// console.log(endOfSentance);
const subString = originalString.slice(0, originalString.length, 4);

console.log(subString)