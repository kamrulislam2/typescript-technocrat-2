{
  // Conditional type

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; // This is called conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // This is nested conditional type

  type DubaiSheikh = {
    bike: string;
    car: string;
    ship: string;
    helicopter: string;
  };

  // Car / bike / ship / helicopter/ Truck ache kina check korar jonno conditional type use kora hobe
  type CheckVehicle<T> = T extends keyof DubaiSheikh ? true : false;

  type HasBike = CheckVehicle<"bike">;
  type HasTruck = CheckVehicle<"truck">;

  // here used keyof operator to get the keys of DubaiSheikh object by dynamic way
}
