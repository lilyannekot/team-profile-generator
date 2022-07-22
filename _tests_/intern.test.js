const Intern = require("../lib/intern");

describe("Engineer", () => {
  test("to see if all intern data is returned", () => {
    const Josh = new Intern("Josh", "4", "josh@interns.com", "UCSB");

    expect(Josh.name).toBe("Josh");
    expect(Josh.id).toBe("4");
    expect(Josh.email).toBe("josh@interns.com");
    expect(Josh.school).toBe("UCSB");
  });
});
