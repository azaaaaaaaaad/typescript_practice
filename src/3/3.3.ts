{
  // type guard

  type AlphaNumeric = string | number;

  // type of operator

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add(2, 3);
  const res2 = add(2, "3");

  console.log(res1, res2);

  //in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name} `);
    }
  };

  const normalUser : NormalUser = {
    name: 'x'
  }
  const adminUser : AdminUser = {
    name: 'y',
    role: 'admin'
  }


  getUser(adminUser)
}
