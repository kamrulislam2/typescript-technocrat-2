"use strict";
{
    // Spread Operator
    // Rest Operator
    // Destructuring
    // Learn Spread Operator
    // With Array
    const bros1 = ["Groucho", "Chico", "Harpo"];
    const bros2 = ["Gummo", "Zeppo"];
    bros1.push(...bros2);
    // With Objects
    const mentors1 = {
        typescript: "Javier",
        redux: "Mir",
        DBMS: "Sergio",
    };
    const mentors2 = {
        prisma: "Firoz",
        Next: "Tonmoy",
        Cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Learn Rest Operator
    //friend1: string, friend2: string, friend3: string
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "Babul", "Kabul", "Dabul", "Ubul");
}
