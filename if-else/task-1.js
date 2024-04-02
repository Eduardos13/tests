//          1
let customer = null;
let age = null;
let type = null;

customer = "Marco";
age = 17;

if (age < 12) {
    type = "child";
    console.log(`${customer} is ${age} years old, he/she is ${type}.`);
} else if ( 12 <= age && age < 18) {
    type = "teenager";
    console.log(`${customer} is ${age} years old, he/she is ${type}.`);
} else if (18 <= age && age < 60) {
    type = "adult";
    console.log(`${customer} is ${age} years old, he/she is ${type}.`);
} else {
    type = "old";
    console.log(`${customer} is ${age} years old, he/she is ${type}.`);
};