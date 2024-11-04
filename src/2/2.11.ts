{
  // utilities types
  // pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //   pick
  type NameAge = Pick<Person, "name" | "age">;

  // omit
  type ContactInfo = Omit<Person, "name" | "age">;

//   required
type PersonRequired = Required<Person> 

// Pertial
type PersonPertial = Partial<Person>

// read only

type PersonReadOnly = Readonly<Person>

const person1 : PersonReadOnly = {
    name: 'mr x',
    age: 20,
    contactNo: "017"
}

  //Record
//   type MyObj = {
//     a:string
//     b: string
//   }

type MyObj = Record<string, string>

const  EmptyObject : Record<string, unknown> = {

}

  const obj : MyObj = {
    a: 'aa',
    b:'bb',
    c: 'cc'
  }
}
