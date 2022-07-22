const Intern = require("../lib/intern");

describe("Engineer", () => {
  test("to see if all intern data is collected", () => {
    const Josh = new Intern("Josh", "4", "josh@interns.com", "UCSB");

    expect(Kelli.name).toBe("Josh");
    expect(Kelli.id).toBe("4");
    expect(Kelli.email).toBe("josh@interns.com");
    expect(Kelli.school).toBe("UCSB");
  });
});
