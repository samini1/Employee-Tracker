DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY 
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY
    title VARCHAR(30)
    salary DECIMAL
    department_id INTEGER   
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INTEGER
    manager_id INTEGER 
);