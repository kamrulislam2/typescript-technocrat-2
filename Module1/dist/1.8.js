"use strict";
{
    // Learn Destructuring
    // Object Destructuring
    const user = {
        id: 345,
        name: {
            firstName: "Kamrul",
            middleName: "Kaha",
            lastName: "Islam",
        },
        contactNO: "01712345678",
        address: "Bangladesh",
    };
    const { contactNO, 
    // name: { middleName },
    name: { middleName: midName }, // Here middleName is renamed to midName, and midName is called 'Name Alias'
     } = user;
    // Array Destructuring
    const myFriends = ["Abul", "Babul", "Kabul", "Dabul", "Ubul"];
    // const [, , bestFriend] = myFriends; // Normal Desctructuring
    const [, , bestFriend, ...rest] = myFriends; // Destructuring with Rest Operator
}
