{
  // class & object in OOP

  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("german shepard", "dog", "ghew");
  const cat = new Animal("persian", "cat", "meow");
  cat.makeSound();
  dog.makeSound();
  //
}
