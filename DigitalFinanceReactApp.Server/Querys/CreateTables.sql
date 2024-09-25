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

-- Создание всех счетов (для гибкости)
CREATE TABLE All_Accounts(
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL
);

--Заполняем счета в таблицу
INSERT INTO All_Accounts(type) VALUES
('Сберегательный'),
('Текущий'),
('Кредитный');

--Запускаем последовательность для уникального номера счета(каждый раз будет +1)
-- PS Создавать последовательность нужно до создания таблицы
--CREATE SEQUENCE account_number_reg START 1000000000; 

---- Редактирование таблицы Accounts
--CREATE TABLE Accounts (
--    id SERIAL PRIMARY KEY,
--    user_id int REFERENCES Users(id),
--    title Text,
--    account_number_reg VARCHAR(20) NOT NULL UNIQUE DEFAULT (nextval('account_number_seq')::text),
--    balance decimal NOT NULL DEFAULT 0.0,
--    created_at bigint NOT NULL,
--    updated_at bigint NOT NULL,
--    status VARCHAR(50) NOT NULL DEFAULT 'Created',
--    accounts_id int,

--    FOREIGN KEY accounts_id REFERENCES  All_Accounts(id)
--);