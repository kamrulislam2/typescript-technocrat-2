{
  // Absraction // Using 1. interface 2. Abstract class

  // Using interface for class
  // Idea pacchi
  interface Vehicle {
    // name: string;
    // model: string;
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // Object // use : keyword for object
  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota Car",
  //     model: "2023",
  //   };

  // class // use implements keyword for class
  // real implementation kortesi
  class Car1 implements Vehicle {
    startEngine(): void {
      console.log("Car engine started.");
    }
    stopEngine(): void {
      console.log("Car engine stopped.");
    }
    move(): void {
      console.log("Car is moving.");
    }

    test() {
      console.log("I am a test function of Car class");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();
  toyotaCar.move();
  toyotaCar.stopEngine();
  toyotaCar.test();

  // this is called using interface amra abstraction toiri korlam

  // Abstaract class // use abstract keyword for class
  // Idea nicche
  abstract class Car2 {
    abstract startEngine(): void; // abstract method
    abstract stopEngine(): void;
    abstract move(): void;

    test() {
      console.log("I am a test function of Car class");
    }
  }

  // real implementation kortesi
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("Car engine started.");
    }
    stopEngine(): void {
      console.log("Car engine stopped.");
    }
    move(): void {
      console.log("Car is moving.");
    }

    // Inheritance vabe amra test() function peye jabo ekhane
    // test() {
    //   console.log("I am a test function of Car class");
    // }
  }

  // Instance toiri kore feli
  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();
  hondaCar.move();
  hondaCar.stopEngine();
  hondaCar.test(); // test function from abstract class
}
