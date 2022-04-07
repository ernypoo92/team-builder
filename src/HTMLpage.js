// function to create employee cards by type
let generateEmployees = teamArray => {
    // destructure array into manager, engineer, and intern arrays
    const [ managerArr, engineerArr, internArr ] = teamArray;

    // create manager card
    let generateManager = Manager => {

        return`
            <div class="column is-flex-direction-column is-one-third">
                <div class="box">
                    <div class="has-background-info p-3">
                        <h2 class="subtitle is-3 has-text-white mb-2">
                            ${Manager.getName()}
                        </h2>
                        <h3 class="subtitle is-4 has-text-white">
                            <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/FEFEFE/external-mug-food-royyan-wijaya-detailed-outline-royyan-wijaya-2.png"/>
                            ${Manager.getRole()}
                        </h3>
                    </div>
                    <div>
                        <div class="box mb-0 pt-2 pb-2 mt-4">
                            Employee ID: ${Manager.getId()}
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            Email: <a href="mailto:${Manager.getEmail()}" target="_blank">${Manager.getEmail()}</a>
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            Office Number: ${Manager.getOfficeNum()}
                        </div>
                    </div>
                </div>
            </div>
    `
    };


    // create engineer cards
    let generateEngineers = Engineer => {
        //forEach but that won't work because they are not organized in an array by type...
            return`
            <div class="column is-flex-direction-column is-one-third">
                <div class="box">
                    <div class="has-background-info p-3">
                        <h2 class="subtitle is-3 has-text-white mb-2">
                            ${Engineer.getName()}
                        </h2>
                        <h3 class="subtitle is-4 has-text-white">
                            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/FEFEFE/external-glasses-retro-those-icons-lineal-those-icons.png"/>
                            ${Engineer.getRole()}
                        </h3>
                    </div>
                    <div>
                        <div class="box mb-0 pt-2 pb-2 mt-4">
                            Employee ID: ${Engineer.getId()}
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            Email: <a href="mailto:${Engineer.getEmail()}" target="_blank">${Engineer.getEmail()}</a>
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            Github: <a href="github.com/${Engineer.getGithub()}" target="_blank">${Engineer.getGithub()}</a>
                        </div>
                    </div>
                </div>
            </div>
    `
    };


    // create intern cards
    let generateInterns = Intern => {
        //forEach but that won't work because they are not organized in an array by type...
            return`
            <div class="column is-flex-direction-column is-one-third">
                <div class="box">
                    <div class="has-background-info p-3">
                        <h2 class="subtitle is-3 has-text-white mb-2">
                            ${Intern.getName()}
                        </h2>
                        <h3 class="subtitle is-4 has-text-white">
                        <img src="https://img.icons8.com/ios/24/FEFEFE/student-female.png"/>
                            ${Intern.getRole()}
                        </h3>
                    </div>
                    <div>
                        <div class="box mb-0 pt-2 pb-2 mt-4">
                            Employee ID: ${Intern.getId()}
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            Email: <a href="mailto:${Intern.getEmail()}" target="_blank">${Intern.getEmail()}</a>
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            School: ${Intern.getSchool()}
                        </div>
                    </div>
                </div>
            </div>
    `
    };

    const teamCards = [];

    teamCards.push(managerArr.map(Manager => generateManager(Manager)));
    teamCards.push(engineerArr.map(Engineer => generateEngineers(Engineer)));
    teamCards.push(internArr.map(Intern => generateInterns(Intern)));

    console.log(`
    ------------------------------------------------------------
    
                Your Team Roster has been generated!

        Go to your index.html file in the dist folder to view!

    ------------------------------------------------------------`)

    return teamCards.join('');
};
    
    // generate entire webpage
    module.exports = employees => {
        return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
        <title>Team Roster</title>
        </head>
        <body>
        <div class="has-background-danger">
        <h1 class="title is-1 has-text-weight-normal has-text-white has-text-centered p-6">
        My Team
        </h1>
        </div>
        <section class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center">
        ${generateEmployees(employees)}
        </section>
        </body>
        </html>
        `
    };
    
