class Employee {
    constructor(name = '', employee = '', email = '@.mail') {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }
    
    getEmployee() {
        return `
        name: ${this.name}
        employeeId: ${this.employeeId}
        email: ${this.email}
        `;
    }
    
}

module.exports = Employee;