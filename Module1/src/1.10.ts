{
  // Union Type
  type FrontendDeveloper = "Fakibaz Developer" | "Junior Developer";
  type FullstackDeveloper = "Frontend Developer" | "Expert Developer";

  type Developer = FrontendDeveloper | FullstackDeveloper; // Union Type

  const newDeveloper: FrontendDeveloper = "Junior Developer";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "AB+" | "O+";
    address: string;
  };

  const user1: User = {
    name: "Kamrul",
    gender: "male",
    bloodGroup: "AB+",
    address: "CTG",
  };

  // Intersection Type
  type FrontendDeveloper2 = {
    skill: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper2 = {
    skill: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2; // Intersection Type

  const fullStackDeveloper: FullstackDeveloper2 = {
    skill: ["HTML", "CSS", "React", "NodeJS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
