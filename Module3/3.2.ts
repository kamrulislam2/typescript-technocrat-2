{
  // OOP Inheritence
  class Parent {
    // Properties
    name: string;
    age: number;
    address: string;

    // Constructor
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} is sleeping for ${numberOfHours} hours`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. Kamrul", 26, "Chittagong");

  student1.getSleep(8);

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClasses: number) {
      console.log(`${this.name} is taking ${numberOfClasses} classes`);
    }
  }
  const teacher1 = new Teacher(
    "Prof. Kamrul",
    35,
    "Chittagong",
    "Lecturer of CSE"
  );
  teacher1.getSleep(8);
  teacher1.takeClass(5);
}
