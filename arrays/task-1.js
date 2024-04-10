const myArray = [2, 3, 4, 5, 6, 12, 11, 15, 22, 66];

const doubleNumbers = myArray.filter(value => value % 2 === 0);
console.log(doubleNumbers.length);
console.log(doubleNumbers);

const noDubleNumbers = myArray.filter(value => value % 2 !== 0);
console.log(noDubleNumbers.length);
console.log(noDubleNumbers);