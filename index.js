const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
//connect to database employees
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees",
});

//prompt when starting app
function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose your task",
        name: "start",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then(function (choice) {     
      switch (choice.start) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        default:
          console.log("No match!");
          break;
      }
    });
}

//View all departments from start prompt
function viewDepartments() { 
  //present department names and id
  connection.query(
      `SELECT * FROM department;`,
      (err, result) => {
          if (err) {
              console.log(err);
          }
          console.table(result);
          startPrompt();
      });
}

//view all roles
function viewRoles() {
  //present job title, id, department
  connection.query(
    `SELECT roles.title, roles.id, department.name AS department FROM roles JOIN department ON roles.department_id = department.id ORDER BY roles.id;`,
    (err, result) => {
      console.table(result);
      startPrompt();
    }
  );
}

//view all employees
function viewEmployees() {
  //show employee id, first names, last names, job titles, depatments, salary, managers
  connection.query(
    `SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.name AS department, roles.salary AS salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager 
    FROM employees 
    JOIN roles ON employees.role_id = roles.id  
    JOIN department ON roles.department_id = department.id
    JOIN employees manager ON employees.manager_id = manager.id
    ORDER BY employees.id;`,
    (err, result) => {
      console.table(result);
      startPrompt();
    }
  );
}

//Add a deparment
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "depName",
        message: "Enter the new department name",
      },
    ])
    .then((answer) => {
      connection.query(
        `INSERT INTO department(name)
            VALUES (?);`,
        answer.depName
      );
      viewDepartments();
      startPrompt();
    });
}

//Add a role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the title of this role",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the salary for this role",
      },
      {
        type: "input",
        name: "department",
        message: "Enter a department id number",
      },
    ])
    .then((answer) => {
      connection.query(
        `INSERT INTO roles(title, salary, department_id)
         VALUES (?,?,?)`,
          ([answer.title, answer.salary, answer.department])       
      );
      viewRoles();
      startPrompt();
    });
}

//Add an employee
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter first name",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter last name",
    },
    {
      type: "input",
      name: "empRole",
      message: "Enter the id number for this employee's role",
    },
    {
      type: "input",
      name: "manager",
      message: "Enter the id number of the manager for this employee",
    },
  ])
  .then((answer) => {
    connection.query(
      `INSERT INTO employees (first_name, last_name, manager_id, role_id) 
        VALUES (?, ?, ?, ?)`,
        ([answer.firstName, answer.lastName, answer.manager, answer.empRole]),
       
    );
    viewEmployees();
  });
}

//Update an employee role
function updateEmployee() {
  //select employee to update and their new role, update in database
  connection.query(
    `SELECT employees.id, employees.first_name, employees.last_name, roles.title 
    FROM employees 
    JOIN roles ON employees.role_id = roles.id ORDER BY employees.id;`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      inquirer.prompt([
        {
          type: "input",
          name: "empID",
          message: "Enter the id number for the employee you would like to update"
        },
        {
          type: 'input',
          name: 'roleID',
          message: "Enter the id number for this employee's new role"
        }
      ])
      .then((answer) => {
        connection.query(
          `UPDATE employees SET role_id = ${answer.roleID} WHERE id = ${answer.empID}`
        );
        viewEmployees();
        startPrompt();
      });
    }
  );
}

//initiate
startPrompt();
