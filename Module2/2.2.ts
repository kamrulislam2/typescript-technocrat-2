{
  // Interface

  // type allias
  type User1 = {
    name: string;
    age: number;
  };

  // Interface
  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole1 = {
    name: "Kamrul",
    age: 30,
    role: "Officer",
  };

  const user2: UserWithRole2 = {
    name: "Islam",
    age: 29,
    role: "Manager",
  };

  // we can declare pritive type in Type allias
  type rollNumber = number;

  // but we cannot do that in Interface
  // interface rollNumber1 = number; // error
  // We have to use only Type allias for primitive type
  // We can use Interface for object type only

  // আমরা চাইলে Object এর ক্ষেত্রে Type Allias ও ব্যবহার করতে পারি
  // আমরা চাইলে Interface দিয়েও Object এর type নির্ধারণ করতে পারি
  // কিন্তু primitive type এর ক্ষেত্রে আমরা Type Allias ব্যবহার করবো
  // Interface ব্যবহার করবো Object এর ক্ষেত্রে
  // যদি Type allias এর মাধ্যমে কোনো একটা Property বাড়াতে হয়, সেক্ষেত্রে আমরা Intersection ব্যবহার করতে পারি
  // আমরা যদি Interface কে বাড়াতে চাই, সেক্ষেত্রে আমরা Extends কী ওয়ার্ডটা ব্যবহার করতে পারি।
  // আমরা যদি চাই Type allias কেও extends করে Interface বানাতে পারি
  // interface UserWithRole2 extends User1 {
  //   role: string;
  // }
  // আমরা চাইলে Interface কেও Type allias এর মধ্যে/হিসেবে ব্যবহার করতে পারি

  // JS -> Object, array -> Object, function -> Object
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll1 = [1, 2, 3, 4, 5];
  const rollNumber2: Roll2 = [1, 2, 3, 4, 5];
  //  0, 1, 2, 3, 4  --> index is number type

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;

  // Use case:
  // Array এবং Function এর ক্ষেত্রে আমরা Type allias ব্যবহার করতে পারি
  // কিন্তু Object এর ক্ষেত্রে আমরা Interface ব্যবহার করতে পারি অথবা Type allias ব্যবহার করতে পারি
  // যদি আমরা চাই কোনো একটা Object এর ক্ষেত্রে কিছু Property বাড়াতে, সেক্ষেত্রে আমরা Intersection ব্যবহার করতে পারি
  // আমরা চাইলে Interface কে Extends করে বাড়াতে পারি
  // আমরা চাইলে Type allias কেও Extends করে Interface বানাতে পারি
  // আমরা চাইলে Interface কেও Type allias এর মধ্যে/হিসেবে ব্যবহার করতে পারি
}
