const Employee = require("./Employee")

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(
        id, 
        name, 
        role, 
        email,         
        github
    ) {
        super(id,name,role,email),
        this.github = github
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer