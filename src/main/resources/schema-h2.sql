DROP TABLE IF EXISTS course_students;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS course;

CREATE SEQUENCE hibernate_sequence START WITH 100 INCREMENT BY 1;

CREATE TABLE students (
  id INT AUTO_INCREMENT,    
    stu_id VARCHAR(10),
    nm VARCHAR(50),
    email VARCHAR(50),
    admitted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)    
);

CREATE TABLE course (
  id INT AUTO_INCREMENT,    
    dept char(2),
    num int,
    PRIMARY KEY (ID)    
);

CREATE TABLE course_students (
  id INT AUTO_INCREMENT,    
    course_id long,
    students_id long,
    primary key(id)        
);
