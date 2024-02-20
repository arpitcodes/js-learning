const random1 = generateRandom(1,10);
const random2 = generateRandom(1,10);
const random3 = generateRandom(1,10);





const randomInt1 = generateRandomInteger(20,30);
const randomInt2 = generateRandomInteger(20,30);
const randomInt3 = generateRandomInteger(20,30);

console.log(`Random Integer Number 1: ${randomInt1}`);
console.log(`Random Integer Number 2: ${randomInt2}`);
console.log(`Random Integer Number 3: ${randomInt3}`);


function generateRandom(min,max){
    const randomDecimal = Math.random() * (max-min) + min;
    const randomNumber = Math.round(randomDecimal)
    return randomNumber
}

function generateRandomInteger(min,max){
    const randomInteger = Math.floor(Math.random() *(max-min+1)+min)
    return randomInteger;
}

console.log(`Random Number 1: ${random1}`);
console.log(`Random Number 2: ${random2}`);
console.log(`Random Number 3: ${random3}`);