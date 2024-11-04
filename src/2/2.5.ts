{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("bd");
  const resGeneric = createArrayWithGeneric<string>("bd");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "mr X",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("bd", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("bd", {
    name: "asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = `next level web development`;

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "x",
    email: "x@x.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "x",
    email: "x@x.com",
    hasWatch: "Apple",
  });

  //
}
