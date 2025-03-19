{
  // Constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const extraCouse = "Next Level Web Development";
    return { ...student, extraCouse };
  };

  interface Students {
    id: number;
    name: string;
    age: number;
    email: string;
  }

  const student3 = addCourseToStudent<Students>({
    id: 444,
    name: "Akib",
    age: 23,
    email: "akib@it.com",
  });

  const student1 = addCourseToStudent<Students>({
    id: 222,
    name: "Sakib",
    age: 25,
    email: "sakib@it.com",
  });

  const student2 = addCourseToStudent<Students>({
    id: 333,
    name: "Rakib",
    age: 26,
    email: "rakib@it.com",
  });

  // constraints means to specify the objects -> je amar ei jinish gulo must lagbe
}
