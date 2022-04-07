class Employee {
    constructor(name = '', employeeId = '', email = '@.mail') {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }
    
    getName() {
        return `
        name: ${this.name}
        `;
    }
    getId() {
        return `
        employeeId: ${this.employeeId}
        `;
    }
    getEmail() {
        return `
        email: ${this.email}
        `;
    }
    
    
}

module.exports = Employee;