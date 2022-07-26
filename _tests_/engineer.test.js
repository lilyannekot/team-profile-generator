const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  test("to see if all engineer data is returned", () => {
    const Kelli = new Engineer(
      "Kelli",
      "2",
      "kelli@engineer.com",
      "kellirulez"
    );

    expect(Kelli.name).toBe("Kelli");
    expect(Kelli.id).toBe("2");
    expect(Kelli.email).toBe("kelli@engineer.com");
    expect(Kelli.github).toBe("kellirulez");
  });
});
