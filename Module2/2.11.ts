{
  // Utility types
  // Pick type or pick utility // mane tule ana
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  // Omit type or omit utility // mane bad deya
  type ContactInfo = Omit<Person, "name" | "age">; // ekhane name and age bad deya hoiche
  // tahole contactInfo te amra pacchi shudhu contactNo and email

  // Required type or required utility // mane shobgulo ke required kora
  type PersonRequired = Required<Person>; // ekhane shobgulo ke required kora hoiche

  // Partial type or partial utility // mane shobgulo ke optional kora
  type PersonPartial = Partial<Person>; // ekhane shobgulo ke optional kora hoiche

  // Readonly type or readonly utility // mane kono object er kono value ke porishkar kora jabe na, shudhu pora jabe
  type PersonReadonly = Readonly<Person>; // ekhane shobgulo ke readonly kora hoiche
  // tahole amra person er kono value ke poriborton korte parbo na, shudhu pora jabe

  const person1: PersonReadonly = {
    name: "MR. Kamrul",
    age: 26,
    contactNo: "01700000000",
  };

  // person1.name = "MR. Kamrul Hossain"; // ekhane error dekhabe, karon amra person1 er name ke poriborton korte parbo na, shudhu pora jabe

  // Record type or record utility // mane ekta object er moddhe onek gulo key-value pair thake, jekhane key gulo string hote pare, kintu value gulo onno type er hote pare
  type MyObj = Record<string, unknown>;

  const obj1: MyObj = {
    name: "Kamrul",
    age: "26",
    contactNo: "01700000000",
    hasCar: "true",
    isAdmin: true,
  };
  // Mane hocche, ekhane dynamically onek gulo key-value pair add kora jabe, and key-value string hote hbe, kintu value gulo onno type er hote pare, jemon number, boolean etc. tar jonno unknown type value use korbo
}
