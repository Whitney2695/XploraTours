CREATE PROCEDURE CreateTour
    @destination VARCHAR(100),
    @duration INT,
    @price DECIMAL(10, 2),
    @tour_type VARCHAR(50),
    @description VARCHAR(MAX)
AS
BEGIN
    INSERT INTO Tours (destination, duration, price, tour_type, description)
    VALUES (@destination, @duration, @price, @tour_type, @description);
END
