{
  // function with generic type

  const creatArray = (param: string): string[] => {
    return [param];
  };

  const creatArrayGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = creatArray("Bangladesh");
  const resultGeneric = creatArrayGeneric<string>("Bangladesh");

  //   type GenericObj = {
  //     name: string;
  //     age: number;
  //     population: number;
  //   }

  interface GenericObj {
    name: string;
    age: number;
    population: number;
  }
  const resGenericObj = creatArrayGeneric<GenericObj>({
    name: "Bangladesh",
    age: 71,
    population: 160000000,
  });

  // ------------------------------

  const creatArrayTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result11Generic = creatArrayTuple<string, number>(
    "Bangladesh",
    160000000
  );

  interface GenericObj2 {
    age: number;
    population: number;
  }
  const res11GenericObj = creatArrayTuple<string, GenericObj2>("Bangladesh", {
    age: 71,
    population: 160000000,
  });

  const addCourseToStudent = <T>(student: T) => {
    const extraCouse = "Next Level Web Development";
    return { ...student, extraCouse };
  };

  interface Students {
    name: string;
    age: number;
    id: number;
    email: string;
  }

  const student1 = addCourseToStudent<Students>({
    name: "Sakib",
    age: 25,
    id: 1,
    email: "sakib@it.com",
  });

  const student2 = addCourseToStudent<Students>({
    name: "Rakib",
    age: 26,
    id: 2,
    email: "rakib@it.com",
  });
}
