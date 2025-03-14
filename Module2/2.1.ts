{
  // Type assertion // If we can understand the type of a variable better than TypeScript, we can use type assertion to tell TypeScript what the type of the variable is.
  let anything: any;

  anything = "Next Level Web Development";
  anything = 236;

  //   (anything as number).toFixed(2);
  //   (anything as string).toUpperCase();

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const kg = parseFloat(value);
      return `The converted value is ${kg * 1000} grams`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram(200) as number;
  console.log(result1);
  const result2 = kgToGram("200") as string;
  console.log(result2);

  type CustomerError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomerError).message);
  }
}
