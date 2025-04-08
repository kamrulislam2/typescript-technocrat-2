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
}
