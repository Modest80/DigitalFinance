-- Создание пользователей
create table Users(
	id SERIAL primary key,
	name VARCHAR(50) not NULL,
	email VARCHAR(100) unique not NULL,
	phone VARCHAR(30) unique not NULL,
	password VARCHAR(64) not NULL
);

-- Создание аккаунтов
CREATE TABLE Accounts (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES Users(id),
    account_number VARCHAR(50) NOT NULL UNIQUE,
    balance decimal NOT NULL DEFAULT 0.0,
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Created'
);

-- Создание таблицы историй
CREATE TABLE Histories (
    Id SERIAL PRIMARY KEY,
	From_account VARCHAR(20) REFERENCES Accounts(Account_number),
	To_account VARCHAR(20) REFERENCES Accounts(Account_number),
    Amount DECIMAL NOT NULL,
    Commentary VARCHAR(1024) NOT NULL,
    Created_at bigint DEFAULT extract(epoch from now())
);