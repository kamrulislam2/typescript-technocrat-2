{
  // Mapped Types
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  // const arayOfStrings: string[] = ["1", "2", "3", "4", "5"]; // manually created

  const arayOfStrings: string[] = arrayOfNumbers.map((num) => num.toString()); // Automatically created by mapping the array of numbers

  console.log(arrayOfNumbers, arayOfStrings);

  // Now example of mapped types
  // type for area
  type AreaNumber = {
    height: number;
    width: number;
  };

  // type Height = AreaNumber["height"]; // lookup type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //   type AreaString = {
  //     [key in keyof AreaNumber]: string; // mapped type
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key]; // mapped type
    // using keyof for property names
    // using T[key] for property values

    // this is a generic mapped type
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "10",
    width: 20,
  };
}
