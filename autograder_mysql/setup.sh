#!/usr/bin/env bash
apt install nodejs npm -y

apt install npm -y

npm install jest --global 

debconf-set-selections <<< 'mysql-server mysql-server/root_password password rootMySQL'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password rootMySQL'
apt-get -y install mysql-server

mysql -p="rootMySQL" -u "root" -Bse "create database grade;
grant usage on *.* to gradeAdmin@localhost identified by 'gradePassword';
grant all privileges on grade.* to gradeAdmin@localhost;"


# mysql --user=root --password=rootMySQL  -e "source setup.sql"

#mysql -u "root" -p"rootMySQL" <<EOF
#    create database grade;
#    grant usage on *.* to gradeAdmin@localhost identified by 'gradePassword';
#    grant all privileges on grade.* to gradeAdmin@localhost;
#EOF



