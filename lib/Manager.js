const inquirer = require('inquirer');

const Manager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name your Team Lead or Manager? (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter your Manager name!');
                    return false;
                }
            }
        },
    ]);
}