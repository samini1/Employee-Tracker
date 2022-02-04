--department seed
INSERT INTO department (name)
VALUE ('Thingies');
INSERT INTO department (name)
VALUE ('Whatsits');
INSERT INTO department (name)
VALUE ('Balderdash');

--role seed
INSERT INTO roles (title, salary, department_id)
VALUE ("General Manager", 60000, 3);
INSERT INTO roles (title, salary, department_id)
VALUE ("Specific Manager", 41000, 3);
INSERT INTO roles (title, salary, department_id)
VALUE ("Thing Doer", 43000, 1);
INSERT INTO roles (title, salary, department_id)
VALUE ("Place Minder", 50000, 2);
INSERT INTO roles (title, salary, department_id)
VALUE ("Slack Picker", 25000, 1);

--Employee seed
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Richard", "Little", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Richard", "Big", 1, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Ali", "Michaels", 1, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Chester", "Openhaus", 2, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Gertrude', "Whets", 2, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Phineas", "Gage", 3, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Marionette", "LeFonse", 3, 5);