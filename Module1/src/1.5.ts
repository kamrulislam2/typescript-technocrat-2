// Reference Type -> Object Type (Data Type in TypeScript)

const user: {
  // companyName: string; // Normal type
  companyName: "B&F Corporate"; // Literal type // আক্ষরিক ধরণ
  // readonly firstName: string; // Read-only type
  firstName: string; // Normal type
  middleName?: string; // Optional type
  lastName: string;
  isMarried: boolean;
} = {
  companyName: "B&F Corporate",
  firstName: "Kamrul",
  lastName: "Islam",
  isMarried: true,
};

// user.firstName = "Sakib"; // Cannot assign to 'firstName' because it is a read-only property.
