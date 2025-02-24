// Basic Date Type in TypeScript

let firstName: string = "Kamrul"; //string
let rollNumber: number = 1234; // number
let isAdmin: boolean = true; // boolean
let x: undefined = undefined; //undefiend
let y: null = null; // null

let xy: number; //any
xy = 123;
// xy = "Any";
// xy = true;
// xy = undefined;
// xy = null;

let friends: string[] = ["Kamrul", "Rahim", "Karim"]; // string type array
let rollList: number[] = [123, 124, 125, 126, 127]; // number type array
let isFriend: boolean[] = [true, false, true]; // boolean type array

let personInfo: [string, number, boolean] = ["Kamrul", 26, true]; // tuple
// personInfo[0] = 123; // Type 'number' is not assignable to type 'string'
let personInfo2: [name: string, age: number, isAdmin: boolean] = [
  "Kamrul",
  26,
  true,
]; // tuple with label
