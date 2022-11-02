import inquirer from "inquirer"

const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Team Manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the Team Manager's employee ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Team Manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Team Manager's office number?"
        },
    ])
}

const promptEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's employee ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
        },
    ])
}

const promptIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is the intern's employee ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern go to?"
        },
    ])
}

const promptNextEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Add another employee?"
            choices: ["Engineer", "Intern", "Finished"]
        },
    ])
}

promptManager()