INSERT INTO department (name)
VALUES
('IT'),
('OPERATIONS'),
('FIELD SERVICES'),
('COMMUNITY OUTREACH');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Business Analyst', 65000, 1),
('IT Analyst', 60000, 1),
('Director of Operations', 105000, 2),
('Production Coordinator', 75000, 2),
('Flex Associate', 50000, 3),
('Monitor', 45000, 3),
('Community Liaison', 67000, 4),
('Aide', 38000, 4);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES
('Jerry', 'Lewis', 1, 2),
('Bruce', 'Ekler', 2, null),
('Krishna', 'Albani', 3, null),
('Kortney', 'Webster', 4, 3),
('Brian', 'Larb', 5, 6),
('Jordan', 'Blarb', 6, null),
('Alice', 'Chains', 7, 8),
('Amy', 'Jonstone', 8, null);