INSERT into department (department_name)
VALUES
("Legal"), -- 1
("Sales"), -- 2
("Finance"), -- 3
("Engineering"); -- 4


INSERT INTO roles (title, salary, department_id)
VALUES
("Senior SoftwareEngineer", 116000, 4), -- 1
("Lead Software Engineer", 92000, 4), -- 2
("Software Engineer", 90000, 4), -- 3
("Account Executive", 59000, 2), -- 4
("Senior Account Executive", 76000, 2), -- 5
("Lead Account Executive", 47000, 2), -- 6
("Legal Assistant",45000, 1), -- 7
("Lawyer", 121000, 1); -- 8

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Robb", "Stark", 2, 2),
("Sansa", "Stark", 7, 3),
("Bran", "Stark", 8, 4),
("Arya", "Stark", 5, 1),
("Jon", "Snow", 1, 2),
("Danni", "Targaryen", 5, 1),
("Rickon", "Stark", 3, 2),
("Karlon", "Stark", 3, 2);

INSERT INTO manager (first_name, last_name)
VALUES
("Robert", "Baratheon"), -- 1
("Ned", "Stark"), -- 2
("Tyrion", "Lannister"), -- 3
("Roose", "Bolton");     -- 4    
