const myArray1 = [2, 4, 7, "2", 5];
function isNumber(myArray1) {
    return myArray1.every(item => typeof item === "number");
};
console.log(isNumber(myArray1));

const myArray2 = ["2", "abc", "true", " "];
function isString(myArray2) {
    return myArray2.every(item => typeof item === "string")
}
console.log(isString(myArray2));
