const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table');
//connect to database employees
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees'
});

//prompt when starting app
function startPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Choose your task',
            name: 'start',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
    .then(function (choice) {
        switch (choice) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles' :
                viewRoles();
                break;
            case 'View all employees' :
                viewEmployees();
                break;
            case 'Add a department' :
                addDepartment();
            case 'Add a role' :
                addRole(); 
                break;
            case 'Add an employee' :
                addEmployee();
                break;
            case 'Update an employee role' :
                updateEmployee();
                break;
        }
    });     
};

//View all departments from start prompt
function viewDepartments() {
    //present department names and id
    connection.query(
        'SELECT * FROM department'
    )
};

//view all roles
function viewRoles() {
    //present job title, id, department
    connection.query('SELECT role.title, role.id, department.name AS department FROM roles JOIN roles ON roles.department_id;')
};

//view all employees
function viewEmployees() {
    //show employee id, first names, last names, job titles, depatments, salary, managers
    connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.name AS department, roles.salary AS salary, CONCAT(employees.first_name, " ", employees.last_name) AS manager FROM employees JOIN roles ON employees.role_id = role.id JOIN department ON roles.department_id = department.id;') 
};

//Add a deparment
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'depName',
            message: 'Enter the new department name'
        }
    ])
};

//Add a role
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of this role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for this role'
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'Enter the department for this role'
        }        
    ])
};

//Add an employee
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter first name'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the salary for this role'
        },
        {
            type: 'input',
            name: 'empRole',
            message: 'Enter the role for this employee'
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Enter a manager for this employee'
        }        
    ])
};

//Update an employee role
function updateEmployee() {
    //select employee to update and their new role, update in database
    connection.query('SELECT employees.id, roles.title FROM employees JOIN roles ON employees.role_id = roles.id;', function(err, res) {
        if (err) throw err
        console.log(res)
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Enter the corresponding id for the employee you would like to update'
            }
        ]) 
    } )
};