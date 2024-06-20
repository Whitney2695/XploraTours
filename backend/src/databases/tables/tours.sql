CREATE TABLE Tours (
    tour_id INT IDENTITY(1,1) PRIMARY KEY,
    destination VARCHAR(100) NOT NULL,
    duration INT NOT NULL,  
    price DECIMAL(10, 2) NOT NULL,
    tour_type VARCHAR(50) NOT NULL,
    description VARCHAR(MAX), 
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()  
);
