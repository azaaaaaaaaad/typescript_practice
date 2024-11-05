{
  // abstraction: 1.interface 2.abstract

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   real implementation

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopping the car engine`);
    }
    move(): void {
      console.log(`i am moving the car`);
    }
    test(): void {
      console.log(`testing purpose`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //   abstract class to abstraction

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
     test(): void {
        console.log(`im testing the engine`);
     }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`im starting the car engine`);
    }
    stopEngine(): void {
      console.log(`im stoppping the car engine`);
    }
    move(): void {
      console.log(`im moving the car engine`);
    }
  }

  //   const hondaCar = new Car2()
  //   hondaCar.startEngine()
}
