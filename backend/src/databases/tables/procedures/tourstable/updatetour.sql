CREATE PROCEDURE UpdateTour
    @tour_id INT,
    @destination VARCHAR(100),
    @duration INT,
    @price DECIMAL(10, 2),
    @tour_type VARCHAR(50),
    @description VARCHAR(MAX)
AS
BEGIN
    UPDATE Tours
    SET destination = @destination,
        duration = @duration,
        price = @price,
        tour_type = @tour_type,
        description = @description,
        updated_at = GETDATE()
    WHERE tour_id = @tour_id;
END
