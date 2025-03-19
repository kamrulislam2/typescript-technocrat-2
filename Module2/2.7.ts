{
  // Generic Constraint with key of operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually // union type

  // we can do same thing by keyof operator
  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "ship";

  // access key property using a function // with key of union type
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Kamrul",
    age: 26,
    address: "CTG",
  };
  const car = {
    model: "Toyota 3200",
    year: 2016,
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "model");
}
