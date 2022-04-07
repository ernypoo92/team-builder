const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', employeeId = '', email = '@.com', github = "") {
        super(name, employeeId, email);

        this.github = github
    }

    //Get Engineer Information
    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer"
    }

};

module.exports = Engineer;
