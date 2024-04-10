
const myArray = [2, 4, 5, 7];

function sqrNumber(myArray) {
    return myArray.map(item => item ** 2);
}

console.log(myArray);
console.log(sqrNumber(myArray));