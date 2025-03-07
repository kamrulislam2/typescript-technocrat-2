{
  // Ternary operator || Optional Chaning || Nullish Coalescing Operator

  // Ternary operator
  const age: number = 18;

  if (age >= 18) {
    // console.log("Adult");
  } else {
    // console.log("Not adult or child");
  }

  const isAdult = age >= 18 ? "Adult" : "Not adult"; // Ternary operator
  //   console.log({ isAdult });

  // Nullish Coalescing Operator
  // Make decision based on null / undefied values

  const isAuthenticad = "";

  const result1 = isAuthenticad ?? "Guest"; // Nullish Coalescing Operator // if isAuthenticad is null or undefined then return "Guest"
  const result2 = isAuthenticad ? isAuthenticad : "Guest"; // Ternary operator
  console.log({ result1 }, { result2 });

  // Optional Chaning

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAdsress?: string;
    };
  };

  const user: User = {
    name: "Kamrul",
    address: {
      city: "CTG",
      road: "01",
      presentAddress: "South Khulshi",
      //   permanentAdsress: "Sitakund",
    },
  };

  const permanentAdsress =
    user?.address?.permanentAdsress ?? "No permanent address"; // Optional Chaning // if user or address or permanentAdsress is null or undefined then return "No permanent address"
  console.log({ permanentAdsress });
}
