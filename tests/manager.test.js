const Intern = require("../lib/manager");

describe("Manager", () => {
  test("to see if all intern data is collected", () => {
    const Lily = new Intern("Lily", "3", "lily@manager.com", "45");

    expect(Kelli.name).toBe("Lily");
    expect(Kelli.id).toBe("3");
    expect(Kelli.email).toBe("lily@manager.com");
    expect(Kelli.officeNumber).toBe("45");
  });
});
