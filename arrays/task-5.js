const myArray = ["abc", "Hello world", "United"]

function lengthNumbers(myArray) {

    const newArray = myArray.map(item => item.length);

    return newArray;
}

console.log(lengthNumbers(myArray));