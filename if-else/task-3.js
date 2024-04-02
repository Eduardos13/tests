let deliveryType = null;
const deliveryPrice = 30;
let totalPrice = 0;

deliveryType = "courier";

if (deliveryType === "regular") {
    totalPrice = deliveryPrice;
    console.log(`Your price is $${totalPrice}.`);
} else if (deliveryType === "express") {
    totalPrice = deliveryPrice * 1.2;
    console.log(`Your price is $${totalPrice}.`);
} else if (deliveryType === "vip") {
    totalPrice = deliveryPrice * 1.5;
    console.log(`Your price is $${totalPrice}.`);
} else if (deliveryType === "courier") {
    totalPrice = deliveryPrice * 1.2 + 15;
    console.log(`Your price is $${totalPrice}.`);
} else {
    console.log("Please, contact our cutomer servise");
};