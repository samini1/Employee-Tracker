const inquirer = require('inquirer')
const mysql = require('mysql2')
const consoleTable = require('console.table');

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
};

//view all roles
function viewRoles() {
    //present job title, id, department
};

//view all employees
function viewEmployees() {
    //show employee id, first names, last names, job titles, depatments, salary, managers 
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
};