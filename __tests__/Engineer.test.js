const Engineer = require('../lib/Engineer.js');

test("gets engineers's information", () => {
    const engineer = new Engineer ("Bob", "1", "bob@gmail.com", "bob1");

    expect(engineer.getGitHub()).toEqual("bob1");
    expect(engineer.getRole()).toEqual('Engineer');
})