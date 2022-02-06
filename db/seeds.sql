
INSERT INTO department(name)
VALUES 
('Thingies'),
('Whatsits'),
('Balderdash');


INSERT INTO roles(title, salary, department_id)
VALUES 
("General Manager", 60000, 3),
("Specific Manager", 41000, 3),
("Thing Doer", 43000, 1),
("Place Minder", 50000, 2),
("Slack Picker", 25000, 1);


INSERT INTO employees(first_name, last_name, manager_id, role_id)
VALUES 
("Richard", "Little", null, 1),
("Richard", "Big", 1, 2),
("Ali", "Michaels", 1, 2),
("Chester", "Openhaus", 2, 3),
('Gertrude', "Whets", 2, 4),
("Phineas", "Gage", 3, 4),
("Marionette", "LeFonse", 3, 5);