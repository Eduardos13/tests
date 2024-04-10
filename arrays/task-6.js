const myArray = [2, 5, 7, -10, 0, 6, -30];

function sumOfPositiv(myArray) {
    let sum = 0;

    myArray.forEach(item => {
        if (item > 0) {
            sum += item;
        }
    })

    return sum;
}

console.log(sumOfPositiv(myArray));