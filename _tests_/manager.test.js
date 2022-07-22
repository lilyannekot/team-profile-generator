const Manager = require("../lib/manager");

describe("Manager", () => {
  test("to see if all manager data is returned", () => {
    const Lily = new Manager("Lily", "3", "lily@manager.com", "45");

    expect(Lily.name).toBe("Lily");
    expect(Lily.id).toBe("3");
    expect(Lily.email).toBe("lily@manager.com");
    expect(Lily.officeNumber).toBe("45");
  });
});
