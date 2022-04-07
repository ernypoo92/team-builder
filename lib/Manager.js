const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = '', employeeId = '', email = '@.com', officeNum = "") {
        super(name, employeeId, email);

        this.officeNum = officeNum;
    }
    // get manager information
    getOfficeNum() {
        return this.officeNum;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;