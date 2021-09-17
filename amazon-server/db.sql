create database mystore;

USE mystore;

create table user (
	id integer PRIMARY KEY auto_increment, 
	firstName VARCHAR(100),
	lastName VARCHAR(100), 
	address VARCHAR(100),
	city VARCHAR(100),
	country VARCHAR(100),
	zip VARCHAR(100),
	phone VARCHAR(20),
	email VARCHAR(100),
	password VARCHAR(100),
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	active INTEGER DEFAULT 0,
	activationToken VARCHAR(100)
);
-- INSERT INTO user (firstName, lastName, address, city, country, zip, phone, email, password) VALUES ('f', 'l', 'a', 'ct', 'ctr', 123, 45678, 'f@l.c', 'fl');

create table admin (
	id integer PRIMARY KEY auto_increment, 
	firstName VARCHAR(100),
	lastName VARCHAR(100), 
	phone VARCHAR(20),
	email VARCHAR(100),
	password VARCHAR(100),
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	active INTEGER DEFAULT 1
);

create table category (
	id integer PRIMARY KEY auto_increment, 
	title VARCHAR(50),
	description VARCHAR(100),
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table brand (
	id integer PRIMARY KEY auto_increment, 
	title VARCHAR(50),
	description VARCHAR(100),
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table product (
	id integer PRIMARY KEY auto_increment, 
	title VARCHAR(50),
	description VARCHAR(10000),
	category INTEGER,
	price DECIMAL,
	brand INTEGER,
	image VARCHAR(100),
	isActive INTEGER DEFAULT 1,
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table productReviews (
	id integer PRIMARY KEY auto_increment, 
	review VARCHAR(100),
	userId INTEGER,
	productId INTEGER,
	rating DECIMAL,
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table userOrder (
	id integer PRIMARY KEY auto_increment, 
	userId INTEGER,
	totalAmount DECIMAL,
	tax DECIMAL,
	paymentType VARCHAR(10),
	paymentStatus VARCHAR(10),
	deliveryStatus VARCHAR(10),
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table orderDetails (
	id integer PRIMARY KEY auto_increment, 
	orderId INTEGER,
	productId INTEGER,
	price DECIMAL,
	quantity INTEGER,
	totalAmount DECIMAL,
	createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- insert into productReviews (userId, productId, review, rating) values (1, 1, 'This is a nice product', 4);
-- insert into productReviews (userId, productId, review, rating) values (2, 1, 'This is a worst product I have ever seen.... ', 1);

-- ALTER table product add COLUMN isActive INTEGER DEFAULT 1;