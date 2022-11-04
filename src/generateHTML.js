const answersArr = require(./index.js)

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

module.exports = generateHTML