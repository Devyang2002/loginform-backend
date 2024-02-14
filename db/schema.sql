create database logindb;

use logindb;

create table users(
	id bigint auto_increment primary key,
	firstname text not null,
    lastname text not null,
    email text,
	address text,
    password text
);

select id from users;

desc users;

