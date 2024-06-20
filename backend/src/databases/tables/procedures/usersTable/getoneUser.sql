CREATE PROCEDURE GetUserByID
    @user_id INT
AS
BEGIN
    SELECT user_id, full_name, email, phone_number, profile_picture, created_at, updated_at
    FROM Users
    WHERE user_id = @user_id;
END;
