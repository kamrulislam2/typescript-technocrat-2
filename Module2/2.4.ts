{
  // Generic type with Interface

  interface Developer<T, XYZ = null> {
    name: string;
    computer: {
      brand: string;
      processor: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: XYZ;
  }

  type HuaweiWatch = {
    brand: string;
    model: string;
    releaseYear: number;
    color: string;
  };
  const poorDeveloper: Developer<HuaweiWatch> = {
    name: "Kamrul",
    computer: {
      brand: "Dell",
      processor: "i5 11th Gen",
      model: "Inspiron 15 3000",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Huawei",
      model: "Watch GT 2",
      releaseYear: 2019,
      color: "Black",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    releaseYear: number;
    color: string;
    heartRateSensor: boolean;
    sleepMonitor: boolean;
  }

  interface YamahaBike {
    model: string;
    releaseYear: number;
    color: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Islam",
    computer: {
      brand: "Apple",
      processor: "M1",
      model: "MacBook Pro",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch Series 6",
      releaseYear: 2020,
      color: "Black",
      heartRateSensor: true,
      sleepMonitor: true,
    },
    bike: {
      model: "Yamaha R15",
      releaseYear: 2021,
      color: "Red",
      engineCapacity: "155cc",
    },
  };
}

// Here smart wathc is using generic type
// We can use any type of object in smartWatch
// We can also use interface in generic type
// Here we have used type allias for HuaweiWatch and interface for AppleWatch
// We can also use type allias for AppleWatch
