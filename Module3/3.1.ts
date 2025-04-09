{
  // OOP - Class

  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // public name: string;
    // public species: string;
    // public sound: string;

    // Giving error during class initialization cause ekhane constructor nai
    // Constructore er maddhome object er property initialize kora hoyeche

    // constructor(name: string, species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }

    // amra Animal class er property gulo constructor er maddhome initialize  korte giye same property abr use korechi. Ei jinish ta chaile Parameter property er maddhome kora jabe, tokhon property gulo are repeat hobe na

    // Parameter Property
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    // Method // Class er moddhe kono function likhle setake method bola hoy
    makeSound() {
      console.log(
        `The ${this.name} says ${this.sound}, but his species is ${this.species}`
      );
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Bark");
  const cat = new Animal("Persian", "Cat", "Meow");

  dog.makeSound(); // The German Shepard says Bark, but his species is Dog
  cat.makeSound(); // The Persian says Meow, but his species is Cat
}
