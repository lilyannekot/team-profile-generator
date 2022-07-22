const createTeam = (responses) => {
  const createManager = (Manager) => {
    return `
    !DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js">
    <title>Team Profiles</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1 class="text-center">Team Profiles</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row col-12 justify-content-center">

        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${Manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Manager.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a>
                    </li>
                    <li class="list-group-item">Office number: ${Manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div> `;
  };

  const createEngineer = (Engineer) => {
    return `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${Engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Engineer.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.geGgithub()}</a>
                    </li>
                </ul>
            </div>
        </div> `;
  };

  const createIntern = (Intern) => {
    return `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${Intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Intern.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a>
                    </li>
                    <li class="list-group-item">School: ${Intern.getSchool()}</li> 
                </ul>
            </div>
        </div> `;
  };

  const createEmployee = (Employee) => {
    return `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${Employee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Employee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Employee.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${Employee.getEmail()}">${Employee.getEmail()}</a>
                    </li>
                </ul>
            </div>
        </div> 
        </div>
        </div>
     </div>
</body>
</html> `;
  };

  const html = [];

  html.push(
    responses
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  html.push(
    responses
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );

  html.push(
    responses
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  html.push(
    responses
      .filter((employee) => employee.getRole() === "Employee")
      .map((employee) => createEmployee(employee))
      .join("")
  );

  return html.join("");
};

module.exports = createTeam;
