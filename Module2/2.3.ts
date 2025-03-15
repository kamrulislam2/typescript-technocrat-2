{
  // Generic type with Type Allias

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [1, 2, 3, 4, 5];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5]; // Array generic type

  //   const mentors: string[] = ["Kamrul", "Islam", "Rasel", "Rakib"];
  const mentors: GenericArray<string> = ["Kamrul", "Islam", "Rasel", "Rakib"]; // Array generic type

  //   const boolArray: boolean[] = [true, false, true, false];
  const boolArray: GenericArray<boolean> = [true, false, true, false]; // Array generic type

  // Array of object
  //   const user: GenericArray<{ name: string; age: number }> = [
  //   type User = {
  //     name: string;
  //     age: number;
  //   };
  interface User {
    name: string;
    age: number;
  }
  const user: GenericArray<User> = [
    {
      name: "Kamrul",
      age: 30,
    },
    {
      name: "Islam",
      age: 29,
    },
  ];

  // Generic Tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. Kamrul", "Mrs. Kamrul"]; // Tuple
  const userWithID: GenericTuple<
    number,
    { name: string; email: string; age: number }
  > = [1234, { name: "Kamrul0", email: "a@gmail.com", age: 27 }]; // Tuple
}
