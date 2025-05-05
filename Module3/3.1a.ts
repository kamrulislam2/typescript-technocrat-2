{
  // OOP - Class
  class Animal {
    // Parameter Property
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    // Method
    makeSound() {
      console.log(
        `The ${this.name} says ${this.sound}, but his species is ${this.species}`
      );
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Bark");
  const cat = new Animal("Persian", "Cat", "Meow");

  dog.makeSound();
  cat.makeSound(); // The Persian says Meow, but his species is Cat
}
