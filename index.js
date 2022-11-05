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

            console.log(answersArr[0].name)
            console.log(employeeArr[0].name)

            // const generateHTML = () => {
            //     return `
            // <!DOCTYPE html>
            // <html lang="en">
            // <head>
            //     <meta charset="UTF-8">
            //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
            //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
            //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            //     <title>Team Profile</title>
            // </head>
            // <body>
            
            //     <header class="py-5 bg-danger text-white text-center mb-5">
            //         <h1>My Team</h1>
            //     </header>
            
            //     <div class="container">
            //         <div class="row g-3">
            //             <div class="col-12 col-md-6 col-lg-4">
            //                 <div class="card">
            //                     <div class="card-header bg-primary text-white">
            //                         <h5 class="card-title">${mgmt.name}</h5>
            //                         <h6 class="card-subtitle">${mgmt.role}</h6>
            //                     </div>
            //                     <div class="card-body">
            //                         <p class="card-text">Employee ID: ${mgmt.id}</p>
            //                         <p>Email: <a href="#" class="card-link">${mgmt.email}</a></p>
            //                         <p>Office Number: <a href="#" class="card-link">${mgmt.officeNumber}</a></p>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div class="col-12 col-md-6 col-lg-4">
            //                 <div class="card">
            //                     <div class="card-header bg-primary text-white">
            //                         <h5 class="card-title">${eng.name}</h5>
            //                         <h6 class="card-subtitle">${eng.role}</h6>
            //                     </div>
            //                     <div class="card-body">
            //                         <p class="card-text">Employee ID: ${eng.id}</p>
            //                         <p>Email: <a href="mailto:${eng.email}" class="card-link">${eng.email}</a></p>
            //                         <p>GitHub: <a href="${eng.github}" class="card-link">${eng.github}</a></p>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div class="col-12 col-md-6 col-lg-4">
            //                 <div class="card">
            //                     <div class="card-header bg-primary text-white">
            //                         <h5 class="card-title">${int.name}</h5>
            //                         <h6 class="card-subtitle">${int.role}</h6>
            //                     </div>
            //                     <div class="card-body">
            //                         <p class="card-text">Employee ID: ${int.id}</p>
            //                         <p>Email: <a href="mailto:${int.name}" class="card-link">${int.email}</a></p>
            //                         <p>School: ${int.school}</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
                
            // </body>
            // </html>
            //     `
            // }

            // fs.writeFileSync('./dist/index.html', generateHTML())
        }
    })
}



// fs.writeFileSync('./dist/index.html', generateHTML())

promptManager()