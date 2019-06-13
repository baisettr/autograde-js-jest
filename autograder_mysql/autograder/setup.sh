#!/usr/bin/env bash

apt-get install debconf-utils

debconf-set-selections <<< 'mysql-server mysql-server/root_password password rootMySQL'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password rootMySQL'
apt-get -y install mysql-server

/etc/init.d/mysql start
mysql --user=root --password=rootMySQL -Bse "create database grade;
grant usage on *.* to gradeAdmin@localhost identified by 'gradePassword';
grant all privileges on grade.* to gradeAdmin@localhost;"

apt install nodejs npm -y

apt install npm -y

npm install jest --global
