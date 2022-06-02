USE employeedatabase2022

INSERT INTO department (department_name)
VALUES ("sales"),
       ("customer service"),
       ("operations"),
       ("project management"),
       ("consulting");
       ("engineering");
       ("recruiting");

INSERT INTO role (title, salary, department_id)
VALUES ("account executive", 160000, 001),
       ("customer service representative", 65000, 002) ,
       ("operations manager", 156000, 003),
       ("project manager", 125000, 004),
       ("consultant", 157000, 005),
       ("engineer",  300000, 006),
       ("recruiter", 75000, 007);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harry", "Styles", 9),
       ("Cardi", "B", 8),
       ("Kim", "Kardashian", 7),
       ("Oprah", "Winfrey", 6),
       ("Bruce", "Lee", 5),
       ("Barack", "Obama", 4),
       ("James", "Bond", 3);
