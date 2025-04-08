{
  // Utility types
  // Pick type or pick utility

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;
}
