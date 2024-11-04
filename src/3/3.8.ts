{
  // polymorphisom

  class Person {
    getSleep() {
      console.log(`i sleep for 8 hours a day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`i sleep for 7 hours a day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`i sleep for 6 hours a day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const Person1 = new Person();
  const Person2 = new Student();
  const Person3 = new Developer();

  getSleepingHours(Person1);
  getSleepingHours(Person2);
  getSleepingHours(Person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
}
