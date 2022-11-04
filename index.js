const fs = require('fs')
const inquirer = require('inquirer')
// const generateHTML = require('./src/generateHTML')

const answersArr = []

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
    .then((answers) => {
        answersArr.push(answers)
        promptNextEmployee()
    })
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
    .then((answers) => {
        answersArr.push(answers)
        promptNextEmployee()
    })
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
            console.log(answersArr)
            fs.writeFileSync('./dist/index.html', generateHTML())
        }
    })
}

const generateHTML = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>

    <header class="py-5 bg-danger text-white text-center mb-5">
        <h1>My Team</h1>
    </header>

    <div class="container">
        <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title">${answersArr[0].managerName}</h5>
                        <h6 class="card-subtitle">Team Manager</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Employee ID: ${answersArr[0].managerID}</p>
                        <p>Email: <a href="#" class="card-link">${answersArr[0].managerEmail}</a></p>
                        <p>Office Number: <a href="#" class="card-link">${answersArr[0].managerOfficeNumber}</a></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title">${answersArr[1].engineerName}</h5>
                        <h6 class="card-subtitle">Engineer</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Employee ID: ${answersArr[1].engineerID}</p>
                        <p>Email: <a href="#" class="card-link">${answersArr[1].engineerEmail}</a></p>
                        <p>GitHub: <a href="#" class="card-link">${answersArr[1].engineerGithub}</a></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title">${answersArr[2].internName}</h5>
                        <h6 class="card-subtitle">Intern</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Employee ID: ${answersArr[2].internID}</p>
                        <p>Email: <a href="#" class="card-link">${answersArr[2].internEmail}</a></p>
                        <p>School: <a href="#" class="card-link">${answersArr[2].internSchool}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>
    `
}

promptManager()

// module.exports = answersArr