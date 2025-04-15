{
  // Type Guard

  // typeof operator --> as type guard

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else if (typeof param1 === "string" && param2 === "string") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(typeof add(1, 2)); // number
  console.log(typeof add("1", 2)); // string
  console.log(typeof add("1", "2")); // string

  // Type of operator --> use korbo jodi verification ta kono variable er type er upor depend kore

  // In Guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`${user.name} is an ${user.role} user.`);
    } else {
      console.log(`${user.name} is a normal user.`);
    }
  };

  const normalUser: NormalUser = {
    name: "John",
  };
  getUser(normalUser); // John is an normal user.

  const adminUser: AdminUser = {
    name: "Mr. K",
    role: "admin",
  };
  getUser(adminUser); // John is an admin user.

  // in operator --> use korbo jodi verification ta kono object er property er upor depend kore
}
