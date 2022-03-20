const Employee = require('../lib/Employee.js');


test('creates an Employee object', () => {
    const employee = new Employee("Micheal Scott");
    
    expect(employee.name).toBe("Micheal Scott");
    expect(employee.employeeId).toBe(expect.any(number));
    expect(employee.name).toBe(expect.stringContaining('@'&&'.'));
})