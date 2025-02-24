"use strict";
// Function in TypeScript
// There are 2 type of function:
// Normal Function
// Arrow Function
// Normal Function
function add(number1, number2 = 10) {
    // number2: number = 10 -> Default Parameter
    return number1 + number2;
}
add(2, 3);
// console.log(add(2, 3));
// Arrow Function
const addArrow = (number1, number2) => number1 + number2;
// A Function -> in an Object => is called Method
// Method in TypeScript
const poorUser = {
    name: "Mezba",
    balance: 0,
    // Normal Anonymous Function
    // addBalance(balance: number): string {
    addBalance(balance) {
        // Object er moddhe kono ekta properity ke access korar jonno this keyword use korte hoy
        // Javascript-e arrow function er moddhe this keyword kaj kore na, kintu Normal function er moddhe this keyword kaj kore...
        // Tai amra Annoymous Normal Function use korbo
        this.balance = this.balance + balance;
        return this.balance;
        // return `My new balance is ${this.balance}`;
    },
};
// Object এর মধ্যে Function লিখলে আমরা তাকে আর Function বলব না, তাকে বলব Method
// এখানে addBalance হচ্ছে Method
// Method এর মধ্যে আমরা this keyword ব্যবহার করতে পারি কোনো Property কে access করার জন্য
// এখানে this.balance হচ্ছে Object এর balance Property
// এখানে Normal Function ব্যবহার করলাম কারন Arrow Function এর মধ্যে this keyword কাজ করে না
// এখানে return type হচ্ছে number
const arr = [1, 4, 10];
const newArray = arr.map((value) => value * value);
