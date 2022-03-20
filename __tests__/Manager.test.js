
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Micheal Scott')

    expect(manager.name).toBe('Micheal Scott')
    expect(manager.id).toBe(expect.any(number));
    expect(manager.email).toBe(expect.stringContaining('@'&&'.'))
    expect(manager.officeNum).toBe(expect.any(number));
});