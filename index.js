const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')

// array for user input - holds answer objects
const answersArr = []

// array of employees
const employeeArr = []

const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Team Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Team Manager's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Team Manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Team Manager's office number?"
        },
    ])
    .then((answers) => {
        answersArr.push(answers)
        promptNextEmployee()
    })
}

const promptEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        },
    ])
    .then((answers) => {
        answersArr.push(answers)
        promptNextEmployee()
    })
}

const promptIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern go to?"
        },
    ])
    .then((answers) => {
        answersArr.push(answers)
        promptNextEmployee()
    })
}

const promptNextEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Add another employee?",
            choices: ["Engineer", "Intern", "Finished"]
        },
    ])
    .then((answers) => {
        if (answers.nextEmployee === "Engineer") {
            promptEngineer()
        } else if (answers.nextEmployee === "Intern") {
            promptIntern()
        } else {
            answersArr.forEach((employee) => {
                if (employee.officeNumber) {

                    const mgmt = new Manager(employee.name, employee.id, employee.email, employee.officeNumber)

                    employeeArr.push(mgmt)

                } else if (employee.github) {

                    const eng = new Engineer(employee.name, employee.id, employee.email, employee.github)

                    employeeArr.push(eng)
                    
                } else {
                    
                    const int = new Intern(employee.name, employee.id, employee.email, employee.school)

                    employeeArr.push(int)
                }
            })

            // writes the html file
            fs.writeFileSync('./dist/index.html', generateHTML(employeeArr))
        }
    })
}

// initialize the first prompt
promptManager()