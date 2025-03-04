{
  // Spread Operator
  // Rest Operator
  // Destructuring

  // Learn Spread Operator
  // With Array
  const bros1: string[] = ["Groucho", "Chico", "Harpo"];
  const bros2: string[] = ["Gummo", "Zeppo"];

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

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // Learn Rest Operator
  //friend1: string, friend2: string, friend3: string
  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Babul", "Kabul", "Dabul", "Ubul");
}
