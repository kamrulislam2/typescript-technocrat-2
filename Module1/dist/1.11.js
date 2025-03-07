"use strict";
var _a, _b;
{
    // Ternary operator || Optional Chaning || Nullish Coalescing Operator
    // Ternary operator
    const age = 18;
    if (age >= 18) {
        // console.log("Adult");
    }
    else {
        // console.log("Not adult or child");
    }
    const isAdult = age >= 18 ? "Adult" : "Not adult"; // Ternary operator
    //   console.log({ isAdult });
    // Nullish Coalescing Operator
    // Make decision based on null / undefied values
    const isAuthenticad = "";
    const result1 = isAuthenticad !== null && isAuthenticad !== void 0 ? isAuthenticad : "Guest"; // Nullish Coalescing Operator // if isAuthenticad is null or undefined then return "Guest"
    const result2 = isAuthenticad ? isAuthenticad : "Guest"; // Ternary operator
    console.log({ result1 }, { result2 });
    const user = {
        name: "Kamrul",
        address: {
            city: "CTG",
            road: "01",
            presentAddress: "South Khulshi",
            //   permanentAdsress: "Sitakund",
        },
    };
    const permanentAdsress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAdsress) !== null && _b !== void 0 ? _b : "No permanent address"; // Optional Chaning // if user or address or permanentAdsress is null or undefined then return "No permanent address"
    console.log({ permanentAdsress });
}
