const Intern = require('../lib/Intern.js');

test("gets intern's information", () => {
    const intern = new Intern ("Bob", "1", "bob@gmail.com", "school1");

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual("school1");
    expect(intern.getRole()).toEqual("Intern");
})