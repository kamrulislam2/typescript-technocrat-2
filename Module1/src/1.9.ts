{
  // Type Alias

  // For Object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "John Doe",
    age: 20,
    gender: "Male",
    contactNo: "1234567890",
    address: "123, ABC Street, XYZ City, PQR State, 123456",
  };

  const student2: Student = {
    name: "Mir Bhai",
    age: 40,
    gender: "Female",
    address: "456, ABC Street, XYZ City, PQR State, 456789",
  };

  const student3: Student = {
    name: "Khir Bhai",
    age: 45,
    gender: "Shemale",
    address: "789, ABC Street, XYZ City, PQR State, 789012",
  };

  // For Array
  type UserName = string[];
  type IsAdmin = boolean;
  const userName: UserName = ["Iranian", "Biranian"];
  const isAdmin: IsAdmin = true;

  // For Function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
