CREATE TABLE Histories (
    Id SERIAL PRIMARY KEY,
	From_account VARCHAR(20) REFERENCES Accounts(Account_number)NOT NULL,
	To_account VARCHAR(20) REFERENCES Accounts(Account_number)NOT NULL,
    Amount DECIMAL NOT NULL,
    Commentary VARCHAR(1024) NOT NULL,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Или 
CREATE TABLE Histories (
    Id SERIAL PRIMARY KEY,
    From_account VARCHAR(20),
	To_account VARCHAR(20),	
    Amount DECIMAL NOT NULL,
    Commentary VARCHAR(1024) NOT NULL,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (From_account) REFERENCES Accounts(Account_number),
    FOREIGN KEY (To_account) REFERENCES Accounts(Account_number)
);