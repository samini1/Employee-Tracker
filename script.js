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
}

//View all departments from start prompt
function viewDepartments() {};

//view all roles
function viewRoles() {};

//view all employees
function viewEmployees() {};

//Add a deparment
function addDepartment() {};

//Add a role
function addRole() {};

//Add an employee
function addEmployee() {};

//Update an employee role
function updateEmployee() {};