CREATE TABLE department (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10.2) NOT NULL,
    department_id INT ,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);
