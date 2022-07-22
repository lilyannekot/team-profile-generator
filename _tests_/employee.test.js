const Employee = require("../lib/employee");

describe("Employee", () => {
  test("to see if the inputted information will appear in each section", () => {
    const Jamie = new Employee("Jamie", "1", "jamie@helloworld.com");

    expect(Jamie.name).toBe("Jamie");
    expect(Jamie.id).toBe("1");
    expect(Jamie.email).toBe("jamie@helloworld.com");
  });
});
