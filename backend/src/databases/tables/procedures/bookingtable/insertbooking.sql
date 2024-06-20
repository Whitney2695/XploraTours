CREATE PROCEDURE InsertBooking
    @user_id INT,
    @tour_id INT
AS
BEGIN
    INSERT INTO Bookings (user_id, tour_id, booking_date)
    VALUES (@user_id, @tour_id, GETDATE());
END;
