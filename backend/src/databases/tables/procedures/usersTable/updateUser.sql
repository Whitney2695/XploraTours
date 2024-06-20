CREATE PROCEDURE UpdateUser
  @user_id INT,
  @full_name VARCHAR(100),
  @password_hash VARCHAR(255),
  @email VARCHAR(100),
  @phone_number VARCHAR(20),
  @profile_picture VARCHAR(255)
AS
BEGIN
  UPDATE Users
  SET full_name = @full_name,
      password_hash = @password_hash,
      email = @email,
      phone_number = @phone_number,
      profile_picture = @profile_picture
  WHERE user_id = @user_id
END
