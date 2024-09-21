create table Users(
	id SERIAL primary key,
	name VARCHAR(50) not NULL,
	email VARCHAR(100) unique not NULL,
	phone VARCHAR(30) unique not NULL,
	password VARCHAR(64) not NULL
)