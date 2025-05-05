{
  // Static in OOP (Object Oriented Programming)
  class Counter {
    // count: number = 0;
    static count: number = 0;

    // increament();
    static increament() {
      return (Counter.count = Counter.count + 1);
    }

    // decrement();
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // Static method
  //   const instance1 = new Counter();
  console.log(Counter.increament());

  //   const instance2 = new Counter();
  console.log(Counter.increament());

  //   const instance3 = new Counter();
  console.log(Counter.increament());
}
