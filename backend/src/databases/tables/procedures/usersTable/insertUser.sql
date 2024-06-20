CREATE PROCEDURE InsertUser
  @full_name VARCHAR(100),
  @password_hash VARCHAR(255),
  @email VARCHAR(100),
  @phone_number VARCHAR(20),
  @profile_picture VARCHAR(255)
AS
BEGIN
  INSERT INTO Users (full_name, password_hash, email, phone_number, profile_picture)
  VALUES (@full_name, @password_hash, @email, @phone_number, @profile_picture)
END
