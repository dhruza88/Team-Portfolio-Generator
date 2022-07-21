const Employee = require("./Employee")

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(
        id, 
        name, 
        role, 
        email,         
        recvdGitHub
    ) {
        super(id,name,role,email),
        this.gitHub = recvdGitHub
    }

    getGithub() {
        return this.gitHub;
    }
}

module.exports = Engineer