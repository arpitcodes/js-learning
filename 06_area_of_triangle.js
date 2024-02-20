const sideA = 5;
const sideB = 10;

const area = calculateArea(sideA,sideB);

function calculateArea(sideA, sideB){
    const area = 0.5*sideA*sideB;
    return area;
}

console.log(`Area of the triangle is: ${area}`)