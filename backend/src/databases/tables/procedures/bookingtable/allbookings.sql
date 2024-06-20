CREATE PROCEDURE GetBookingsForUser
    @user_id INT
AS
BEGIN
    SELECT booking_id, tour_id, booking_date
    FROM Bookings
    WHERE user_id = @user_id;
END;
