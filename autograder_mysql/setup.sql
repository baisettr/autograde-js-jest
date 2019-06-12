create database grade;
grant usage on *.* to gradeAdmin@localhost identified by 'gradePassword';
grant all privileges on grade.* to gradeAdmin@localhost;