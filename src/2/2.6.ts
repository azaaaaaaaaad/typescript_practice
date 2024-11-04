{
  // constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = `next level web development`;

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 444,
    name: "azad",
    email: "azad@a.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 123,
    name: "x",
    email: "x@x.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 465,
    name: "x",
    email: "x@x.com",
    hasWatch: "Apple",
  });

  //
}
