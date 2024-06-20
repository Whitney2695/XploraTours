CREATE PROCEDURE GetAllUsers
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT user_id, full_name, email, phone_number, profile_picture, created_at, updated_at
    FROM Users;
END
