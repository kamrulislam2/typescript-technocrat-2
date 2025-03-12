{
  // Nullable types

  const searchName = (value: string | null) => {
    // nullable type
    if (value) {
      console.log("Searching...");
    } else {
      console.log("There is nothing to search!");
    }
  };

  searchName(null);

  // Unknown type // typeof
  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ")[0];
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else {
      console.log("Wrong Input");
    }
  };

  getSpeedMeterPerSecond(`1000 km/h`);

  // Never type
  const throwError = (message: string): never => {
    throw new Error(message);
  };

  throwError("Mushkil se Error aya hai"); // This is a never type function
}
