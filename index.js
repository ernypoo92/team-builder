const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')

promptManager = () => {
    // user instruction
    console.log('Welcome to Ream Builder')
    console.log(`
    -----------------------------------------------
        Enter your manager information first.
    -----------------------------------------------
    `);

    // user prompts for manager's name, employee ID, email, and office number
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: "What's the team manager's employee ID? (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee ID!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What's the team manager's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "What's the team manager's office number? (Required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            }
        }
    ]).then((manager) => {
        // send prompt info to Manager object
        const managerInfo = new Manager(manager.name, manager.employeeId, manager.email, manager.officeNumber);

        // push to managerArr
        managerArr.push(managerInfo);

        // prompt new team member
        menu();
    });
};

// get user input for adding an additional team member
menu = function() {
    // user prompt to confirm team member type
    inquirer.prompt([
        {
            type: 'list',
            name: 'eOrI',
            message: "Choose one of the following options",
            choices: ['Add New Engineer', 'Add New Intern', 'Finnish and Publish Team']            
        }
    ]).then(({ eOrI}) => {
            if(eOrI === 'New Engineer') {
                // if engineer is selected, run prompt engineer prompts
                promptEngineer();
            } else if(eOrI === 'New Intern') {
                // if intern is selected, run prompt intern prompts
                promptIntern();
            } else if(eOrI === 'Complete') {
                employees.push(managerArr);
                employees.push(engineersArr);
                employees.push(internsArr);

                generateRoster();
            }
        });
};
promptManager();