const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const HTMLpage= require ('./src/HTMLpage')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//Global Arrays
const employees = [];
const managerArr = [];
const engineersArr = [];
const internsArr = [];


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
            name: 'officeNum',
            message: "What's the team manager's office number? (Required)",
            validate: officeNumInput => {
                if (officeNumInput) {
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
promptEngineer = () => {
    // user instruction
    console.log(`
    -----------------------------------------------
        Enter your New Engineer's information.
    -----------------------------------------------
    `);

    // user prompts for manager's name, employee ID, email, and office number
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the Engineer's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: "What's the Engineer's employee ID? (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's employee ID!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What's the Engineer's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's email!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'github',
            message: "What's the Engineer's Github Username? (Required)",
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's Github Username!");
                    return false;
                }
            }
        }
    ]).then((engineer) => {
        // send prompt info to Manager object
        const engineerInfo = new Engineer(engineer.name, engineer.employeeId, engineer.email, engineer.github);

        // push to managerArr
        engineersArr.push(engineerInfo);

        // prompt new team member
        menu();
    });
};

promptIntern = () => {
    // user instruction
    console.log(`
    -----------------------------------------------
        Enter your New Intern's information.
    -----------------------------------------------
    `);

    // user prompts for manager's name, employee ID, email, and office number
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the Intern's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: "What's the Intern's employee ID? (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's employee ID!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What's the Intern's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's email!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "What's the Intern's School? (Required)",
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's School!");
                    return false;
                }
            }
        }
    ]).then((intern) => {
        // send prompt info to Manager object
        const internInfo = new Intern(intern.name, intern.employeeId, intern.email, intern.github);

        // push to managerArr
        internsArr.push(internInfo);

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
            name: 'mainMenu',
            message: "Choose one of the following options",
            choices: ['Add New Engineer', 'Add New Intern', 'Finish and Publish Team']            
        }
    ]).then(({mainMenu}) => {
            if(mainMenu === 'Add New Engineer') {
                // if engineer is selected, run prompt engineer prompts
                promptEngineer();
            } else if(mainMenu === 'Add New Intern') {
                // if intern is selected, run prompt intern prompts
                promptIntern();
            } else if(mainMenu === 'Finish and Publish Team') {
                employees.push(managerArr);
                employees.push(engineersArr);
                employees.push(internsArr);

                generateTeam();
            }
        });
};

// generate HTML page
generateTeam = () => {
    fs.writeFileSync(path.join(__dirname, 'dist/index.html'), HTMLpage(employees), 'utf-8');
};

//start with promptManager function
promptManager();