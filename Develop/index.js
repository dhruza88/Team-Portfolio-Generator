const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generate = require("./util/generateHtml")
const employees = [];


const start = () => {
    const promptQuestions =
        employees.length > 0 ?
            [
                {
                    type: "input",
                    message: "Enter your name",
                    name: "name"
                },
                {
                    type: "list",
                    message: "Please select your type",
                    choices: ["Engineer", "intern"],
                    name: "role"
                },
                {
                    type: "input",
                    message: "Please enter your email?",
                    name: "email"
                }
            ] :
            [
                {
                    type: "input",
                    message: "Enter the Team Manager's name",
                    name: "name"
                },
                {
                    type: "list",
                    message: "Please select employee role type",
                    choices: ["Manager"],
                    name: "role"
                },
                {
                    type: "input",
                    message: "Please enter employee email?",
                    name: "email"
                }
            ];
    // console.log(promptQuestions);
    inquirer.prompt(promptQuestions)
        .then((answer) => {
            switch (answer.role.toLowerCase()) {
                case 'manager':
                    inquirer.prompt({
                        type: "input",
                        message: "What is your Office Number?",
                        name: "officeNumber"
                    }).then((addtlAnswer) => {
                        answer['officeNumber'] = addtlAnswer.officeNumber;
                        handleEmployee(answer);
                    });
                    break;

                case 'engineer':
                    inquirer.prompt(
                        {
                            type: "input",
                            message: "What is your github?",
                            name: "gitHub"
                        }).then((addtlAnswer) => {
                            answer['github'] = addtlAnswer.gitHub;
                            handleEmployee(answer);
                        });
                    break;

                case 'intern':
                    inquirer.prompt({
                        type: "input",
                        message: "What is your School?",
                        name: "school"
                    }).then((addtlAnswer) => {
                        answer['school'] = addtlAnswer.school;
                        handleEmployee(answer);
                    });
                    break;
            }

        });

}

const handleEmployee = (compEmp) => {
    let newEmployee = null;
    compEmp.id = Number(Math.floor(Math.random() * 10));
    if (compEmp.role.toLowerCase() === 'manager') {
        newEmployee = new Manager(compEmp.id, compEmp.name, compEmp.role, compEmp.email, compEmp.officeNumber);
    }
    if (compEmp.role.toLowerCase() === 'engineer') {
        newEmployee = new Engineer(compEmp.id, compEmp.name, compEmp.role, compEmp.email, compEmp.gitHub);
    }
    if (compEmp.role.toLowerCase() === 'intern') {
        newEmployee = new Intern(compEmp.id, compEmp.name, compEmp.role, compEmp.email, compEmp.school);
    }

    employees.push(newEmployee);
    inquirer.prompt({
        type: "list",
        message: "Enter another employee?",
        choices: ["Yes", "No"],
        name: "enterAgain"
    }).then((strtAgain) => {
        if (strtAgain.enterAgain === "Yes") {
            start();
        } else {
            try {
                const myHTML = generate(employees);
                writeHTMLFile(myHTML);
            } catch (err) {
                console.log(' ERROR ');
                console.log(' ERROR ');
                console.log(' ERROR ');
                console.log('  ');
                console.log(err);
            }
        }
    });
}
const writeHTMLFile = (html) => {
    const fs = require('fs');
    try {
      fs.writeFileSync('./dist/html/index.html', html);
      setTimeout(() => {
        readHTMLFile();
      }, 2000);
    } catch (err) {
      console.error(err);
    }
}
const readHTMLFile = () => {
    console.log('attempting open file');
    var http = require('http'),
    fs = require('fs');

    fs.readFile('./dist/html/index.html', function (err, html) {
        if (err) {
            throw err;
        }
        http.createServer(
            function (request, response) {
                response.writeHeader(200, { "Content-Type": "text/html" });
                response.write(html);
                response.end();
            }).listen(8000);
    });
}

start()